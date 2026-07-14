import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col justify-center items-center z-[9999]">

      <div className="w-28 h-28 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"></div>

      <h1 className="text-5xl font-bold mt-10 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        NM
      </h1>

      <p className="text-gray-400 mt-4">
        Loading Portfolio...
      </p>

    </div>
  );
}

export default Loader;