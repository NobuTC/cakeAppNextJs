import Link from "next/link";
import "./aboutme.css";

export default function AboutMe() {
  return (
    <div className=" p-8 rounded-lg flex wrapper container">
      <div className="upper-block flex flex-col md:flex-row items-center">
        <div className=" p-19 w-full md:w-1/2">
          <div className="">
            <h1 className="text-4xl font-bold mb-4">Eka blogi</h1>
          </div>
          <div className="">
            <p className="text-gray-400">
              Tervetuloa minun ensimmäiseen blogiini! Täällä kerron vähän miten
              päädyin aloittamaan minun kakku reissuni.
            </p>
          </div>
          <div className="flex p-4">
            <div className="mr-5">
              <img
                src="/images/CvPicture.jpeg"
                alt="Circle Image"
                className=" w-10 rounded-full mr-2"
              />
            </div>
            <div className="">
              <p className="text-gray-800">
                <b>Jenni Tran</b>
              </p>
              <p className="text-gray-400">Laurea koulun opiskelija</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/ArticleImg.jpg"
            alt="Image"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="bottom-block mt-5">
        <p className="text-gray-800 ">
          <span className="first-letter">O</span>n mukavaa leipoa herkullisia
          kakkuja ja tämä blogi on omistettu kaikille kakkujen himoitsijoille!
          Täällä jaan herkullisia ja yksinkertaisia reseptejä. Myös näytän kakku
          kuvia miten olen koristellut ja niistä ehkä voit saada inspiraatiota
          sinun omaan kakkuusi. Olipa kyseessä syntymäpäiväjuhlat, häätilaus tai
          vain herkutteluhetki ystävien tai läheisten kanssa.
        </p>
        <div className="divide-line"></div>
        <p className="text-lg mt-5">
          <b>Esittely</b>
        </p>

        <p className="text-second mt-2">
          Olen innoissani esitellä itseni teille, sillä olen päättänyt aloittaa
          leipomaan ihania kakkuja. Nimeni on Jenni Tran ja olen iloinen kun
          pääsen laittamaan ruokaa ja leipomaan. Leipominen ei ole aina ollut
          minun suosikkini, mutta kun leivon kakkuja, niin siinä on tulee eri
          tunnelma. Kakkujen leivonta on aina ollut minulle tapa kertoa, että
          haluan juhlia esimerkiksi minun tärkeitä ystäveitä tai läheisiäni. On
          ihanaa, että oma leipomaa kakkua voi jakaa iloa kaikille ja samalla
          saa herkutella.
        </p>
        <p className="text-second mt-2">
          Tässä blogissa haluan avata oven oman kakkumaailmani ja haluan jakaa
          teille herkullisen maukkaita reseptejä, joita olen itse kokeillut,
          testannut ja kehittänyt, sekä antaa vinkkejä ja neuvoja kakkujen
          leivonnasta ja myös koristelustakin. Koristelusta tulee myöhemmin
          lisää. Haluan myös insporoida muita kokeilemaan uusia asioita
          keittiössä ja rohkaista heitä luottamaan omaan luovuutensa.
        </p>

        <p className="text-lg mt-2">
          <b>Lempi kakku reseptini</b>
        </p>

        <p className="text-second">
          Yksi suosikkiresepteistäni on Mango-juustokakun valmistus. Tämä
          resepti on helppo ja yksinkertainen tehdä. Se takaa täydellisen
          tasapainoin herkullisen mangon ja tuorejuuston välillä. Tarvitset vain
          muutamia raaka-aineita kuten keksi, voi, liivate, kuohukerma,
          tuorejuusto, sitruunamehua, sokeria, vaniliinisokeria ja mangopiltti.
          Tietenkin voi käyttää mitä tahansa keksiä tai tuorejuustoa. Tämä
          resepti ei ole vain pelkästään Mango-juustokakkuun. Ohjeeni kattaa
          myös erilaiset erilaiset täytevaihtoehdot, jotta voit muokata kakun
          juuri omiin tarpeisiisi sopivaksi! Esimerkiksi voit lisätä vaikka
          passionin, jolloin siitä tulee Mango-juustopassionkakku. Tai jos et
          halua mangoa, niin voit korjata sen mansikalla tai jopa vademalla.
          Tämä resepti löytyy minun &quot;Reseptit&quot; kohdalla, jos haluat
          kurkata miten tämä ihana kakku valmistellaan.
        </p>

        <p className="text-lg mt-2">
          <b>Toivottelut</b>
        </p>

        <p className="text-second ">
          Toivon, että tämä blogi inpiroi sinua luomaan omia herkullisia ja
          upeita kakkuelämyksiä. Jaa kommentteja, kysymyksiä ja omia
          kokemuksiasi, sillä haluan kuulla mielipiteesi ja auttaa sinua
          matkallasi kakkujen maailmassa.
        </p>
      </div>
      <div className="">
        <br></br>
        <p className="text-400">Rakkaudella,</p>

        <p className="text-400">Jenni Tran</p>
      </div>
    </div>
  );
}
