import "./LoginPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/Index";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading variant={"h1"} text={"Авторизация"}/>
      <h1>Авторизация</h1>
      <form action="#">
        <Input type={"city"} placeholder={"Город проживания"} />
        <Input type={"age"} placeholder={"Возраст"} />
        <Input type={"e-mail"} placeholder={"электронная почта"} />
        <Input type={"tel"} placeholder={"Номер телефона"} />
        <Input type={"password"} placeholder={"Пароль"}/>
        <Button text={"Войти"}/>
      
      </form>
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo 
         liknText={"Зарегистрироваться"} 
         hasAccountText={"У вас нет аккаунта"} 
         authWithtext={"Войти с помощью"}
      />
    </div>
  );
};
