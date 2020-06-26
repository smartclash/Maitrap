import {Router} from 'express';
import index from '../controller/homeController';

const route = Router();

route.get('/', index);

export default route;
