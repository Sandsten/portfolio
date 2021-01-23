const fs = require('fs');

exports.read = (secretName) => {
	var value;
	try {
		value = fs.readFileSync(`/runn/secrets${secretName}`);
	} catch (err) {
		console.error(
			'No docker secret found. Assuming dev mode and will use environment variable directly'
		);
		// if(secretName == "MONGODB_ATLAS_USERNAME")
		//     value = process.env.MONGODB_ATLAS_USERNAME;
		// else if(secretName == "MONGODB_ATLAS_PASSWORD")
		//     value = process.env.MONGODB_ATLAS_PASSWORD;
		// else if(secretName == "JWT_SECRET")
		//     value = process.env.JWT_SECRET

		value = secretName;
	}

	return value;
};
