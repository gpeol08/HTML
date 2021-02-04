import { useForm } from '../../hooks/useForm';

export const FormHook = () => {
	const [state, setState] = useForm({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = state;

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1> Form Hooks </h1> <hr />
				<input
					type="text"
					placeholder="Nombre"
					name="name"
					autoComplete="off"
					value={name}
					onChange={setState}
				/>
                <hr />
				<input
					type="email"
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={email}
					onChange={setState}
				/>
                <hr />
				<input
					type="password"
					placeholder="Password"
					name="password"
					autoComplete="off"
					value={password}
					onChange={setState}
				/>
                <hr />
                <button>Guardar</button>
		</form>
	);
};
