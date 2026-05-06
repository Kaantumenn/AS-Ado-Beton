"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RefreshCcw, Trash2 } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

type Gender = "erkek" | "kadin" | "";
type MaritalStatus = "evli" | "bekar" | "";

type FamilyMember = {
  adSoyad: string;
  yas: string;
  meslekOkul: string;
  aylikGelir: string;
};

type EducationEntry = {
  okulAdi: string;
  bolum: string;
  mezuniyetDerecesi: string;
  mezuniyetTarihi: string;
};

type WorkExperience = {
  isyeri: string;
  yaptigiIs: string;
  girisTarihi: string;
  cikisTarihi: string;
  ayrilisSebebi: string;
  girisMaasi: string;
  cikisMaasi: string;
};

type ReferenceEntry = {
  adiSoyadi: string;
  yakinligi: string;
  gorevi: string;
  telefon: string;
  adres: string;
};

type JobApplicationData = {
  adSoyad: string;
  tcKimlikNo: string;
  dogumYeri: string;
  dogumTarihi: string;
  nufusIlIlce: string;
  nufusMahalleKoy: string;
  cinsiyet: Gender;
  medeniDurum: MaritalStatus;
  meslek: string;
  meslekiYeterlilik: string;
  adres: string;
  telefonNumarasi: string;
  email: string;
  askerlikDurumu: string;
  calismaDurumu: string;
  vardiyaliCalisabilir: string;
  surekliIlacProtez: string;
  engelDurumu: string;
  sigaraKullanim: string;
  es: FamilyMember;
  baba: FamilyMember;
  anne: FamilyMember;
  cocuklar: FamilyMember[];
  kardesler: FamilyMember[];
  egitimBilgileri: EducationEntry[];
  bilgisayarProgramlari: string;
  yabanciDilLisan: string;
  yabanciDilAnlama: string;
  yabanciDilKonusma: string;
  yabanciDilYazma: string;
  kursSeminerler: string;
  surucuBelgesi: string;
  hobiler: string;
  isDeneyimleri: WorkExperience[];
  calismakIstedigiIsler: string;
  kullandigiAracCihazlar: string;
  goreveBaslamaZamani: string;
  talepEdilenUcret: string;
  referanslar: ReferenceEntry[];
  kisaOzgecmis: string;
  captchaInput: string;
};

const TOTAL_STEPS = 7;

const createCaptchaValue = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

const initialData: JobApplicationData = {
  adSoyad: "",
  tcKimlikNo: "",
  dogumYeri: "",
  dogumTarihi: "",
  nufusIlIlce: "",
  nufusMahalleKoy: "",
  cinsiyet: "",
  medeniDurum: "",
  meslek: "",
  meslekiYeterlilik: "",
  adres: "",
  telefonNumarasi: "",
  email: "",
  askerlikDurumu: "",
  calismaDurumu: "",
  vardiyaliCalisabilir: "",
  surekliIlacProtez: "",
  engelDurumu: "",
  sigaraKullanim: "",
  es: { adSoyad: "", yas: "", meslekOkul: "", aylikGelir: "" },
  baba: { adSoyad: "", yas: "", meslekOkul: "", aylikGelir: "" },
  anne: { adSoyad: "", yas: "", meslekOkul: "", aylikGelir: "" },
  cocuklar: [{ adSoyad: "", yas: "", meslekOkul: "", aylikGelir: "" }],
  kardesler: [{ adSoyad: "", yas: "", meslekOkul: "", aylikGelir: "" }],
  egitimBilgileri: [
    { okulAdi: "", bolum: "", mezuniyetDerecesi: "", mezuniyetTarihi: "" },
    { okulAdi: "", bolum: "", mezuniyetDerecesi: "", mezuniyetTarihi: "" },
    { okulAdi: "", bolum: "", mezuniyetDerecesi: "", mezuniyetTarihi: "" },
    { okulAdi: "", bolum: "", mezuniyetDerecesi: "", mezuniyetTarihi: "" },
    { okulAdi: "", bolum: "", mezuniyetDerecesi: "", mezuniyetTarihi: "" },
    { okulAdi: "", bolum: "", mezuniyetDerecesi: "", mezuniyetTarihi: "" },
  ],
  bilgisayarProgramlari: "",
  yabanciDilLisan: "",
  yabanciDilAnlama: "",
  yabanciDilKonusma: "",
  yabanciDilYazma: "",
  kursSeminerler: "",
  surucuBelgesi: "",
  hobiler: "",
  isDeneyimleri: [
    {
      isyeri: "",
      yaptigiIs: "",
      girisTarihi: "",
      cikisTarihi: "",
      ayrilisSebebi: "",
      girisMaasi: "",
      cikisMaasi: "",
    },
  ],
  calismakIstedigiIsler: "",
  kullandigiAracCihazlar: "",
  goreveBaslamaZamani: "",
  talepEdilenUcret: "",
  referanslar: [
    { adiSoyadi: "", yakinligi: "", gorevi: "", telefon: "", adres: "" },
    { adiSoyadi: "", yakinligi: "", gorevi: "", telefon: "", adres: "" },
    { adiSoyadi: "", yakinligi: "", gorevi: "", telefon: "", adres: "" },
  ],
  kisaOzgecmis: "",
  captchaInput: "",
};

function FormLabel({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">{children}</label>;
}

function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-13 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    />
  );
}

function FormSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="h-13 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    />
  );
}

export function InsanKaynaklariPage() {
  const captchaCanvasRef = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<JobApplicationData>(initialData);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvFileName, setCvFileName] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(createCaptchaValue);
  const [captchaError, setCaptchaError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const cocuklar = formData.cocuklar ?? [];
  const kardesler = formData.kardesler ?? [];
  const egitimBilgileri = formData.egitimBilgileri ?? [];
  const isDeneyimleri = formData.isDeneyimleri ?? [];
  const referanslar = formData.referanslar ?? [];

  const setField = <K extends keyof JobApplicationData>(key: K, value: JobApplicationData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const updateFixedFamilyMember = (
    relation: "es" | "baba" | "anne",
    key: keyof FamilyMember,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [relation]: { ...prev[relation], [key]: value },
    }));
  };

  const updateListFamilyMember = (
    relation: "cocuklar" | "kardesler",
    index: number,
    key: keyof FamilyMember,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [relation]: (prev[relation] ?? []).map((member, i) =>
        i === index ? { ...member, [key]: value } : member
      ),
    }));
  };

  const addFamilyMember = (relation: "cocuklar" | "kardesler") => {
    setFormData((prev) => ({
      ...prev,
      [relation]: [
        ...(prev[relation] ?? []),
        { adSoyad: "", yas: "", meslekOkul: "", aylikGelir: "" },
      ],
    }));
  };

  const removeFamilyMember = (relation: "cocuklar" | "kardesler", index: number) => {
    setFormData((prev) => ({
      ...prev,
      [relation]: (prev[relation] ?? []).filter((_, i) => i !== index),
    }));
  };

  const updateEducationEntry = (
    index: number,
    key: keyof EducationEntry,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      egitimBilgileri: (prev.egitimBilgileri ?? []).map((entry, i) =>
        i === index ? { ...entry, [key]: value } : entry
      ),
    }));
  };

  const updateWorkEntry = (
    index: number,
    key: keyof WorkExperience,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      isDeneyimleri: (prev.isDeneyimleri ?? []).map((entry, i) =>
        i === index ? { ...entry, [key]: value } : entry
      ),
    }));
  };

  const addWorkEntry = () => {
    setFormData((prev) => ({
      ...prev,
      isDeneyimleri: [
        ...(prev.isDeneyimleri ?? []),
        {
          isyeri: "",
          yaptigiIs: "",
          girisTarihi: "",
          cikisTarihi: "",
          ayrilisSebebi: "",
          girisMaasi: "",
          cikisMaasi: "",
        },
      ],
    }));
  };

  const removeWorkEntry = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      isDeneyimleri: (prev.isDeneyimleri ?? []).filter((_, i) => i !== index),
    }));
  };

  const updateReferenceEntry = (
    index: number,
    key: keyof ReferenceEntry,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      referanslar: (prev.referanslar ?? []).map((entry, i) =>
        i === index ? { ...entry, [key]: value } : entry
      ),
    }));
  };

  const generateCaptcha = () => {
    setCaptchaAnswer(createCaptchaValue());
    setCaptchaError("");
  };

  useEffect(() => {
    if (!captchaAnswer || !captchaCanvasRef.current) return;
    const canvas = captchaCanvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f4f7fb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Noise lines
    for (let i = 0; i < 6; i += 1) {
      ctx.strokeStyle = `rgba(37,150,190,${0.15 + Math.random() * 0.25})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Random dots
    for (let i = 0; i < 30; i += 1) {
      ctx.fillStyle = "rgba(20,30,50,0.25)";
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    const charWidth = canvas.width / (captchaAnswer.length + 1);
    captchaAnswer.split("").forEach((char, index) => {
      const x = (index + 0.7) * charWidth;
      const y = 30 + Math.random() * 8;
      const angle = (Math.random() - 0.5) * 0.45;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.font = "bold 26px Arial";
      ctx.fillStyle = index % 2 === 0 ? "#1f7fb3" : "#243447";
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  }, [captchaAnswer]);

  const handlePrimaryAction = () => {
    setSubmitMessage("");
    if (step < TOTAL_STEPS) {
      setStep((prev) => Math.min(TOTAL_STEPS, prev + 1));
      return;
    }

    const normalizedInput = formData.captchaInput.trim().toUpperCase();
    if (!normalizedInput || normalizedInput !== captchaAnswer) {
      setCaptchaError("Captcha doğrulaması başarısız. Lütfen kodu kontrol edin.");
      generateCaptcha();
      return;
    }

    if (!cvFile) {
      setSubmitMessage("Lütfen CV dosyanızı yükleyiniz (PDF/DOC/DOCX).");
      return;
    }

    setCaptchaError("");
    setSubmitMessage("Başvurunuz alınmaya hazır. Bir sonraki adımda API gönderimi bağlanacak.");
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1 bg-(--section-alt)" role="main">
        <section className="border-b border-zinc-200/70 bg-linear-to-b from-zinc-50 to-white py-12 dark:border-zinc-700/70 dark:from-zinc-900 dark:to-zinc-950">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              İnsan Kaynakları Başvuru Formu
            </h1>
            <nav aria-label="Breadcrumb" className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-(--primary-blue)">
                    Anasayfa
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>Kurumsal</li>
                <li aria-hidden>/</li>
                <li className="text-zinc-700 dark:text-zinc-200">İnsan Kaynakları</li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="basvuru" className="scroll-mt-24 py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-[0_14px_38px_-24px_rgba(56,189,248,0.42)] sm:p-8 dark:border-zinc-700 dark:bg-zinc-900">
              <div className="mb-7 flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/60">
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Adım <span className="font-semibold text-zinc-900 dark:text-zinc-100">{step}</span> / {TOTAL_STEPS}
                </p>
                <div className="h-2 w-40 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                  <div className="h-full bg-(--primary-blue)" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
                </div>
              </div>

              {step === 1 ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-(--primary-blue) sm:text-2xl">Kişisel Bilgiler</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <FormLabel>Ad Soyad</FormLabel>
                      <FormInput value={formData.adSoyad} onChange={(e) => setField("adSoyad", e.target.value)} />
                    </div>
                    <div>
                      <FormLabel>T.C. Kimlik Numarası</FormLabel>
                      <FormInput
                        value={formData.tcKimlikNo}
                        onChange={(e) => setField("tcKimlikNo", e.target.value)}
                        inputMode="numeric"
                      />
                    </div>

                    <div>
                      <FormLabel>Doğum Yeri</FormLabel>
                      <FormInput value={formData.dogumYeri} onChange={(e) => setField("dogumYeri", e.target.value)} />
                    </div>
                    <div>
                      <FormLabel>Doğum Tarihi</FormLabel>
                      <FormInput
                        type="date"
                        value={formData.dogumTarihi}
                        onChange={(e) => setField("dogumTarihi", e.target.value)}
                      />
                    </div>

                    <div>
                      <FormLabel>Nüfusa Kayıtlı Olduğu İl / İlçe</FormLabel>
                      <FormInput value={formData.nufusIlIlce} onChange={(e) => setField("nufusIlIlce", e.target.value)} />
                    </div>
                    <div>
                      <FormLabel>Nüfusa Kayıtlı Olduğu Mahalle / Köy</FormLabel>
                      <FormInput
                        value={formData.nufusMahalleKoy}
                        onChange={(e) => setField("nufusMahalleKoy", e.target.value)}
                      />
                    </div>

                    <fieldset>
                      <legend className="mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-200">Cinsiyetiniz</legend>
                      <div className="space-y-2.5">
                        <label className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                          <input
                            type="radio"
                            name="cinsiyet"
                            value="erkek"
                            checked={formData.cinsiyet === "erkek"}
                            onChange={() => setField("cinsiyet", "erkek")}
                          />
                          Erkek
                        </label>
                        <label className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                          <input
                            type="radio"
                            name="cinsiyet"
                            value="kadin"
                            checked={formData.cinsiyet === "kadin"}
                            onChange={() => setField("cinsiyet", "kadin")}
                          />
                          Kadın
                        </label>
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend className="mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-200">Medeni Durumunuz</legend>
                      <div className="space-y-2.5">
                        <label className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                          <input
                            type="radio"
                            name="medeni-durum"
                            value="evli"
                            checked={formData.medeniDurum === "evli"}
                            onChange={() => setField("medeniDurum", "evli")}
                          />
                          Evli
                        </label>
                        <label className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-200">
                          <input
                            type="radio"
                            name="medeni-durum"
                            value="bekar"
                            checked={formData.medeniDurum === "bekar"}
                            onChange={() => setField("medeniDurum", "bekar")}
                          />
                          Bekar
                        </label>
                      </div>
                    </fieldset>

                    <div>
                      <FormLabel>Mesleğiniz</FormLabel>
                      <FormInput value={formData.meslek} onChange={(e) => setField("meslek", e.target.value)} />
                    </div>
                    <div>
                      <FormLabel>Mesleki Yeterlilik Belgeniz Var mı?</FormLabel>
                      <FormInput
                        value={formData.meslekiYeterlilik}
                        onChange={(e) => setField("meslekiYeterlilik", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <FormLabel>Adresiniz</FormLabel>
                    <textarea
                      value={formData.adres}
                      onChange={(e) => setField("adres", e.target.value)}
                      className="min-h-34 w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                  </div>
                </div>
              ) : step === 2 ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-(--primary-blue) sm:text-2xl">Kişisel Bilgiler</h2>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <FormLabel>Telefon Numaranız</FormLabel>
                      <FormInput
                        value={formData.telefonNumarasi}
                        onChange={(e) => setField("telefonNumarasi", e.target.value)}
                        inputMode="tel"
                      />
                    </div>
                    <div>
                      <FormLabel>E-Mail</FormLabel>
                      <FormInput
                        type="email"
                        value={formData.email}
                        onChange={(e) => setField("email", e.target.value)}
                      />
                    </div>

                    <div>
                      <FormLabel>Askerlik Durumu</FormLabel>
                      <FormInput
                        value={formData.askerlikDurumu}
                        onChange={(e) => setField("askerlikDurumu", e.target.value)}
                      />
                    </div>
                    <div>
                      <FormLabel>Çalışma Durumu</FormLabel>
                      <FormInput
                        value={formData.calismaDurumu}
                        onChange={(e) => setField("calismaDurumu", e.target.value)}
                      />
                    </div>

                    <div>
                      <FormLabel>Vardiyalı Çalışabilir misiniz</FormLabel>
                      <FormInput
                        value={formData.vardiyaliCalisabilir}
                        onChange={(e) => setField("vardiyaliCalisabilir", e.target.value)}
                      />
                    </div>
                    <div>
                      <FormLabel>Sürekli Kullandığınız İlaç / Protez var mı ?</FormLabel>
                      <FormInput
                        value={formData.surekliIlacProtez}
                        onChange={(e) => setField("surekliIlacProtez", e.target.value)}
                      />
                    </div>

                    <div>
                      <FormLabel>Engellilik Durumunuz var mı ?</FormLabel>
                      <FormInput
                        value={formData.engelDurumu}
                        onChange={(e) => setField("engelDurumu", e.target.value)}
                      />
                    </div>
                    <div>
                      <FormLabel>Sigara Kullanıyor musunuz ?</FormLabel>
                      <FormInput
                        value={formData.sigaraKullanim}
                        onChange={(e) => setField("sigaraKullanim", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : step === 3 ? (
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-center text-xl font-semibold text-(--primary-blue) sm:text-2xl">
                      Aile Bilgileri
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => addFamilyMember("cocuklar")}
                        className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:border-(--primary-blue) hover:text-(--primary-blue) dark:border-zinc-700 dark:text-zinc-200"
                      >
                        + Çocuk Ekle
                      </button>
                      <button
                        type="button"
                        onClick={() => addFamilyMember("kardesler")}
                        className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:border-(--primary-blue) hover:text-(--primary-blue) dark:border-zinc-700 dark:text-zinc-200"
                      >
                        + Kardeş Ekle
                      </button>
                    </div>
                  </div>

                  <div className="hidden grid-cols-4 gap-4 border-b border-zinc-200 pb-2 text-sm font-semibold text-zinc-700 md:grid dark:border-zinc-700 dark:text-zinc-200">
                    <p>Adı Soyadı</p>
                    <p>Yaşı</p>
                    <p>Mesleği veya Okulu</p>
                    <p>Aylık Geliri</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 border-b border-zinc-200 pb-4 md:grid-cols-4 dark:border-zinc-700">
                      <FormInput
                        placeholder="Eş"
                        value={formData.es.adSoyad}
                        onChange={(e) => updateFixedFamilyMember("es", "adSoyad", e.target.value)}
                      />
                      <FormInput
                        placeholder="Yaş"
                        value={formData.es.yas}
                        onChange={(e) => updateFixedFamilyMember("es", "yas", e.target.value)}
                      />
                      <FormInput
                        placeholder="Meslek"
                        value={formData.es.meslekOkul}
                        onChange={(e) => updateFixedFamilyMember("es", "meslekOkul", e.target.value)}
                      />
                      <FormInput
                        placeholder="Gelir"
                        value={formData.es.aylikGelir}
                        onChange={(e) => updateFixedFamilyMember("es", "aylikGelir", e.target.value)}
                      />
                    </div>

                    {cocuklar.map((cocuk, index) => (
                      <div
                        key={`cocuk-${index}`}
                        className="grid gap-4 border-b border-zinc-200 pb-4 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] dark:border-zinc-700"
                      >
                        <FormInput
                          placeholder={`Çocuk-${index + 1}`}
                          value={cocuk.adSoyad}
                          onChange={(e) =>
                            updateListFamilyMember("cocuklar", index, "adSoyad", e.target.value)
                          }
                        />
                        <FormInput
                          placeholder="Yaş"
                          value={cocuk.yas}
                          onChange={(e) =>
                            updateListFamilyMember("cocuklar", index, "yas", e.target.value)
                          }
                        />
                        <FormInput
                          placeholder="Meslek"
                          value={cocuk.meslekOkul}
                          onChange={(e) =>
                            updateListFamilyMember("cocuklar", index, "meslekOkul", e.target.value)
                          }
                        />
                        <FormInput
                          placeholder="Gelir"
                          value={cocuk.aylikGelir}
                          onChange={(e) =>
                            updateListFamilyMember("cocuklar", index, "aylikGelir", e.target.value)
                          }
                        />
                        <div className="flex items-center md:justify-end">
                          <button
                            type="button"
                            onClick={() => removeFamilyMember("cocuklar", index)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100 dark:border-red-900/60 dark:bg-red-900/20 dark:text-red-300"
                            aria-label={`Çocuk-${index + 1} satırını sil`}
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="grid gap-4 border-b border-zinc-200 pb-4 md:grid-cols-4 dark:border-zinc-700">
                      <FormInput
                        placeholder="Baba"
                        value={formData.baba.adSoyad}
                        onChange={(e) => updateFixedFamilyMember("baba", "adSoyad", e.target.value)}
                      />
                      <FormInput
                        placeholder="Yaş"
                        value={formData.baba.yas}
                        onChange={(e) => updateFixedFamilyMember("baba", "yas", e.target.value)}
                      />
                      <FormInput
                        placeholder="Meslek"
                        value={formData.baba.meslekOkul}
                        onChange={(e) => updateFixedFamilyMember("baba", "meslekOkul", e.target.value)}
                      />
                      <FormInput
                        placeholder="Gelir"
                        value={formData.baba.aylikGelir}
                        onChange={(e) => updateFixedFamilyMember("baba", "aylikGelir", e.target.value)}
                      />
                    </div>

                    <div className="grid gap-4 border-b border-zinc-200 pb-4 md:grid-cols-4 dark:border-zinc-700">
                      <FormInput
                        placeholder="Anne"
                        value={formData.anne.adSoyad}
                        onChange={(e) => updateFixedFamilyMember("anne", "adSoyad", e.target.value)}
                      />
                      <FormInput
                        placeholder="Yaş"
                        value={formData.anne.yas}
                        onChange={(e) => updateFixedFamilyMember("anne", "yas", e.target.value)}
                      />
                      <FormInput
                        placeholder="Meslek"
                        value={formData.anne.meslekOkul}
                        onChange={(e) => updateFixedFamilyMember("anne", "meslekOkul", e.target.value)}
                      />
                      <FormInput
                        placeholder="Gelir"
                        value={formData.anne.aylikGelir}
                        onChange={(e) => updateFixedFamilyMember("anne", "aylikGelir", e.target.value)}
                      />
                    </div>

                    {kardesler.map((kardes, index) => (
                      <div
                        key={`kardes-${index}`}
                        className="grid gap-4 border-b border-zinc-200 pb-4 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] dark:border-zinc-700"
                      >
                        <FormInput
                          placeholder={`Kardeş-${index + 1}`}
                          value={kardes.adSoyad}
                          onChange={(e) =>
                            updateListFamilyMember("kardesler", index, "adSoyad", e.target.value)
                          }
                        />
                        <FormInput
                          placeholder="Yaş"
                          value={kardes.yas}
                          onChange={(e) =>
                            updateListFamilyMember("kardesler", index, "yas", e.target.value)
                          }
                        />
                        <FormInput
                          placeholder="Meslek"
                          value={kardes.meslekOkul}
                          onChange={(e) =>
                            updateListFamilyMember("kardesler", index, "meslekOkul", e.target.value)
                          }
                        />
                        <FormInput
                          placeholder="Gelir"
                          value={kardes.aylikGelir}
                          onChange={(e) =>
                            updateListFamilyMember("kardesler", index, "aylikGelir", e.target.value)
                          }
                        />
                        <div className="flex items-center md:justify-end">
                          <button
                            type="button"
                            onClick={() => removeFamilyMember("kardesler", index)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100 dark:border-red-900/60 dark:bg-red-900/20 dark:text-red-300"
                            aria-label={`Kardeş-${index + 1} satırını sil`}
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : step === 4 ? (
                <div className="space-y-6">
                  <h2 className="text-center text-xl font-semibold text-(--primary-blue) sm:text-2xl">
                    Eğitim Bilgileri
                  </h2>

                  <div className="hidden grid-cols-4 gap-4 border-b border-zinc-200 pb-2 text-sm font-semibold text-zinc-700 md:grid dark:border-zinc-700 dark:text-zinc-200">
                    <p>Okulunuzun Adı</p>
                    <p>Bölümü</p>
                    <p>Mezuniyet Derecesi</p>
                    <p>Mezuniyet Tarihi</p>
                  </div>

                  <div className="space-y-4">
                    {egitimBilgileri.map((entry, index) => (
                      <div
                        key={`${entry.okulAdi}-${index}`}
                        className="grid gap-4 border-b border-zinc-200 pb-4 md:grid-cols-4 dark:border-zinc-700"
                      >
                        {/** Okul adi alanlari sadece placeholder ile gelir */}
                        <FormInput
                          placeholder={
                            ["İlköğretim", "Orta veya Muadili", "Lise veya Muadili", "Yükseköğrenim", "Diğer", "İhtisas"][index] ?? "Okul"
                          }
                          value={entry.okulAdi}
                          onChange={(e) => updateEducationEntry(index, "okulAdi", e.target.value)}
                        />
                        <FormInput
                          placeholder="Bölüm"
                          value={entry.bolum}
                          onChange={(e) => updateEducationEntry(index, "bolum", e.target.value)}
                        />
                        <FormInput
                          placeholder="Derece"
                          value={entry.mezuniyetDerecesi}
                          onChange={(e) =>
                            updateEducationEntry(index, "mezuniyetDerecesi", e.target.value)
                          }
                        />
                        <FormInput
                          type="date"
                          value={entry.mezuniyetTarihi}
                          onChange={(e) => updateEducationEntry(index, "mezuniyetTarihi", e.target.value)}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <FormLabel>Kullandığınız Bilgisayar Programları</FormLabel>
                    <textarea
                      value={formData.bilgisayarProgramlari}
                      onChange={(e) => setField("bilgisayarProgramlari", e.target.value)}
                      className="min-h-34 w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                  </div>
                </div>
              ) : step === 5 ? (
                <div className="space-y-6">
                  <h2 className="text-center text-xl font-semibold text-(--primary-blue) sm:text-2xl">
                    Yabancı Dil
                  </h2>

                  <div className="hidden grid-cols-4 gap-4 border-b border-zinc-200 pb-2 text-sm font-semibold text-zinc-700 md:grid dark:border-zinc-700 dark:text-zinc-200">
                    <p>Lisan</p>
                    <p>Anlama</p>
                    <p>Konuşma</p>
                    <p>Yazma</p>
                  </div>

                  <div className="grid gap-4 border-b border-zinc-200 pb-4 md:grid-cols-4 dark:border-zinc-700">
                    <FormSelect
                      value={formData.yabanciDilLisan}
                      onChange={(e) => setField("yabanciDilLisan", e.target.value)}
                    >
                      <option value="">--Seçiniz--</option>
                      <option value="ingilizce">İngilizce</option>
                      <option value="almanca">Almanca</option>
                      <option value="fransizca">Fransızca</option>
                      <option value="diger">Diğer</option>
                    </FormSelect>
                    <FormSelect
                      value={formData.yabanciDilAnlama}
                      onChange={(e) => setField("yabanciDilAnlama", e.target.value)}
                    >
                      <option value="">--Seçiniz--</option>
                      <option value="iyi">İyi</option>
                      <option value="orta">Orta</option>
                      <option value="baslangic">Başlangıç</option>
                    </FormSelect>
                    <FormSelect
                      value={formData.yabanciDilKonusma}
                      onChange={(e) => setField("yabanciDilKonusma", e.target.value)}
                    >
                      <option value="">--Seçiniz--</option>
                      <option value="iyi">İyi</option>
                      <option value="orta">Orta</option>
                      <option value="baslangic">Başlangıç</option>
                    </FormSelect>
                    <FormSelect
                      value={formData.yabanciDilYazma}
                      onChange={(e) => setField("yabanciDilYazma", e.target.value)}
                    >
                      <option value="">--Seçiniz--</option>
                      <option value="iyi">İyi</option>
                      <option value="orta">Orta</option>
                      <option value="baslangic">Başlangıç</option>
                    </FormSelect>
                  </div>

                  <div>
                    <FormLabel>Katıldığınız Kurs veya Seminerler</FormLabel>
                    <textarea
                      value={formData.kursSeminerler}
                      onChange={(e) => setField("kursSeminerler", e.target.value)}
                      className="min-h-34 w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <FormLabel>Sürücü Belgenizin Tarih ve Sınıfı :</FormLabel>
                      <FormInput
                        value={formData.surucuBelgesi}
                        onChange={(e) => setField("surucuBelgesi", e.target.value)}
                      />
                    </div>
                    <div>
                      <FormLabel>Hobileriniz :</FormLabel>
                      <FormInput
                        value={formData.hobiler}
                        onChange={(e) => setField("hobiler", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : step === 6 ? (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-center text-xl font-semibold text-(--primary-blue) sm:text-2xl">
                      Lütfen daha önce çalıştığınız işyerlerini tamamını yazınız
                    </h2>
                    <button
                      type="button"
                      onClick={addWorkEntry}
                      className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:border-(--primary-blue) hover:text-(--primary-blue) dark:border-zinc-700 dark:text-zinc-200"
                    >
                      + İş Ekle
                    </button>
                  </div>

                  <div className="hidden grid-cols-[1fr_1fr_1.1fr_1.1fr_1fr_0.8fr_0.8fr_auto] gap-3 border-b border-zinc-200 pb-2 text-sm font-semibold text-zinc-700 lg:grid dark:border-zinc-700 dark:text-zinc-200">
                    <p>İşyeri</p>
                    <p>Yaptığınız İş</p>
                    <p>Giriş T.</p>
                    <p>Çıkış T.</p>
                    <p>Ayrılış Sebebi</p>
                    <p>Giriş Maaşı</p>
                    <p>Çıkış Maaşı</p>
                    <p className="text-right">İşlem</p>
                  </div>

                  <div className="space-y-4">
                    {isDeneyimleri.map((is, index) => (
                      <div
                        key={`is-${index}`}
                        className="grid gap-3 border-b border-zinc-200 pb-4 lg:grid-cols-[1fr_1fr_1.1fr_1.1fr_1fr_0.8fr_0.8fr_auto] dark:border-zinc-700"
                      >
                        <FormInput
                          placeholder="Firma"
                          value={is.isyeri}
                          onChange={(e) => updateWorkEntry(index, "isyeri", e.target.value)}
                        />
                        <FormInput
                          placeholder="Pozisyon"
                          value={is.yaptigiIs}
                          onChange={(e) => updateWorkEntry(index, "yaptigiIs", e.target.value)}
                        />
                        <FormInput
                          type="date"
                          value={is.girisTarihi}
                          onChange={(e) => updateWorkEntry(index, "girisTarihi", e.target.value)}
                        />
                        <FormInput
                          type="date"
                          value={is.cikisTarihi}
                          onChange={(e) => updateWorkEntry(index, "cikisTarihi", e.target.value)}
                        />
                        <FormInput
                          placeholder="Ayrılış"
                          value={is.ayrilisSebebi}
                          onChange={(e) => updateWorkEntry(index, "ayrilisSebebi", e.target.value)}
                        />
                        <FormInput
                          placeholder="Gir"
                          value={is.girisMaasi}
                          onChange={(e) => updateWorkEntry(index, "girisMaasi", e.target.value)}
                        />
                        <FormInput
                          placeholder="Çık"
                          value={is.cikisMaasi}
                          onChange={(e) => updateWorkEntry(index, "cikisMaasi", e.target.value)}
                        />
                        <div className="flex items-center lg:justify-end">
                          <button
                            type="button"
                            onClick={() => removeWorkEntry(index)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600 transition hover:bg-red-100 dark:border-red-900/60 dark:bg-red-900/20 dark:text-red-300"
                            aria-label={`İş deneyimi ${index + 1} satırını sil`}
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <FormLabel>Şirketimizde hangi işlerde çalışmayı arzu ediyorsunuz? :</FormLabel>
                      <textarea
                        value={formData.calismakIstedigiIsler}
                        onChange={(e) => setField("calismakIstedigiIsler", e.target.value)}
                        className="min-h-34 w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <FormLabel>Bu işle ilgili kullandığınız araç ve cihazlar :</FormLabel>
                      <textarea
                        value={formData.kullandigiAracCihazlar}
                        onChange={(e) => setField("kullandigiAracCihazlar", e.target.value)}
                        className="min-h-34 w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <FormLabel>Şirketimizde ne zaman göreve başlayabilirsiniz? :</FormLabel>
                      <FormInput
                        value={formData.goreveBaslamaZamani}
                        onChange={(e) => setField("goreveBaslamaZamani", e.target.value)}
                      />
                    </div>
                    <div>
                      <FormLabel>12 ay üzerinden talep ettiğiniz aylık net ücret :</FormLabel>
                      <FormInput
                        value={formData.talepEdilenUcret}
                        onChange={(e) => setField("talepEdilenUcret", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : step === 7 ? (
                <div className="space-y-6">
                  <h2 className="text-center text-xl font-semibold text-(--primary-blue) sm:text-2xl">
                    Hakkınızda Bilgi Alınabilecek Referanslarınız
                  </h2>

                  <div className="hidden grid-cols-5 gap-3 border-b border-zinc-200 pb-2 text-sm font-semibold text-zinc-700 md:grid dark:border-zinc-700 dark:text-zinc-200">
                    <p>Adı Soyadı</p>
                    <p>Yakınlığı</p>
                    <p>Görevi</p>
                    <p>Telefon</p>
                    <p>Adresi</p>
                  </div>

                  <div className="space-y-4">
                    {referanslar.map((ref, index) => (
                      <div
                        key={`ref-${index}`}
                        className="grid gap-3 border-b border-zinc-200 pb-4 md:grid-cols-5 dark:border-zinc-700"
                      >
                        <FormInput
                          placeholder="İsim"
                          value={ref.adiSoyadi}
                          onChange={(e) => updateReferenceEntry(index, "adiSoyadi", e.target.value)}
                        />
                        <FormInput
                          placeholder="Yakınlık"
                          value={ref.yakinligi}
                          onChange={(e) => updateReferenceEntry(index, "yakinligi", e.target.value)}
                        />
                        <FormInput
                          placeholder="Görevi"
                          value={ref.gorevi}
                          onChange={(e) => updateReferenceEntry(index, "gorevi", e.target.value)}
                        />
                        <FormInput
                          placeholder="Telefon"
                          value={ref.telefon}
                          onChange={(e) => updateReferenceEntry(index, "telefon", e.target.value)}
                        />
                        <FormInput
                          placeholder="Adres"
                          value={ref.adres}
                          onChange={(e) => updateReferenceEntry(index, "adres", e.target.value)}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <FormLabel>
                      Kısa Özgeçmişiniz (İlave etmek istediğiniz herhangi bir husus varsa bu bölümü kullanınız)
                    </FormLabel>
                    <textarea
                      value={formData.kisaOzgecmis}
                      onChange={(e) => setField("kisaOzgecmis", e.target.value)}
                      className="min-h-34 w-full resize-y rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition focus:border-(--primary-blue) focus:ring-2 focus:ring-(--primary-blue)/25 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <FormLabel>CV Yükleme (Sadece PDF, DOC, DOCX)</FormLabel>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (!file) {
                            setCvFile(null);
                            setCvFileName("");
                            return;
                          }
                          const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
                          const allowed = ["pdf", "doc", "docx"];
                          if (!allowed.includes(ext)) {
                            setCvFile(null);
                            setCvFileName("");
                            setSubmitMessage("Geçersiz dosya türü. Sadece PDF, DOC veya DOCX yükleyebilirsiniz.");
                            e.currentTarget.value = "";
                            return;
                          }
                          setCvFile(file);
                          setCvFileName(file.name);
                        }}
                        className="block h-13 w-full rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-700 file:mr-3 file:rounded file:border-0 file:bg-zinc-100 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:file:bg-zinc-800 dark:file:text-zinc-200"
                      />
                      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                        Yalnızca PDF veya Word formatında dosya yükleyiniz.
                      </p>
                      {cvFileName ? (
                        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">Seçilen dosya: {cvFileName}</p>
                      ) : null}
                    </div>

                    <div>
                      <FormLabel>Captcha Doğrulaması</FormLabel>
                      <div className="mb-2 flex items-center gap-2">
                        <canvas
                          ref={captchaCanvasRef}
                          width={220}
                          height={56}
                          className="rounded-md border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                        />
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 bg-white text-zinc-700 transition hover:border-(--primary-blue) hover:text-(--primary-blue) dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                          aria-label="Captcha yenile"
                        >
                          <RefreshCcw className="h-4.5 w-4.5" />
                        </button>
                      </div>
                      <FormInput
                        placeholder="Yukarıdaki kodu giriniz"
                        value={formData.captchaInput}
                        onChange={(e) => {
                          setField("captchaInput", e.target.value);
                          setCaptchaError("");
                        }}
                      />
                      {captchaError ? (
                        <p className="mt-2 text-xs text-red-600 dark:text-red-400">{captchaError}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800/45 dark:text-zinc-400">
                  Form tamamlandi.
                </div>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                  disabled={step === 1}
                  className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition disabled:cursor-not-allowed disabled:opacity-45 dark:border-zinc-700 dark:text-zinc-200"
                >
                  Geri
                </button>
                <button
                  type="button"
                  onClick={handlePrimaryAction}
                  className="rounded-lg bg-(--primary-blue) px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {step === TOTAL_STEPS ? "Başvur" : "Devam Et"}
                </button>
              </div>
              {submitMessage ? (
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{submitMessage}</p>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
