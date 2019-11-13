const express = require('express'),
    route = express.Router();
const {
    handleMD5,
    success,
    getUserInfo
} = require('../utils/tools');

const {
    readFile
} = require('../utils/promiseFs');

route.get('/list', (req, res) => {
    let data = req.$searchDATA;
    console.log(data);
	// data = data.map(item => {
	// 	return {
	// 		id: item.id,
	// 		name: item.name,
	// 		desc: item.desc
	// 	}
	// });
	if (data.length > 0) {
		res.send(success(true, {
			data: data
		}));
		return;
	}
	res.send(success(false, {
		codeText: 'no matching data was found!'
	}));
});
module.exports = route