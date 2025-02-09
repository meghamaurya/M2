import "./loginStyle.scss";
import { LoginForm } from "../Forms/Login/login-form";

const LoginPage = () => {
  return (
    <div className="container">
      <div>
        <LoginForm />
      </div>
      <div>
        <img
          src="/assets/images/login.png"
          alt="login img"
          className="login-img"
        />
      </div>
    </div>
  );
};

export default LoginPage;
