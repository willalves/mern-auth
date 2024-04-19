import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      setSuccessMessage("");
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      setSuccessMessage(data.message);
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <main className="h-[calc(100vh-62px)] flex items-center justify-center bg-slate-50">
      <div className="auth-wrapper">
        <div className="p-2 flex flex-col items-center justify-center">
          <LogIn size="42" color="#4f46e5" />
          <h2 className="text-2xl">Login to continue!</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>
              <span className="text-gray-500 text-sm">Email</span>
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              onChange={handleFormInput}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>
              <span className="text-gray-500 text-sm">Password</span>
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              onChange={handleFormInput}
            />
          </div>

          <button
            disabled={loading}
            className="disabled:opacity-75 disabled:cursor-default disabled:hover:bg-indigo-600 mt-4 w-full border border-indigo-600 py-2 px-6 rounded cursor-pointer text-xs bg-indigo-600 text-white hover:bg-indigo-700 transition font-bold"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <div>
          Don&apos;t have an account yet?{" "}
          <Link to="/sign-up" className="text-indigo-500 hover:underline">
            Register
          </Link>
        </div>
        <p className="text-red-600 mt-5 text-sm">
          {error ? error.message || "Something went wrong!" : ""}
        </p>
        {successMessage && (
          <p className="text-green-600 mt-5 text-sm">{successMessage}</p>
        )}
      </div>
    </main>
  );
}

export default SignIn;
