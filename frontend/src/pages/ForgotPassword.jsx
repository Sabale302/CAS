function ForgotPassword() {
    return (
        <div className="form-container">
            <h2>Forgot Password</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter email address" />
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
}

export default ForgotPassword;