 import "./LoginPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/Index";
import { Link } from "react-router-dom";
import { SCLoginPage } from "./LoginPage.styled";
import LoginForm from "../../components/LoginForm";

export const LoginPage = () => {
  return (
    <SCLoginPage>
      <Heading variant={"h1"} text={"Авторизация"}/>
      <LoginForm/>
      <h1>Авторизация</h1>
      {/* <form action="#">
        <Input type={"tel"} placeholder={"Номер телефона"} />
        <Input type={"password"} placeholder={"Пароль"}/>
        <Button type={"button"} text={"Войти"}/>
      
      </form> */}
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo 
         linkText={"Зарегистрироваться"} 
         hasAccountText={"У вас нет аккаунта"} 
         authWithtext={"Войти с помощью"}
      />
    </SCLoginPage>
  );
};
