import { GoogleLogin, GoogleLogout } from "react-google-login";
function Google(props) {
  let { show } = props;
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    if (response.profileObj) {
      let data = response.profileObj;
      show({
        name: data.name,
        email: data.email,
        photo: data.imageUrl,
      });
    }
  };
  return (
    <GoogleLogin
      clientId="XXXXXXXXXXXXXXXXXXXXXXXapps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      className="googleBtn"
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
export default Google;
