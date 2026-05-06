import { SectionShell } from "../SectionShell";

type BlockProps = {
  id: string;
  index: number;
  variant: "default" | "muted";
};

function SectionBlock({ id, index, variant }: BlockProps) {
  return (
    <SectionShell id={id} variant={variant} className="py-16 sm:py-20">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        Bölüm {index}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground">
        Tasarım bekleniyor
      </h2>
      <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
        Bu bölümü senin atacağın ekran görüntüsüne göre düzenleyeceğiz. Hazır
        olunca o SS&apos;i gönder; içerik ve stili burada güncelleyebilirim.
      </p>
    </SectionShell>
  );
}

/**
 * Geçici placeholder bölümler. SS geldikçe bunları ayrı bileşenlere
 * ayırıp dolduracağız.
 */
export function SectionPlaceholders() {
  return (
    <>
      <SectionBlock id="surdurulebilirlik" index={4} variant="default" />
      <SectionBlock id="bolum-5" index={5} variant="muted" />
    </>
  );
}
