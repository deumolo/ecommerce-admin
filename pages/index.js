import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2 className="text-blue-900">
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex items-center bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img className="w-6 h-6" src={session?.user?.image} alt="" />
          <div className="px-2">{session?.user?.name}</div>
        </div>
      </div>
    </Layout>
  );
}
