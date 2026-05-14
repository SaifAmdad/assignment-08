import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest">
          404
        </h1>
        <div className="text-gray-700 text-2xl py-3">Page Not Found</div>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
