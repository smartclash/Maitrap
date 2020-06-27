import { ControllerFunc } from "../../..";

const index: ControllerFunc = (_, res) => {
	return res.render('index.pug');
};

export default index;
