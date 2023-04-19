import Button from "@/components/Button";
import Form from "@/components/Form";
import Header from "@/components/Header";
import UserList from "@/components/UserList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="space-y-5">
      <Header />
      <form className="flex place-self-center space-x-3">
        <Form />
        <Button />
      </form>
      <UserList />
    </div>
  );
}
