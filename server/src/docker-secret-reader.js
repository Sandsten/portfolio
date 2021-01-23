const fs = require('fs');

exports.read = (secretPath) => {
	try {
		return fs.readFileSync(secretPath);
	} catch (err) {
		console.error(
			'No docker secret found. Assuming dev mode and will use environment variable directly'
		);
		return undefined;
	}
};
