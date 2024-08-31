import React from 'react';
import { YandexOAuthProvider, YandexLogin } from 'react-oauth';

const YandexAuth: React.FC = () => {
  const handleSuccess = (response: any) => {
    console.log('Yandex auth success:', response);
    
  };

  const handleError = () => {
    console.log('Yandex auth error');
  };

  return (
    <YandexOAuthProvider clientId="ВАШ_КЛИЕНТСКИЙ_ID">
      <YandexLogin
        onSuccess={handleSuccess}
        onFailure={handleError}
        render={() => (
          <button onClick={}>
            Войти через Яндекс
          </button>
        )}
      />
    </YandexOAuthProvider>
  );
};

export default YandexAuth;
