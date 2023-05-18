import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Kakku reseptit</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link
          href="/list/cheesecake"
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src="/images/cheesycake.png"
            alt="Recipe 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Mango-juustokakku</h2>
            <p className="text-gray-600">
              Herkkullinen Mango-juustokakku keksipohjataikinalla ja ilman
              uunia!
            </p>
          </div>
        </Link>

        <Link
          href="/list/americancheesecake"
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src="/images/amerikkalainenjuustokakku.jpeg"
            alt="Recipe 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">American juustokakku</h2>
            <p className="text-gray-600">
              Ihana Amerikkailaine juustokakku, joka tehdään uunissa!
            </p>
          </div>
        </Link>

        <Link
          href="/list/chocolatecake"
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src="/images/suklaakakku.jpeg"
            alt="Recipe 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Suklaakakku</h2>
            <p className="text-gray-600">Erittäin suklainen suklaakakku!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
