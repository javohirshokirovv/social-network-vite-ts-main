import "./LoginPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/Index";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading variant={"h1"} text={"Авторизация"}/>
      <form action="#">
        <Input type={"text"} placeholder={"Город проживания"} isError={false} errorMessage={""} />
        <Input type={"number"} placeholder={"Возраст"} isError={false} errorMessage={""} />
        <Input type={"email"} placeholder={"Адрес электронной почты"} isError={false} errorMessage={""} />
        <Input type={"tel"} placeholder={"Номер телефона"} isError={false} errorMessage={""} />
        <Input type={"password"} placeholder={"Пароль"} isError={false} errorMessage={""} />
        <Button type={"submit"} text={"Войти"}/>
      </form>
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo 
         linkText={"Зарегистрироваться"} 
         hasAccountText={"У вас нет аккаунта"} 
         authWithtext={"Войти с помощью"}
      />
    </div>
  );
};