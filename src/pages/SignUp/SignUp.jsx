import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log('User created: ', createdUser);
            navigate('/')
        })
        .catch(error => console.error(error));
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-12 md:mr-12 w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 text-white hover:bg-orange-400" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="text-center mb-8">
                        <p>Already have an account? <Link to="/login" className="link link-hover text-orange-600 font-bold">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;