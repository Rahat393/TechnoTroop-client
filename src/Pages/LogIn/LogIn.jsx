import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const LogIn = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    const user = { email, pass };
    console.log(user);
    signIn(email, pass)
      .then((res) => {
        console.log(res.user);
        alert("login success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleLogIn}>
        <h1 className="text-2xl">Login</h1>
        <input
          placeholder="Email"
          name="email"
          className="text-2xl"
          type="email"
        />
        <br />
        <input
          placeholder="Passord"
          name="password"
          className="text-2xl"
          type="password"
        />
        <br />
        <input type="submit" className="btn btn-success" value="Login" />
        <p>
          New to this site? please{" "}
          <Link to={"/singup"} className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
