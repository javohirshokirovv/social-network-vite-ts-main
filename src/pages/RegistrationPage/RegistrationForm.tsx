import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Index";
import { Button } from "../../components/Index";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../store/api/authApi";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const schema = yup.object({
  name: yup.string().required("Обязательное поле"),
  email: yup
    .string()
    .email("Введите почту в правильном формате")
    .required("Обязательное поле"),
  phoneNumber: yup.string().required("Обязательное поле"),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Минимум 8 символов"),
  userCity: yup.string().required("Обязательное поле"),
});

interface IRegistrationForm {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  userCity: string;
}

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phoneNumber: "",
      userCity: "",
    },
  });

  const navigate = useNavigate();
  const [registerUser, { data }] = useRegisterUserMutation();
  const { user } = useUser();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (user || userId) {
      navigate("/main");
    }
  }, [user, userId, navigate]);

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        user_city: data.userCity,
        name: data.name,
        phone_number: data.phoneNumber,
      }).unwrap();
      navigate("/main");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  console.log("User data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Почта"}
            isError={!!errors.email}
            errorMessage={errors.email?.message || ""}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Имя"}
            isError={!!errors.name}
            errorMessage={errors.name?.message || ""}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="userCity"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Город"}
            isError={!!errors.userCity}
            errorMessage={errors.userCity?.message || ""}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <Input
            type={"text"}
            placeholder={"Номер телефона"}
            isError={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber?.message || ""}
            {...field}
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
            isError={!!errors.password}
            errorMessage={errors.password?.message || ""}
            {...field}
          />
        )}
      />
      <Button text={"Войти"} type={"submit"} />
    </form>
  );
};

export default RegistrationForm;
