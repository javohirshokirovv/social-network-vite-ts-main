import { Heading, RegistrationInfo } from "../../components/Index";
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";
import LoginForm from "../../components/LoginForm";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"} />
      <LoginForm/>
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo 
         linkText={"Зарегистрироваться"} 
         hasAccountText={"У вас нет аккаунта"} 
         authWithtext={"Войти с помощью"}
      />
    </SCLoginPage>
  );
};
