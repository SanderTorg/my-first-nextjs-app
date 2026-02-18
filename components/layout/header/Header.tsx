import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="bg-gray-800 text-white p-4">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/view/about">
          <Button>About</Button>
        </Link>
        <Link href="/view/todos">
          <Button>Todos</Button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
