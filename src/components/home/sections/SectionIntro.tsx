import { SectionShell } from "../SectionShell";
import { SectionIso500Vergi } from "./SectionIso500Vergi";

const introParagraphs = [
  "As Ado Hazır Beton A.Ş. 1997 yılından bu yana Antalya ve ilçelerinde hazır beton üretimi yapan, sektörün güçlü ve güvenilir markalarından biridir. Yüksek kalite anlayışımız, geniş araç filomuz ve uzman kadromuzla, inşaat sektörünün ihtiyaç duyduğu sağlam altyapıyı sunuyoruz.",
  "Bugün, 17 beton santralimiz, 170 beton mikserimiz, 30 beton pompamız ve 300'e yakın personelimizle, Antalya genelinde hızlı ve kaliteli hizmet veriyoruz. Her ölçekteki projeye zamanında ve güvenli beton temini sağlamak için çalışıyoruz.",
  "Tüm üretim süreçlerimiz, TSE standartlarına uygun olarak yürütülüyor. Kalite kontrol süreçlerine verdiğimiz önem sayesinde, sadece beton değil, projelere uzun ömürlü bir temel sunuyoruz.",
  "As Ado, aynı zamanda bölgenin en büyük ve en kaliteli çimento üreticisi olan As Çimento A.Ş. ile aynı grup çatısı altında yer almaktadır. Bu iş birliği sayesinde hammadde temininden teslimata kadar tüm süreçleri yüksek verimlilikle yönetiyoruz.",
  "Yılların verdiği tecrübe, güçlü altyapı ve çözüm odaklı hizmet anlayışımızla, hazır beton sektöründe lider konumda olmaktan gurur duyuyoruz.",
  "Güçlü yapılar, sağlam temellerle başlar. Biz o temeli sunuyoruz.",
];

/**
 * Kurumsal özet (29+ yıl) + metin; haber/ödül üçlüsü `SectionIso500Vergi` bileşeninde.
 */
export function SectionIntro() {
  return (
    <>
      <SectionShell
        id="kurumsal-ozet"
        variant="default"
        className="py-14 sm:py-20"
      >
        <h2 className="sr-only">AS Çimento — kurumsal özet</h2>

        <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-16">
          <div className="shrink-0 md:max-w-sm">
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="flex items-baseline gap-0.5">
                <span className="text-5xl font-bold leading-none text-sky-500 tabular-nums sm:text-6xl md:text-7xl dark:text-sky-400">
                  29
                </span>
                <span
                  className="text-2xl font-light leading-none text-sky-500 sm:text-3xl dark:text-sky-400"
                  aria-hidden
                >
                  +
                </span>
              </div>
              <div className="text-left text-base font-bold leading-[1.1] text-foreground sm:text-lg">
                <span className="block">Yılı</span>
                <span className="block">Aşkın</span>
                <span className="block">Deneyim</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500 sm:text-sm dark:text-zinc-400">
              Sektörde güven, süreklilik ve üretim mükemmeliyetiyle öne çıkan bir
              kuruluş.
            </p>
          </div>

          <div className="min-w-0 flex-1 space-y-4 text-left text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </SectionShell>


    </>
  );
}
