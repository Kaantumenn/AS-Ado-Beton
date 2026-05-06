export type HaberCarouselSlide = {
  id: string;
  /** Kart üstündeki büyük numara (örn. "01") */
  number: string;
  title: string;
  date: string;
  /** Sadece odak kartında gösterilir */
  description?: string;
  /** Haber detay sayfasında paragraf içerikleri */
  content?: string[];
  /** Haber detayında ana görselden sonra gösterilecek ek görseller */
  detailImages?: string[];
  /** `public/slider_images/` altındaki dosya adıyla eşleşen yol */
  image: string;
  imagePosition?: string;
};

/**
 * Görseller: `public/slider_images/`
 * Eşleme dosya adına göre: ihracat → üretim, elektrikli kamyon → SANY haberi,
 * vergi arka planı → kapasite/yatırım, BAIB → kalite, iftar → sosyal sorumluluk,
 * AK Parti ziyareti → ayrı kurumsal haber.
 */
export const HABER_CAROUSEL_SLIDES: HaberCarouselSlide[] = [
  {
    id: "1",
    number: "01",
    title: "Burdur İli 2024 Yılı İhracat Birinciliği",
    date: "10 Ocak 2024",
    image: "/slider_images/burdur_ihracat.jpeg",
    content: ["Şirketimiz, Batı Akdeniz İhracatçılar Birliği (BAİB) tarafından düzenlenen İhracatın Yıldızları Programı kapsamında, 2024 yılı Burdur ili ihracat sıralamasında 1'incilik elde etmiştir. Bu önemli başarı, uluslararası pazarlardaki güçlü performansımızın, sürdürülebilir ihracat vizyonumuzun ve özveriyle çalışan ekibimizin bir sonucudur. Başta çalışanlarımız olmak üzere, tüm iş ortaklarımıza ve müşterilerimize teşekkür ederiz. İhracatta ülkemize ve bölgemize değer katmaya devam edeceğiz."],
    detailImages: [
      "/slider_images/burdur_ihracat_detail_1.jpeg",
     
    ],
    description: "2024 yılı Burdur ili ihracat birincisi",
    imagePosition: "55% center",
  },
  {
    id: "2",
    number: "02",
    title:
      "SANY'den AS Çimento'ya 6 Adet Elektrikli Kaya Kamyonu Teslimatı",
    date: "02 Mart 2024",
    description:
      "AS Çimento, SANY SKT105E model %100 elektrikli 6 adet kaya kamyonunu filosuna kattı.",
    content: [
      "AS Çimento, SANY'nin güvenilirliği ve Putzmeister'ın geniş servis ağına olan güveni çerçevesinde, 6 adet SKT105E model elektrikli kaya kamyonunun alımını gerçekleştirdi.",
      "SANY, Türkiye'yi %100 elektrikli geniş damperli kaya kamyonları ile tanıştıran ilk marka olarak madencilik sektöründe büyük bir ilgiyle karşılanmaya devam ediyor. Çevre dostu olan ve yüksek verimlilik sağlayan bu teknoloji, ülke genelinde yaygın bir şekilde kullanılmaya başlandı. Elektrikli kaya kamyonlarının sektördeki üretkenlik ve çevre dostu çözümler sağlama yönündeki katkılarını vurgulayan bu teslimatın, SANY ve Putzmeister'ın sektöre sunduğu güçlü teknolojilerin bir yansıması olduğu belirtiliyor.",
      "%100 bataryalı elektrikli SKT105E ile tasarruf ve güç bir arada",
      "Türkiye'nin ilk tam bataryalı %100 elektrikli geniş damperli kaya kamyonu SKT105E, performansı ve güvenlik donanımlarıyla dikkat çekiyor. SANY'nin son teknolojiyi takip eden yaklaşımıyla üretilen bu kamyonlar, çevre dostu bir seçenek sunarken aynı zamanda saha üretkenliğine de katkı sağlıyor. %100 elektrikli geniş damperli kaya kamyonu, tam şarjla uzun süre çalışarak iş verimliliğini artırırken, operatörlerin konforunu da ön planda tutuyor.",
      "SKT105E, rejenerasyon özelliği sayesinde enerji tasarrufu sağlarken, güçlü performansı ve dayanıklılığı ile ön plana çıkıyor. Yenilikçi teknolojiye sahip bu model, sürdürülebilir bir gelecek için sektöre katkı sunmaya devam ediyor.",
      "75 ton taşıma kapasitesi sunan SKT105E, 38 m3/44 m3 damper hacmi, 21000Nm tork değeri, 570/820kW motor gücü sunuyor. SKT105'teki ön-arka hidro-pnömatik süspansiyon sistemi ise tüm koşullarda yüksek performans göstermek üzere tasarlanmış. SANY SKT105E dolu yükte yokuş aşağı malzeme transferlerinde 3-4 günden fazla çalışabiliyor. Ayrıca kamyondaki batarya, SANY şarj istasyonları ile %20'den %95 seviyesine 80 dakikada ulaşabiliyor.",
      "SANY Grup üyesi Putzmeister Makine tarafından Türkiye pazarına sunulan SANY elektrikli kaya kamyonları, sektördeki elektrikli araç kullanımını artırarak, çevreye duyarlı ve verimli çözümler sunmaya devam ediyor.",
    ],
    detailImages: [
      "/slider_images/elektrikli_kaya_kamyonu_detail_3.png",
      "/slider_images/elektrikli_kaya_kamyonu_detail_4.png",
    
    ],
    image: "/slider_images/elektrikli_kaya_kamyonu1.png",
    imagePosition: "58% center",
  },
  {
    id: "3",
    number: "03",
    title: "Vergi Rekortmeni Yine Adem Sak Oldu",
    date: "15 Nisan 2024",
    description:
      "Vergi Rekortmeni Yine Adem SAK oldu!",
    content: [
      "Bucak'ta faaliyet gösteren ve yıllardır Bucak'ın büyümesinde ve gelişmesinde aktif rol oynayan As Çimento'nun sahibi olan iş adamı Adem Sak yine vergi rekortmeni oldu.",
    ],
    image: "/slider_images/vergi_rek_bg.png",
    imagePosition: "center",
  },
  {
    id: "4",
    number: "04",
    title: "Baib İhracatın Yıldızları Ödülü",
    date: "28 Mayıs 2024",
    content: [
      "Batı Akdeniz İhracatçılar Birliği Tarafından Düzenlenen Etkinlikte Birincillik ve Dördüncülük Ödüllerimiz Takdim Edildi.",
    ],
    detailImages: [
      "/slider_images/baib_odulu_detail_1.jpg",
      "/slider_images/baib_odulu_detail_2.jpg",
    ],
    image: "/slider_images/baib_odulu.jpg",
    imagePosition: "center",
  },
  {
    id: "5",
    number: "05",
    title: "Geleneksel AS Çimento İftar Yemeği",
    date: "10 Haziran 2024",
    content: [
      "Her yıl geleneksel olarak düzenlenen AS Çimento & AS Ado Beton iftar organizasyonu Antalya Anadolu Park Restauran'da yaklaşık 1000 kişinin katılımıyla gerçekleşti.",
    ],
    image: "/slider_images/geleneksel_iftar.jpeg",
    imagePosition: "center",
    detailImages: [
      "/slider_images/geleneksel_iftar_detail_1.webp",
    
    ],
  },
  {
    id: "6",
    number: "06",
    title: "AK Parti Heyetinden Fabrika Ziyareti",
    date: "20 Ocak 2024",
    description: "Bucak AK Parti ilçe başkanından genel müdürümüz Osman GÖKCE Bey'e ziyaret",
    content: [
      "Bucak Ak Parti ilçe başkanı Osman TAŞKIN, Yönetim Kurulu Üyeleri ve Ak Parti Bucak Belediye Meclis Üyesinin fabrikamıza gelerek genel müdürümüz Osman GÖKCE Bey'e ziyaretlerinden dolayı teşekkür ederiz.",
    ],
    detailImages: [
      "/slider_images/ak_parti_ziyaret_detail_1.jpg",
      "/slider_images/ak_parti_ziyaret_detail_2.jpg",
    ],
    image: "/slider_images/ak_parti_ziyaret.jpg",
    imagePosition: "center",
  },
];
