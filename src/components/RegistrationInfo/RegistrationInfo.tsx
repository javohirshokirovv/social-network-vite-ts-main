import { Link } from "react-router-dom";
import { Paragraph } from "../Index";
import { Span } from "../Index";
import { SignInButton } from "@clerk/clerk-react";
import OauthPopup from "react-oauth-popup";
import { useState } from "react";
import axios from "axios";
import { CLIENT_SECRET, REDIRECT_URI, YANDEX_CLIENT_ID } from "../../utils/constants";

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
  const [token, setToken] = useState<string | null>(null);

  console.log("token", token);

  const handleCode = async (code: string) => {
    try {
      const response = await axios.post(
        "https://oauth.yandex.ru/token",
        {
          grant_type: "authorization_code",
          code,
          client_id: YANDEX_CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setToken(response.data.access_token);
    } catch (error) {
      console.error("Ошибка при получении токена:", error);
    }
  };

  
  const handleClose = () => console.log("Окно авторизации закрыто");

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

        <OauthPopup url={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`} onCode={handleCode} onClose={handleClose}>
        <Link className="reg__link yandex-link" to="/">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </Link>
       
        </OauthPopup>

       
      </div>
    </div>
  );
};

export default RegistrationInfo;
