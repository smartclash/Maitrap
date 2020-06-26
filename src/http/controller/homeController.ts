import { ControllerFunc } from "../../..";

const index: ControllerFunc = (_, res) => {
	res.json({hello: 'world'});
};

export default index;
