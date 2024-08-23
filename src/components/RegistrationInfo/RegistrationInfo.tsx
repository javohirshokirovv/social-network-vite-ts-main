import { Link } from "react-router-dom";
import { Paragraph } from "../Index";
import { Span } from "../Index";
import {
  SignInButton,
} from "@clerk/clerk-react";

interface IRegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithtext: string;
  navigatePath: string;
}

const RegistrationInfo = ({
  linkText,
  hasAccountText,
  authWithtext,
  navigatePath,
}: IRegistrationInfo) => {
  return (
    <div className="registration">
      <Span>
        {hasAccountText}
        <Link to={navigatePath}>{linkText}</Link>
      </Span>
      <Paragraph>{authWithtext}</Paragraph>
      <div className="icons-wrapper">
        <SignInButton
          children={
            <Link className="reg__link google-link" to="/">
              <img src="./img/icons/google.svg" alt="Google" />
            </Link>
          }
        />

        <Link className="reg__link yandex-link" to="/">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </Link>
        <Link className="reg__link mail-ru-link" to="/">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </Link>
      </div>
    </div>
  );
};

export default RegistrationInfo;
