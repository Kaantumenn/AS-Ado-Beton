"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Leaf } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

function SustainableBusinessModelsSection() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const textY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -36]);
  const imageY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -64]);
  const imageScale = useTransform(smoothProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.06]);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-y-10 gap-x-7 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <motion.div style={{ y: textY }} className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Sürdürülebilir İş Modelleri
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As Çimento olarak, sürdürülebilir iş modellerine yatırım yaparak çevresel ve toplumsal
            sorumluluklarımızı yerine getiriyoruz. Ürün ve hizmetlerimizi dört ana alanda
            şekillendiriyoruz:
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Kaynak Kullanımının Azaltılması:</strong> Enerji verimliliği ve doğal
              kaynakların sürdürülebilir kullanımı.
            </li>
            <li>
              <strong>Sürdürülebilir Teknolojiler:</strong> Çevre dostu üretim teknolojilerine
              geçiş.
            </li>
            <li>
              <strong>Teknolojik Yaygınlaştırma:</strong> Geliştirilen sürdürülebilir
              teknolojilerin sektöre entegrasyonu.
            </li>
            <li>
              <strong>Sosyal Etki:</strong> Toplumsal kalkınmaya katkı sağlamak.
            </li>
          </ul>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Bu stratejilerle, sürdürülebilir bir gelecek için çalışıyor; gelişen teknolojilerle iş
            modellerimizi sürekli iyileştiriyoruz.
          </p>
        </motion.div>

        <motion.div style={{ y: imageY, scale: imageScale }} className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-[0_22px_44px_-30px_rgba(2,132,199,0.45)] dark:border-zinc-700 dark:bg-zinc-800">
            <Image
              src="/surdurulebilirlik/surdurulebilir.png"
              alt="Sürdürülebilir iş modelleri görseli"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SustainabilityStrategySection() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const imageY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -52]);
  const textY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -26]);
  const imageScale = useTransform(smoothProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.04]);

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-y-10 gap-x-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
        <motion.div style={{ y: imageY, scale: imageScale }} className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-5/4 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-[0_22px_44px_-30px_rgba(2,132,199,0.45)] dark:border-zinc-700 dark:bg-zinc-800">
            <Image
              src="/surdurulebilirlik/surdurulebilirlik-2.png"
              alt="Sürdürülebilirlik stratejisi görseli"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>

        <motion.div style={{ y: textY }} className="space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Sürdürülebilirlik Stratejimiz
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As Çimento olarak, sürdürülebilir bir geleceğin temellerini güçlü adımlarla atıyoruz.
            Düşük karbon ekonomisine destek veren ürünlerimizle, çevresel etkilerimizi minimize
            ederek hem doğaya hem de topluma katkı sağlıyoruz.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Yenilikçi AR-GE çalışmaları ve teknolojik dönüşümle, sektörümüzdeki sürdürülebilirlik
            hedeflerine ulaşmak için öncü bir rol üstleniyoruz. Ürünlerimiz, sürdürülebilir yaşam
            alanlarının gelişimine katkı sağlarken, çevre dostu çözümler sunarak toplumların daha
            yaşanabilir bir geleceğe kavuşmalarına yardımcı olmaktadır.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Şirket olarak, dengeli ve risk odaklı bir yönetim modeli ile tüm paydaşlarımıza
            sürdürülebilir değer yaratmayı hedefliyoruz. Her iş sürecimizde, &quot;İnsana Yakışır
            İş&quot; ve &quot;İş&apos;te Eşitlik&quot; ilkelerini ön planda tutarak, hem çalışanlarımızın hem de toplumun
            yararına çözümler sunuyoruz.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Bugünün sürdürülebilir iş uygulamaları ile yarının dünyasını şekillendiriyor, çevresel
            ve toplumsal sorumluluklarımızı yerine getiriyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SustainableProductionSection() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const textY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -30]);
  const imageY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -56]);
  const imageScale = useTransform(smoothProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.045]);

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-y-10 gap-x-7 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <motion.div style={{ y: textY }} className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Sürdürülebilir Üretimle Geleceği İnşa Ediyoruz
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As Çimento olarak, çevre dostu üretim anlayışımızla doğal kaynakları verimli
            kullanarak, karbon ayak izimizi azaltmayı ve çevresel etkilerimizi en aza indirmeyi
            hedefliyoruz. Çevre dostu teknolojilerle enerji verimliliğimizi artırıyor, atıklarımızı
            azaltıyor ve geri dönüşüm süreçlerimizle doğal kaynakların tükenmesini önlüyoruz.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Sürdürülebilirlik ilkelerimiz doğrultusunda sadece çevreye değil, topluma karşı da
            sorumluluk taşıyoruz. İş sağlığı, güvenliği ve sosyal sorumluluk projeleri ile toplumun
            her kesimine katkı sağlıyoruz. As Çimento, daha temiz bir gelecek için sürdürülebilir
            üretim anlayışını küresel ölçekte benimsiyor.
          </p>
        </motion.div>

        <motion.div style={{ y: imageY, scale: imageScale }} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-[0_22px_44px_-30px_rgba(2,132,199,0.45)] dark:border-zinc-700 dark:bg-zinc-800">
            <Image
              src="/surdurulebilirlik/surdurulebilir-4.webp"
              alt="Sürdürülebilir üretim görseli"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OccupationalHealthSafetySection() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const textY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -30]);
  const imageY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -54]);
  const imageScale = useTransform(smoothProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.04]);

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-y-10 gap-x-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
        <motion.div style={{ y: textY }} className="space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            İş Sağlığı ve Güvenliği Politikamız
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As Çimento olarak, çalışanlarımızın ve paydaşlarımızın sağlıklı ve güvenli bir çalışma
            ortamında faaliyet gösterebilmeleri için &quot;Sıfır İş Kazası ve Meslek Hastalığı&quot;
            hedefiyle hareket ediyoruz.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Riskleri sistematik ve proaktif bir yaklaşımla tespit ediyor, uygun eğitimlerle
            çalışanlarımızı bilinçlendiriyoruz. İş sağlığı ve güvenliği uzmanlarımız, işyeri
            hekimleri ve sağlık personelimiz tarafından yürütülen çalışmalarla, yasal mevzuat ve
            uluslararası standartlara uygun süreçler geliştiriyoruz.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Ayrıca, acil durum eylem planları ve düzenli tatbikatlarla, olası risklere karşı
            hazırlıklı olmayı sağlıyoruz. İş güvenliği uygulamalarımız, sürekli iyileştirme
            anlayışıyla güncelleniyor ve tüm çalışanlarımıza güvenli bir iş ortamı sunuyoruz.
          </p>
        </motion.div>

        <motion.div style={{ y: imageY, scale: imageScale }} className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-5/4 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-[0_22px_44px_-30px_rgba(2,132,199,0.45)] dark:border-zinc-700 dark:bg-zinc-800">
            <Image
              src="/surdurulebilirlik/surdurulebilirlik-3.png"
              alt="İş sağlığı ve güvenliği görseli"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocietyAndPeopleFocusSection() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const textY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -30]);
  const imageY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -56]);
  const imageScale = useTransform(smoothProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.04]);

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-y-10 gap-x-7 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <motion.div style={{ y: textY }} className="space-y-4 order-1">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Toplum ve İnsan Odağımız
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As Çimento olarak, tüm faaliyetlerimizde insana ve topluma değer vermeyi temel ilke
            olarak benimsiyoruz. Çalışanlarımızdan müşterilerimize, tedarikçilerimizden yerel halk
            ve kamu kurumlarına kadar tüm paydaşlarımızla güçlü ve şeffaf bir iletişim yürütüyoruz.
          </p>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Sosyal sorumluluk, iş sağlığı ve güvenliği, çevre ve etik yönetim gibi alanlarda duyarlı
            yaklaşımlarımızla, topluma ve çevreye pozitif katkı sağlamayı sürdürüyoruz.
          </p>
        </motion.div>

        <motion.div style={{ y: imageY, scale: imageScale }} className="relative order-2">
          <div className="relative mx-auto aspect-5/4 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-[0_22px_44px_-30px_rgba(2,132,199,0.45)] dark:border-zinc-700 dark:bg-zinc-800">
            <Image
              src="/surdurulebilirlik/surdurulebilirlik-4.png"
              alt="Toplum ve insan odağı görseli"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EnvironmentPolicySection() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  });

  const textY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -28]);
  const imageY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [0, -52]);
  const imageScale = useTransform(smoothProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.04]);

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-y-10 gap-x-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8">
        <motion.div style={{ y: textY }} className="space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Çevre Politikamız
          </h2>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As Çimento olarak, çevreyi koruma sorumluluğunu tüm faaliyetlerimizin merkezine
            alıyoruz. Doğal kaynakların korunması, çevre kirliliğinin önlenmesi ve sürdürülebilirlik
            ilkeleri doğrultusunda hareket ediyoruz.
          </p>
          <div className="space-y-2">
            <p className="text-base font-semibold text-zinc-800 dark:text-zinc-200">Odak Alanlarımız:</p>
            <ul className="space-y-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <li>✓ Enerji Verimliliği ve Yenilenebilir Enerji</li>
              <li>✓ Atık Yönetimi ve Geri Dönüşüm</li>
              <li>✓ Su Tasarrufu ve Koruma</li>
              <li>✓ Hava Emisyonlarının Azaltılması</li>
              <li>✓ Doğal Kaynakların Verimli Kullanımı</li>
            </ul>
          </div>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            As Çimento, çevreye duyarlı yaklaşımıyla sürdürülebilir bir gelecek için kararlılıkla
            çalışmaktadır.
          </p>
        </motion.div>

        <motion.div style={{ y: imageY, scale: imageScale }} className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-5/4 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-[0_22px_44px_-30px_rgba(2,132,199,0.45)] dark:border-zinc-700 dark:bg-zinc-800">
            <Image
              src="/surdurulebilirlik/surdurulebilirlik-5.png"
              alt="Çevre politikası görseli"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SurdurulebilirlikPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/35 dark:text-emerald-300">
                <Leaf className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Sürdürülebilirlik
                </h1>
                <nav aria-label="Breadcrumb" className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/" className="transition hover:text-(--primary-blue)">
                        Anasayfa
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-zinc-700 dark:text-zinc-200">Sürdürülebilirlik</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <SustainableBusinessModelsSection />
        <SustainabilityStrategySection />
        <SustainableProductionSection />
        <OccupationalHealthSafetySection />
        <SocietyAndPeopleFocusSection />
        <EnvironmentPolicySection />
      </main>
      <SiteFooter />
    </div>
  );
}
