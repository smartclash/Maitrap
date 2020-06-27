import {ControllerFunc} from '../../..';

const index: ControllerFunc = (_, response) => {
	return response.render('index.pug');
};

export default index;
