import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [signupError, setSignUpError] = useState(null);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    const user = { email, pass };
    console.log(user);
    createUser(email, pass)
      .then((res) => {
        console.log(res.user);
        alert("user createdd");
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h1 className="text-2xl">Sign Up</h1>
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
        <input type="submit" className="btn btn-success" value="Sign up" />
        <p> {signupError && signupError}</p>
        <p>
          already have an accuont? please
          <Link to={"/login"} className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
