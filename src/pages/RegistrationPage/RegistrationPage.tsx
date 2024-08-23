import { Heading, RegistrationInfo } from "../../components/Index";
import { Link } from "react-router-dom";
import { SCLoginPage } from "../LoginPage/LoginPage.styled";
import LoginForm from "../../components/LoginForm";

export const RegistrationPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Регистрация"}/>
      <LoginForm />
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo 
         navigatePath="/"
         linkText={"Войти"} 
         hasAccountText={"У вас уже есть аккаунт?"} 
         authWithtext={"Зарегистрироваться с помошью"}
      />
    </SCLoginPage>
  );
};