function Login() {
    return (
        <div className="login-page">
        <div className="login-form">
            <h2>Login</h2>
            <form>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
}

export default Login;