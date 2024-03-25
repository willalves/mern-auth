import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

function SignUp() {
  return (
    <main className="h-[calc(100vh-62px)] flex items-center justify-center bg-slate-50">
      <div className="auth-wrapper">
        <header className="p-2 flex flex-col items-center justify-center">
          <CircleUserRound size="42" color="#4f46e5" />
          <h2 className="text-2xl">Create an account!</h2>
        </header>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>
              <span className="text-gray-500 text-sm">Name</span>
            </label>
            <input id="username" type="text" value="" className="form-input" />
          </div>

          <div className="flex flex-col gap-1">
            <label>
              <span className="text-gray-500 text-sm">Email</span>
            </label>
            <input id="email" type="email" value="" className="form-input" />
          </div>

          <div className="flex flex-col gap-1">
            <label>
              <span className="text-gray-500 text-sm">Password</span>
            </label>
            <input
              id="password"
              type="password"
              value=""
              className="form-input"
            />
          </div>

          <button className="mt-4 w-full border border-indigo-600 py-2 px-6 rounded cursor-pointer text-xs bg-indigo-600 text-white hover:bg-indigo-700 transition font-bold">
            Register
          </button>
        </form>

        <footer>
          Already have an account?{" "}
          <Link to="/sign-in" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </footer>
      </div>
    </main>
  );
}

export default SignUp;
