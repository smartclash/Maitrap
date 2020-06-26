import * as chalk from 'chalk';
import * as express from 'express';
import route from './http/route/web';

const app: express.Application = express();

app.use(route);

app.listen(2735, () => {
	console.log(chalk.green('Listening on 0.0.0.0:2735'));
});
