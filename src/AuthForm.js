import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">

        {/* Toggle Buttons */}
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setLogin(false)}
          >
            Register
          </button>
        </div>

        {/* FORM SECTION */}
        <div className="form">
          <h2>{isLogin ? "Login Form" : "Register Form"}</h2>

          {isLogin ? (
            <div>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot password?</a>
              <button>Login</button>
              <p>
                Not a member? <a href="#" onClick={()=>setLogin(false)}>Signup now</a>
              </p>
            </div>
          ) : (
            <>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>Register</button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default AuthForm;
