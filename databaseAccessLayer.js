const database = include('/databaseConnection');


async function getAllUsers() {
	let sqlQuery = `
		SELECT first_name, last_name, email FROM web_users
	`;
	
	try {
		const results = await database.query(sqlQuery);
		console.log(results[0]);
		return results[0];
	}
	catch (err) {
		console.log("Error selecting from web_users table");
		console.log(err);
		return null;
	}
}


module.exports = {getAllUsers}
