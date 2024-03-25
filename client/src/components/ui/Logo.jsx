import { Fingerprint } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Fingerprint color="#4f46e5" size="28" />
      <h1 className="text-xl">
        <span className="text-indigo-600 font-bold">Auth</span>App
      </h1>
    </div>
  );
}

export default Logo;
