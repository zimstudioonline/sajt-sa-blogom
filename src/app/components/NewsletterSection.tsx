import NewsletterForm from "./NewsletterForm";

// Newsletter sekcija — svetla (bela → siva) da se jasno izdvaja kao zasebna sekcija.
export default function NewsletterSection() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-white to-zinc-200">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
          Newsletter
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Prijavite se na newsletter
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-zinc-600">
          Svake nedelje dobijajte korisne i proverene savete o zdravlju, ishrani i zdravim
          navikama — direktno u vaš inbox.
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          Bez spama. Odjava je moguća u svakom trenutku.
        </p>
      </div>
    </section>
  );
}
