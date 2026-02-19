import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 justify-start flex gap-2.5">
        <nav className="bg-gray-800 text-white p-4 justify-start flex gap-2.5">
          <Link href="/">
            <Button className="cursor-pointer">Home</Button>
          </Link>
          <Link href="/view/about">
            <Button className="cursor-pointer">About</Button>
          </Link>
          <Link href="/view/todos">
            <Button className="cursor-pointer">Todos</Button>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
