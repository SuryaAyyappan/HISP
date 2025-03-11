import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebaseConfig";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginType, setLoginType] = useState("user"); // 'user' or 'admin'
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!credentials.email) {
      toast.error("Please enter your email");
      return;
    }

    if (!credentials.password) {
      toast.error("Please enter your password");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const currentUser = res.user;

      if (!currentUser.emailVerified) {
        toast.error(
          "Your email is not verified yet. Please verify your email to log in."
        );
        return;
      }

      // Check if the user is an admin (you'll need to implement this check based on your Firebase structure)
      const isAdmin = await checkIfUserIsAdmin(currentUser.uid);
      
      if (loginType === "admin" && !isAdmin) {
        toast.error("You don't have admin privileges");
        return;
      }

      if (loginType === "user" && isAdmin) {
        toast.error("Please use admin login for admin accounts");
        return;
      }

      toast.success("Sign-in successful!");
      navigate(loginType === "admin" ? "/admin/dashboard" : "/profile");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (err.code === "auth/invalid-credential") {
        toast.error("Invalid Credentials. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  // Function to check if user is admin - implement based on your Firebase structure
  const checkIfUserIsAdmin = async (uid) => {
    // This is a placeholder - implement your admin check logic here
    // Example: Check against a Firebase collection of admin users
    // const adminDoc = await getDoc(doc(db, 'admins', uid));
    // return adminDoc.exists();
    return false; // Replace with actual implementation
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative text-white bg-black bg-[url('/black-texture.png')] py-16">
      <section className="md:w-2/3 px-4 mx-auto space-y-6">
        <h1 className="text-5xl text-center font-afacad-flux">
          {loginType === "admin" ? "Admin Login" : "User Login"}
        </h1>
        
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setLoginType("user")}
            className={`px-6 py-2 rounded-md transition-colors ${
              loginType === "user"
                ? "bg-gradient-to-br from-maroon to-purple-700 text-white"
                : "border border-white"
            }`}
          >
            User Login
          </button>
          <button
            onClick={() => setLoginType("admin")}
            className={`px-6 py-2 rounded-md transition-colors ${
              loginType === "admin"
                ? "bg-gradient-to-br from-maroon to-purple-700 text-white"
                : "border border-white"
            }`}
          >
            Admin Login
          </button>
        </div>

        <form
          className="flex flex-col gap-4 md:w-2/3 mx-auto font-afacad-flux text-xl"
          onSubmit={handleSignIn}
        >
          <input
            value={credentials.email}
            className="p-4 rounded-md bg-inherit border border-white focus:outline-none"
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={handleChange}
          />
          <div className="relative">
            <input
              value={credentials.password}
              className="p-4 rounded-md bg-inherit border border-white focus:outline-none w-full"
              type={showPassword ? "password" : "text"}
              placeholder="Enter your Password"
              name="password"
              onChange={handleChange}
            />
            <div
              onClick={() => setShowPassword((showPassword) => !showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
            >
              {showPassword ? (
                <EyeIcon strokeWidth={1} />
              ) : (
                <EyeOffIcon strokeWidth={1} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="select-none p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;