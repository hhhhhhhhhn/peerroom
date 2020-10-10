const peer = new Peer({
	host:'peerjs-server.herokuapp.com',
	secure:true,
	port:443
})

const LUrl = window.location.href
let room = LUrl.match(/room=([^$&]*)/)
if(room) room = room[1]

function host() {
	peer.on("open", ()=>{
		let url = LUrl + (LUrl.includes("?") ? "&" : "?") + `room=${peer.id}`
		let id = peer.id
		Room.init(url, id)
	})
	Room.host(peer)
}

function guest() {
	let connection
	peer.on("open", ()=>{
		connection = peer.connect(room)
		Room.guest(connection)
	})
}

if(!room) host()
else guest()