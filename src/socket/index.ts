import * as chalk from 'chalk';
import {Server} from 'socket.io';

class Transporter {
	private readonly io: Server;

	constructor(io: Server) {
		this.io = io;
	}

	public bootstrap() {
		this.io.on('connection', () => {
			console.log(chalk.green('Connection recieved. Transporter is handling it'));
		});
	}
}

export default Transporter;
