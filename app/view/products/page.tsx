import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
