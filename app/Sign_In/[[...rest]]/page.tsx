'use client'
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  const redirectPath = typeof window !== 'undefined' ? localStorage.getItem('redirectPath') : null;

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome to Morent
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign in to complete your booking
        </p>
        <SignIn
          redirectUrl={redirectPath || "/"}
          afterSignInUrl={redirectPath || "/"}
          afterSignUpUrl={redirectPath || "/"}
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
              footerActionText: "text-gray-600",
              footerActionLink: "text-blue-600 hover:text-blue-700",
            }
          }}
        />
      </div>
    </div>
  );
}
