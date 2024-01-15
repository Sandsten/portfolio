const fs = require('fs');

/* See if a docker secret exist for the given environment variable.
If no docker secret exist, the env variable might have been set by the .env file
If the env variable is still undefined, it doesn't exist as a docker secret file and hasn't been set by an .env file */
let secrets = {};
exports.read = (secretName) => {
	let value;
	// We only have to load secrets once
	if (Object.keys(secrets).length == 0) {
		console.log("Load secrets!")
		try {
			// const secretLocation = `/run/secrets/${secretName}`;
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
	}

	return secrets[secretName];
};
