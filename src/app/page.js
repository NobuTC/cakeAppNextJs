import Image from "next/image";
import "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-image">
      <div className="text-center">
        <h1 className="text-4xl text-white font-bold">
          Tervetuloa kakku maailmaan!{" "}
        </h1>
        <Link href="/list">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md">
            Katsele kakkuja!
          </button>
        </Link>
      </div>
    </div>
  );
}
