import React from 'react'

const Auth = () => {
	return (
		<form className="col-md-6 mx-auto">
			<div className="form-group">
				<label for="login">Имя пользователя</label>
				<input type="text" className="form-control" id="login" placeholder="Имя пользователя" />
			</div>
			<div className="form-group">
				<label for="password">Пароль</label>
				<input type="password" className="form-control" id="password" placeholder="Пароль" />
			</div>
			<div className="d-grid gap-2 mt-2">
				<button type="submit" className="btn btn-primary">Войти</button>
			</div>
		</form>
	)
}

export default Auth
