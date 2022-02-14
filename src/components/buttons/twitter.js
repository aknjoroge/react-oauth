import TwitterLogin from "react-twitter-login";
function Twitter(props) {
  let { show } = props;
  const responseTwitter = (err, data) => {
    console.log("responseTwitter", err, data);
  };
  return (
    <TwitterLogin
      className="col-md-6"
      authCallback={responseTwitter}
      consumerKey="MmTYUeUXXXXXXXXXXXXXXXXXXXXX"
      consumerSecret="XXXXXXXXXXXXXXXXXXX5RcK9Icl6EndgC1sF364tG16j"
      buttonTheme="light"
    />
  );
}
export default Twitter;
