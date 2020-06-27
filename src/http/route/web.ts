import {Router} from 'express';
import index from '../controller/home-controller';

const route = Router(); // eslint-disable-line new-cap

route.get('/', index);

export default route;
