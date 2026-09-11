import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p>
          {isLogin
            ? "Login to your CampusClub account"
            : "Join CampusClub and explore university clubs"}
        </p>

        <form>

          {!isLogin && (
            <>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          {!isLogin && (
            <>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
              />
            </>
          )}

          <button type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        {isLogin ? (
          <p className="signup-text">
            Don't have an account?{" "}
            <span onClick={() => setIsLogin(false)}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="signup-text">
            Already have an account?{" "}
            <span onClick={() => setIsLogin(true)}>
              Login
            </span>
          </p>
        )}

      </div>
    </div>
  );
}

export default Login;