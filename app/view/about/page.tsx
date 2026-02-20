import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Welcome to Dorgy Codes</h1>
      <p>
        This is a simple Next.js application that demonstrates the use of React
        Server Components, dynamic routing, and client-side interactivity. It
        serves as a learning project for understanding the core concepts of
        Next.js and how to build modern web applications with it.
      </p>
      <p>
        Feel free to explore the Todos page to see how data fetching and
        client-side interactions work in Next.js!
      </p>
    </div>
  );
}
