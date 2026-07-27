import Image from "next/image";
import pakovanjeImg from "../../../../public/alfa-aktiv/alfa-aktiv-pakovanje.jpg";
import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";
import CheckItem from "@/components/alfa-aktiv/ui/CheckItem";

const ingredients = [
  "Prirodni med",
  "Aronija",
  "Crna ribizla",
  "Vitamin C",
  "Vitamin B3 (niacin)",
  "Selen",
  "Jod",
  "Dijetalna vlakna",
];

/** "Šta se nalazi u svakoj bočici?" — checklist sastojaka + foto pakovanja. */
export default function WhatsInside() {
  return (
    <Section tone="deep">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Sastav"
            title="Šta se nalazi u svakoj bočici?"
            subtitle="Sve pažljivo spojeno u praktično pakovanje koje možete poneti bilo gde."
          />
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ingredients.map((ing) => (
              <CheckItem key={ing}>{ing}</CheckItem>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-md">
          <Image
            src={pakovanjeImg}
            alt="ALFA AKTIV pakovanje sa bočicama, aronijom i medom"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
