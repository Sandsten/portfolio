const fs = require('fs');

/* See if a docker secret exist for the given environment variable.
If no docker secret exist, the env variable might have been set by the .env file
If the env variable is still undefined, it doesn't exist as a docker secret file and hasn't been set by an .env file */
exports.read = (envVariable) => {
	let value;
	try {
		value = fs.readFileSync(process.env[envVariable + '_FILE']);
	} catch (err) {
		value = process.env[envVariable];
		if (value == undefined) {
			console.log(`${envVariable} doesn't exist as either a docker secret or an .env variable`);
		}
		return value;
	}
};
