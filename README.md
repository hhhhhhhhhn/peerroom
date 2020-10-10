# peerroom

Small initialization to help create PeerJs connections. See the
[test.html](test/test.html) file to see the usage. You must define a global
`Room` object with `init`, `host` and `guest` functions. `init` is called when
hosting a room, giving the room URL and ID as arguments. `host` is called after
the initialization when hosting a room, and gives the peer as its only argument.
It should include the `peer.on("connection", ...)` definition. Finally, the
`guest` function is called when connected to the host, giving the connection as
its only argument, in which `connection.on("data", ...)` can be defined. This
script should be deferred.
