import sys
import socket
import selectors
import types

sel = selectors.DefaultSelector()

host, port = sys.argv[1], int(sys.argv[2])
lsock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
lsock.bind((host, port))
lsock.listen()

print(f"Listening on {(host, port)}")

# Configures the socket in a non-blocking mode
# so it can listen to multiple clients
lsock.setblocking(False) 
# Registers the socket to be monitored, for the
# listening socket we want the read events
sel.register(lsock, selectors.EVENT_READ, data=None)

try:
    while True:
        # returns a list of tuples, one for each socket
        #blocksuntil there are sockets ready for I/O
        events = sel.select(timeout=None) 
        for key, mask in events:
            # selector key
            print(f"key value {key}")
            # event mask
            print(f"mask value {mask}")
            if key.data is None:
                # If the data is None it is the listenign socket
                accept_wrapper(key.fileobj)
            else:
                # If there's data the it is a client socket
                service_connection(key, mask)

except KeyboardInterrupt:
    print("Caught keyboard interrupt, existing")
finally:
    sel.close()

# Remember, this is the main objective in this version of the server because you don’t want it
# to block. If it blocks, then the entire server is stalled until it returns. That means other
# sockets are left waiting even though the server isn’t actively working. This is the dreaded
# “hang” state that you don’t want your server to be in.
def accept_wrapper(sock):
    conn, addr = sock.accept()  # Should be ready to read
    print(f"Accepted connection from {addr}")
    conn.setblocking(False)
    data = types.SimpleNamespace(addr=addr, inb=b"", outb=b"")
    events = selectors.EVENT_READ | selectors.EVENT_WRITE
    print(f"this are the events -> {events}")
    # We pass the mask, socket , and data objects to register
    sel.register(conn, events, data=data)

def service_connection(key, mask):
    # key -> touple with the fileobj(socket) and the data
    # mask -> events that are ready

    sock = key.fileobj
    data = key.data

    # Using "&" bitwise operator, operators that are used to compare (binary)
    # numbers
    if mask & selectors.EVENT_READ:
        recv_data = sock.recv(1024)

        if recv_data:
            data.outb += recv_data
        else:
            # If no data is received, this means that the client has closed their socket,
            # so the server should too. But don’t forget to call sel.unregister() before            
            # closing, so it’s no longer monitored by .select().
            print(f"Closing connection to {data.addr}")
            sel.unregister(sock)
            sock.close()
    if mask & selectors.EVENT_WRITE:
        if data.outb:
            print(f"Echoing {data.outb!r} to {data.addr}")

            # The .send() method returns the number of bytes sent
            sent = sock.send(data.outb)

            # The bytes sent are removed from the send buffer using slice notation
            data.outb = data.outb[sent:]
