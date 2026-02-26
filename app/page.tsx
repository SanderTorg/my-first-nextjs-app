import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Welcome to Dorgy Codes</h1>
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button className="cursor-pointer" type="submit">
            Signin with Google
          </Button>
        </form>

        <div>
          <p className="text-sm text-gray-500">
            This is a simple todo app built with Next.js 13, showcasing the use
            of server components, API routes, and authentication with NextAuth.
          </p>
        </div>
      </main>
    </div>
  );
}
