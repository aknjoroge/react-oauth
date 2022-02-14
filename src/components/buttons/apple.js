import AppleSignin from "react-apple-signin-auth";
function Apple(props) {
  return (
    <AppleSignin
      authOptions={{
        clientId: "com.example.web",
        scope: "email name",
        /** Apple's redirectURI - must be one of the URIs you added to the serviceID - the undocumented trick in apple docs is that you should call auth from a page that is listed as a redirectURI, localhost fails */
        redirectURI: "https://example.com",
        /** State string that is returned with the apple response */
        state: "state",
        nonce: "nonce",
        /** Uses popup auth instead of redirection */
        usePopup: true,
        // usePopup: `${authOptions.usePopup}`,
      }} // REQUIRED
      uiType="dark"
      className="apple-auth-btn"
      /** Removes default style tag */
      noDefaultStyle={false}
      buttonExtraChildren="Continue with Apple"
      /** Extra controlling props */
      /** Called upon signin success in case authOptions.usePopup = true -- which means auth is handled client side */
      onSuccess={(response) => console.log(response)} // default = undefined
      /** Called upon signin error */
      onError={(error) => console.error(error)} // default = undefined
      /** Skips loading the apple script if true */
      skipScript={false} // default = undefined
      /** Apple image props */
      iconProp={{ style: { marginTop: "10px" } }} // default = undefined
      /** render function - called with all props - can be used to fully customize the UI by rendering your own component  */
      //   render={(props) => <button {...props}>My Custom Button</button>}
    />
  );
}

export default Apple;
