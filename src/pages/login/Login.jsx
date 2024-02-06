import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import "./login.scss"

const Login = () => {

    const {login} = useContext(AuthContext);
    const handleLogin = ()=>{
        login();
    };
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome</h1>
                    <p>
                        Welcome to our social media application! 
                        Connect with friends and family, share your thoughts and memories, 
                        and discover new communities. Whether you're looking to keep in touch with loved ones,
                        join a new hobby group, or simply scroll through interesting content, 
                        our platform has something for everyone. Sign in now to start your journey!
                    </p>
                    <span>Don't Have a pre-existing account?</span>
                    <Link to= "/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login