export default function Chocolatecake({ params }) {
  console.log(params);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <img
          src="/images/suklaakakku.jpeg"
          alt="Food Image"
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Suklaakakku</h1>
        <h2 className="text-xl font-semibold mb-2">Ainekset:</h2>
        <ul className="list-disc ml-6">
          <li>375 g tumma suklaa</li>
          <li>250 g voi</li>
          <li>250 g sokeria</li>
          <li>50 g kaakaojauhe</li>
          <li>1,5 g suolaa</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6 mb-2">Ohje:</h2>
        <ol className="list-decimal ml-6">
          <li>Sulata suklaa ja voi ja sekoita keskenään. Laita jäähtymään.</li>
          <li>Vaahdota kananmunat ja sokeri</li>
          <li>Lisää munaseos jäähtyneeseen suklaa voihin.</li>
          <li>
            Lisää kaakaojauhe siivilöimällä, jotta tulee tasaiseksi joukkoon.
          </li>
          <li>Lisää suola ja kääntele varovasti.</li>
          <li>Paista 200°C uunissa ja anna olla 35min</li>
          <li>Anna jäähtyä ennen tarjoamista.</li>
        </ol>
      </div>
    </div>
  );
}
