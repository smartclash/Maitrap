import {Server} from 'socket.io';

class Transporter {
	private io: Server;

	constructor(io: Server) {
		this.io = io;
		this.bootstrap();
	}

	private bootstrap() {
		this.io.on('connection', () => {
			
		});
	}
}

export default Transporter;
