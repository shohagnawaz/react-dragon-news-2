import { Link } from "react-router-dom";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    // login user
    loginUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-3xl text-center">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="ml-6 text-center mt-8">
        Here to new? Please
        <Link to="/register">
          <button className="btn btn-sm">Register</button>
        </Link>
      </p>
    </div>
  );
};

export default Login;
