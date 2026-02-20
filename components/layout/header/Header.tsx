import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          MyTodos
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="cursor-pointer">
              Home
            </Button>
          </Link>
          <Link href="/view/about">
            <Button variant="ghost" size="sm" className="cursor-pointer">
              About
            </Button>
          </Link>
          <Link href="/view/todos">
            <Button variant="default" size="sm" className="cursor-pointer">
              Todos
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
