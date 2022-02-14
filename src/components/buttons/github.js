import LoginGithub from "react-login-github";
function Github(props) {
  function onSuccess(response) {
    console.log("TC-32131", response);
  }
  function onFailure(response) {
    console.log("TC-566", response);
  }
  return (
    <LoginGithub
      clientId="IXXXXXXXXXXXXXX"
      onSuccess={onSuccess}
      onFailure={onFailure}
      className="col-md-12 github-btn"
    >
      <i class="mdi  mr-2 mdi-github"></i>
      Sign in with Github
    </LoginGithub>
  );
}
export default Github;
