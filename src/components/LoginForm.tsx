import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("Введите почту в правильном формате") // Fixed the misplaced period
    .required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Минимум 8 символов"),
});

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    }
  });


  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    navigate("/main")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Почта"}
            {...field}
            isError={!!errors.email}
            errorMessage={errors.email?.message || ""}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            type={"password"}
            placeholder={"Пароль"}
            {...field}
            isError={!!errors.password}
            errorMessage={errors.password?.message || ""}
          />
        )}
      />
      <Button text={"Войти"} type={"submit"} />
    </form>
  );
};

}

export default LoginForm;
