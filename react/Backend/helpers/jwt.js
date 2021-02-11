const jwt = require('jsonwebtoken');

const generarjwt = (uid, name) => {
	return new Promise((resolve, reject) => {
		const payload = { uid, name };
		jwt.sign(
			payload,
			process.env.SECREED_JWT_SEED,
			{
				expiresIn: 60 * 60,
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject('No se pudo generar el token');
				}
				resolve(token);
			}
		);
	});
};

module.exports = {
	generarjwt,
};
