const fs = require('fs');

/* See if a docker secret exist for the given environment variable.
If no docker secret exist, the env variable might have been set by the .env file
If the env variable is still undefined, it doesn't exist as a docker secret file and hasn't been set by an .env file */
exports.read = (secretName) => {
	let value;
	try {
		const secretLocation = `/run/secrets/${secretName}`;
		value = fs.readFileSync(secretLocation);
		// console.log(`DOCKER SECRET: ${secretName} : ${value}`);
	} catch (err) {
		value = process.env[secretName];
		// console.log(`ENV VARIABLE: ${secretName} : ${value}`);
		if (value == undefined) {
			console.log(
				`${secretName} doesn't exist as either a docker secret or an environment variable`
			);
		}
	}
	return value;
};
