export default function Americanjuustokakku({ params }) {
  console.log(params);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <img
          src="/images/amerikkalainenjuustokakku.jpeg"
          alt="Food Image"
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Amerikkalainen juustokakku</h1>
        <h2 className="text-xl font-semibold mb-2">Ainekset:</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Pohja</h3>
        <ul className="list-disc ml-6">
          <li>200g keksiä</li>
          <li>I70g voi</li>
          <li>1/2 dl fariinisokeria</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Täyte</h3>
        <ul className="list-disc ml-6">
          <li>2 prk maustamatonta tuorejuustoa</li>
          <li>1 prk maitorahka</li>
          <li>1 prk tuorejuustoa</li>
          <li>1 tlk kuohukerma</li>
          <li>3 tl sitruunamehua</li>
          <li>1 dl sokeria</li>
          <li>1/2 dl perunajauhoja</li>
          <li>3 kpl kananmunaa</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Ohje:</h3>
        <ol className="list-decimal ml-6">
          <li>
            Hienonna keksi ja sekoita sulatettu voi ja fariinisokeri joukkoon.
          </li>
          <li>Painele voikeksi seos leivinpaperilla irtopohjavuokaan</li>
          <li>
            Valmista täyte sekoittamalla kaikki aineet tasaiseksi ja kaada seos
            pohjan päälle.
          </li>
          <li>
            Paista 175°C uunin alimmalla ritilätasolla ensin 45 min. Tämän
            jälkeen alenna lämpöä 150°C ja paista 15 min lisää. Voit peittää
            leivinpaperilla, jos pinta näyttää tummuvan liikaa.
          </li>
          <li>
            Anna jäähtyä mieluisesti 1 päivä. Irrota kakku vuoasta ja koristele
          </li>
        </ol>
      </div>
    </div>
  );
}
