import { useLinkedIn } from "react-linkedin-login-oauth2";
function Linkedin(props) {
  const { linkedInLogin } = useLinkedIn({
    clientId: "XXXXXXXXXXXXXXX",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log("onSuccess", code);
    },
    onError: (error) => {
      console.log("onError", error);
    },
  });
  return (
    <div className="col-md-12">
      <button
        className="linkedinButton"
        onClick={linkedInLogin}
        alt="Sign in with Linked In"
      >
        <i class="mdi  mr-2 mdi-linkedin"></i>
        LinkedIn
      </button>
    </div>
  );
}

export default Linkedin;
