export default function SignUp()
{
    return(
        <div>
            <h1>Welcome to the Sign Up Page!</h1>
            <form>
                <label>Name: </label>
                <br />
                <input type="text" maxLength={40} required />
                <br />
                <label>Father's Name: </label>
                <br />
                <input type="text" maxLength={40} required />
                <br />
                <label>E-mail Address: </label>
                <br />
                <input type="text" maxLength={40} required />
                <br />
                <label>Username: </label>
                <br />
                <input type="text" maxLength={40} required />
                <br />
                <label>Password: </label>
                <br />
                <input type="password" maxLength={40} required />
                <br />
                <label>Confirm Password: </label>
                <br />
                <input type="password" maxLength={40} required />
                <br />
                <button>Create Account</button>
            </form>
        </div>
    )
}