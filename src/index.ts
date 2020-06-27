import {join} from 'path';
import {Server} from 'http';
import * as chalk from 'chalk';
import * as express from 'express';
import * as socketIO from 'socket.io';

import Transporter from './socket';
import route from './http/route/web';

const app: express.Application = express();
const http = new Server(app);
const socket = socketIO(http);
const transporter = new Transporter(socket);

transporter.bootstrap();
app.set('view engine', 'pug');
app.set('views', join(__dirname, '../resources/views'));
app.use(route);

app.listen(2735, () => {
	console.log(chalk.green('Listening on http://localhost:2735/'));
});
