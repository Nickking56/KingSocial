import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>King Social</h1>
                    <p>
                        Welcome to our social media application! 
                        Connect with friends and family, share your thoughts and memories, 
                        and discover new communities. Whether you're looking to keep in touch with loved ones,
                        join a new hobby group, or simply scroll through interesting content, 
                        our platform has something for everyone. Sign in now to start your journey!
                    </p>
                    <span>Do you have a pre-existing account?</span>
                    <Link to= "/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register