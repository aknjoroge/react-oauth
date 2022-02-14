import FacebookLogin from "react-facebook-login";

function Facebook(props) {
  const responseFacebook = (response) => {
    console.log("responseFacebook", response);
  };
  const componentClicked = (response) => {
    console.log("componentClicked", response);
  };
  return (
    <div className="col-md-12">
      <FacebookLogin
        className="col-md-12"
        appId="1XXXXXXXXXXXXXX8"
        fields="name,email,picture"
        onClick={componentClicked}
        cssClass="facebook-button"
        callback={responseFacebook}
        icon="fa fa-facebook mr-2"
      />
    </div>
  );
}
export default Facebook;
