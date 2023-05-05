import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/nav";
export default function Layout(props) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="bg-blue-900 min-h-screen flex">
          <Nav />
          <div className="bg-white flex-grow mt-1 mr-1 rounded-lg p-4">
            {props.children}
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
