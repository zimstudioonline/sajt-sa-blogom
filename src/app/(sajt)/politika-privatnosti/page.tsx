import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Politika privatnosti portala Zdrav Ritual.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Politika privatnosti
      </h1>

      <div className="mt-10 space-y-10 text-muted leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Ko smo mi</h2>
          <p className="mt-3">
            Adresa naše veb stranice je:{" "}
            <a
              href="https://zdravritual.com"
              className="text-foreground underline underline-offset-4"
            >
              https://zdravritual.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Komentari</h2>
          <p className="mt-3">
            Kada posetioci ostave komentare na sajtu, prikupljamo podatke prikazane u
            obrascu za komentare, kao i IP adresu posetioca i string korisničkog agenta
            pregledača kako bismo pomogli u otkrivanju spama.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Mediji</h2>
          <p className="mt-3">
            Ako otpremate slike na veb stranicu, trebalo bi da izbegavate otpremanje slika
            sa ugrađenim podacima o lokaciji (EXIF GPS). Posetioci veb stranice mogu da
            preuzmu i izdvoje bilo koje podatke o lokaciji sa slika na veb stranici.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Kolačići</h2>
          <p className="mt-3">
            Ako ostavite komentar na našem sajtu, možete se prijaviti za čuvanje vašeg
            imena, imejl adrese i veb stranice u kolačićima. Ovo je za vašu udobnost kako ne
            biste morali ponovo da popunjavate svoje podatke kada ostavljate drugi komentar.
            Ovi kolačići će trajati godinu dana.
          </p>
          <p className="mt-3">
            Ako posetite našu stranicu za prijavu, postavićemo privremeni kolačić da bismo
            utvrdili da li vaš pregledač prihvata kolačiće. Ovaj kolačić ne sadrži lične
            podatke i odbacuje se kada zatvorite pregledač.
          </p>
          <p className="mt-3">
            Kada se prijavite, takođe ćemo podesiti nekoliko kolačića da bismo sačuvali vaše
            podatke za prijavu i vaše izbore prikaza ekrana. Kolačići za prijavu traju dva
            dana, a kolačići za opcije ekrana traju godinu dana. Ako izaberete „Zapamti me“,
            vaša prijava će trajati dve nedelje. Ako se odjavite sa svog naloga, kolačići za
            prijavu će biti uklonjeni.
          </p>
          <p className="mt-3">
            Ako uredite ili objavite članak, dodatni kolačić će biti sačuvan u vašem
            pregledaču. Ovaj kolačić ne sadrži lične podatke i jednostavno označava ID
            objave članka koji ste upravo uredili. Ističe nakon 1 dana.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Ugrađeni sadržaj sa drugih veb lokacija
          </h2>
          <p className="mt-3">
            Članci na ovoj stranici mogu da sadrže ugrađeni sadržaj (npr. video zapise,
            slike, članke itd.). Ugrađeni sadržaj sa drugih veb-sajtova ponaša se na potpuno
            isti način kao da je posetilac posetio drugi veb-sajt.
          </p>
          <p className="mt-3">
            Ovi veb-sajtovi mogu prikupljati podatke o vama, koristiti kolačiće, ugrađivati
            dodatno praćenje trećih strana i pratiti vašu interakciju sa tim ugrađenim
            sadržajem, uključujući praćenje vaše interakcije sa ugrađenim sadržajem ako imate
            nalog i prijavljeni ste na taj veb-sajt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Sa kim delimo vaše podatke
          </h2>
          <p className="mt-3">
            Ako zatražite resetovanje lozinke, vaša IP adresa će biti uključena u e-poruku
            za resetovanje.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Koliko dugo čuvamo vaše podatke
          </h2>
          <p className="mt-3">
            Ako ostavite komentar, komentar i njegovi metapodaci se čuvaju na neodređeno
            vreme. To je da bismo mogli automatski da prepoznamo i odobrimo sve naknadne
            komentare umesto da ih držimo u redu za moderiranje.
          </p>
          <p className="mt-3">
            Za korisnike koji se registruju na našem veb-sajtu (ako ih ima), takođe čuvamo
            lične podatke koje navedu u svom korisničkom profilu. Svi korisnici mogu da vide,
            urede ili izbrišu svoje lične podatke u bilo kom trenutku (osim što ne mogu da
            promene svoje korisničko ime). Administratori veb-sajta takođe mogu da vide i
            urede te podatke.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Koja prava imate nad svojim podacima
          </h2>
          <p className="mt-3">
            Ako imate nalog na ovoj stranici ili ste ostavili komentare, možete zatražiti da
            primite izvezenu datoteku ličnih podataka koje imamo o vama, uključujući sve
            podatke koje ste nam dostavili. Takođe možete zatražiti da obrišemo sve lične
            podatke koje imamo o vama. Ovo ne uključuje podatke koje smo dužni da čuvamo u
            administrativne, pravne ili bezbednosne svrhe.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Gde se šalju vaši podaci
          </h2>
          <p className="mt-3">
            Komentari posetilaca mogu biti provereni putem automatizovane usluge za
            otkrivanje spama.
          </p>
        </section>
      </div>
    </div>
  );
}
