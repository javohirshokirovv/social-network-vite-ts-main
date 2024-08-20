import "./LoginPage.scss";
import { Input, Button, Heading, RegistrationInfo } from "../../components/Index";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../services/apiSlice"; // Предположительно из apiSlice

export const LoginPage = () => {
  const [loginUser, { isLoading, isSuccess, isError, error }] = useLoginUserMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      city: event.target[0].value,
      age: event.target[1].value,
      email: event.target[2].value,
      tel: event.target[3].value,
      password: event.target[4].value,
    };

    try {
      const response = await loginUser(loginData).unwrap();
      console.log('Успешный логин:', response);
      // Дополнительная логика после успешного логина, например, перенаправление
    } catch (err) {
      console.error('Ошибка логина:', err);
      // Дополнительная логика при ошибке логина
    }
  };

  return (
    <div className="LoginPage">
      <Heading variant={"h1"} text={"Авторизация"} />
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Город проживания" isError={false} errorMessage="" />
        <Input type="number" placeholder="Возраст" isError={false} errorMessage="" />
        <Input type="email" placeholder="Адрес электронной почты" isError={false} errorMessage="" />
        <Input type="tel" placeholder="Номер телефона" isError={false} errorMessage="" />
        <Input type="password" placeholder="Пароль" isError={false} errorMessage="" />
        <Button type="submit" text="Войти" />
      </form>
      {isLoading && <p>Идет отправка данных...</p>}
      {isError && <p className="error">{error.message}</p>}
      <Link to="/">Забыли пароль?</Link>
      <RegistrationInfo 
         linkText="Зарегистрироваться" 
         hasAccountText="У вас нет аккаунта" 
         authWithtext="Войти с помощью"
      />
    </div>
  );
};
