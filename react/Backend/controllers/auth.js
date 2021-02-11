const { response } = require('express');
const bcript = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarjwt } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		let usuario = await Usuario.findOne({ email });
		if (usuario) {
			return res.status(400).json({
				ok: false,
				msg: 'Correo registrado',
			});
		}
		usuario = new Usuario(req.body);

		//Encriptar contraseña
		const salt = bcript.genSaltSync();
		usuario.password = bcript.hashSync(password, salt);

		await usuario.save();

		const token = await generarjwt(usuario.id, usuario.name);

		res.status(201).json({
			ok: true,
			uid: usuario.id,
			name: usuario.name,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Cominicarse con el administrador',
		});
	}
};

const loginUsuario = async (req, res = response) => {
	const { email, password } = req.body;
	try {
		let usuario = await Usuario.findOne({ email });
		if (!usuario) {
			return res.status(400).json({
				ok: false,
				msg: 'Usuario no registrado',
			});
		}
		const validPassword = bcript.compareSync(password, usuario.password);
		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: 'password no registrado',
			});
		}
		const token = await generarjwt(usuario.id, usuario.name);

		res.json({
			ok: true,
			msg: 'login',
			name: usuario.name,
			email: usuario.email,
			uid: usuario.id,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Comunicarse con el administrador',
		});
	}
};

const revalidarToken = async(req, res = response) => {
	const { uid, name } = req;

    const token = await generarjwt(uid, name);
	res.json({
		ok: true,
		token
	});
};

module.exports = {
	crearUsuario,
	loginUsuario,
	revalidarToken,
};
