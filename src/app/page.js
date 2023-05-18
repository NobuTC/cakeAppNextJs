import Image from "next/image";
import "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-image">
      <div class="text-center">
        <h1 class="text-4xl text-white font-bold">Welcome to the cake world</h1>
        <Link href="/blog">
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md">
            Look at the cakes
          </button>
        </Link>
      </div>
    </div>
  );
}
