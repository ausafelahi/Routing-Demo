export default function Login() {
    return(
        <div>
            <h1>Welcome to the Login Page!</h1>
            <form>
                <label>Username: </label>
                <br />
                <input type="text" placeholder="Username" maxLength={40}  required/>
                <br />
                <label>Password: </label>
                <br />
                <input type="password" placeholder="Password" maxLength={40} required/>
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}