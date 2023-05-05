import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="bg-blue-900 h-screen w-screen flex items-center">
          <div className="text-center w-full">
            <button
              className="bg-white rounded-lg p-2 px-4"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="bg-blue-900 h-screen w-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white rounded-lg p-2 px-4"
            onClick={() => signIn("google")}
          >
            Login with google
          </button>
        </div>
      </div>
    </>
  );
}
