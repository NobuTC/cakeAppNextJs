export default function Cheesecake({ params }) {
  console.log(params);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <img
          src="/images/cheesycake.png"
          alt="Food Image"
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Mango-juustokakku</h1>
        <h2 className="text-xl font-semibold mb-2">Ainekset:</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Pohja</h3>
        <ul className="list-disc ml-6">
          <li>200g keksiä</li>
          <li>70g voi</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Täyte</h3>
        <ul className="list-disc ml-6">
          <li>5 klp liivate</li>
          <li>2 tlk kuohukerma</li>
          <li>2 prk tuorejuustoa</li>
          <li> 3 tl sitruunamehua</li>
          <li>1 dl sokeria</li>
          <li>2 tl vaniliinisokeria</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Päällyskerros</h3>
        <ul className="list-disc ml-6">
          <li>3 tlk Mangopiltti</li>
          <li>3 klp liivate</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Ohje:</h2>
        <ol className="list-decimal ml-6">
          <li>Hienonna keksi ja sekoita sulatettu voi joukkoon.</li>
          <li>
            Levitä keksivoi irtopohjavuokaan ja laita jääkaappiin odottamaan.
          </li>
          <li>Laita Liivatteet veteen pehmenemään ja vatkaa kerma.</li>
          <li>
            Sekoita joukkoon vatkattu kerma, tuorejuusto, sokeri,
            vaniliinisokeri ja sitruunamehu.
          </li>
          <li>Purista liivatteet kuiviksi ja lisää kuumaan veteen.</li>
          <li>
            Kaada ohuena nauhana tuorejuusto seokseen ja kaada vuokaan. Anna
            jäähtyä jääkaapissa sillo välin.
          </li>
          <li>Tee uudelleen liivate seos ja laita mangopilttiin.</li>
          <li>
            Kaada mangoseos vuokaan ja anna jääkaapissa jäähtyä vähintään pari
            tuntia ennen tarjoilua.
          </li>
        </ol>
      </div>
    </div>
  );
}
