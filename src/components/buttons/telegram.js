import TelegramLoginButton from "react-telegram-login";
function Telegram(props) {
  const handleTelegramResponse = (response) => {
    console.log("handleTelegramResponse", response);
  };
  return (
    <TelegramLoginButton
      dataOnauth={handleTelegramResponse}
      botName="BOT_NAME"
      //   dataAuthUrl ="http://localhost:3000/"
    />
  );
}
export default Telegram;
