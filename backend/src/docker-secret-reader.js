const fs = require('fs');

let secrets = {};

exports.read = (secretName) => {
	let value;
	// We only have to load secrets once
	if (Object.keys(secrets).length == 0) {
		try {
			const secretLocation = `/run/secrets/my_secrets`;
			value = fs.readFileSync(secretLocation, 'utf-8');
			value = value.split("\r\n");
		} catch (err) {
			value = process.env[secretName];
			if (value == undefined) {
				console.log(
					`${secretName} doesn't exist as either a docker secret or an environment variable`
				);
			}
		}
		value.forEach(v => {
			const [key, value] = v.split("=");
			secrets[key] = value;
		});

		if (Object.keys(secrets).length > 0)
			console.log("Secrets loaded");
	}

	return secrets[secretName];
};
