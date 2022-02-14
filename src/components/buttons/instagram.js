import InstagramLogin from "react-instagram-login";

function Instagram(props) {
  const responseInstagram = (response) => {
    console.log("responseInstagram", response);
  };

  return (
    <InstagramLogin
      clientId="XXXXXXXXXXXXXXXXXXXX"
      cssClass="inta-btn col-md-12"
      scope="user_profile"
      redirectUrl="https://react-oauth.web.app/"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    >
      <i class="mdi mdi-instagram"></i>
      Login with Instagram
    </InstagramLogin>
  );
}

export default Instagram;
