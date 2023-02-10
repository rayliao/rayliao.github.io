import { Locale } from "common/i18n-config";
import Family from "components/Family";

export const metadata = {
  title: "Family",
};

export default function FamilyPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <section>
      <Family count={25} path="family" lang={lang} />
    </section>
  );
}
