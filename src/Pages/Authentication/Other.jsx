import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
const Other = () => {
  const { userSocalLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const handleSocalUser = (provider) => {
    userSocalLogin(provider)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-md mx-auto mb-10 ">
      <div className="flex items-center gap-3 my-6">
        <div className="w-full h-[1px] bg-black border"></div>
        <p>or</p>
        <div className="w-full h-[1px] bg-black border"></div>
      </div>
      <label
        onClick={() => handleSocalUser(facebookProvider)}
        className="flex items-center badge gap-6 w-full py-4"
      >
        <FaFacebook className="text-2xl text-blue-500 bg-white rounded-full" />
        <p className="flex-1 font-medium">Continue with Facebook</p>
      </label>
      <label
        onClick={() => handleSocalUser(googleProvider)}
        className="flex items-center badge gap-6 w-full py-4 mt-3"
      >
        <FcGoogle className="text-2xl rounded-full" />
        <p className="flex-1 font-medium">Continue with Google</p>
      </label>
    </div>
  );
};

export default Other;
