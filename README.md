### React Auth

---

#### React Authentication system with

### Login with

1. Apple
2. Facebook
3. Github
4. Google
5. Instagram
6. Linkedin
7. Telegram
8. Twitter

---

### Replace your credentials in the individual buttons

#### Ex for Google

```js
<GoogleLogin
  clientId="YOUR_GOOGLE_CLIENT_ID"
  buttonText="Login with Google"
  onSuccess={responseGoogle}
  className="googleBtn"
  onFailure={responseGoogle}
  cookiePolicy={"single_host_origin"}
/>
```

### For telegram you will need to setup a bot using Botfather

```js
<TelegramLoginButton
  dataOnauth={handleTelegramResponse}
  botName="BOT_NAME" //YOUR_BOT_NAME
  //   dataAuthUrl ="http://localhost:3000/"
/>
```
