import type { LucideIcon } from "lucide-react";
import {
  Award,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
  User,
  Users,
} from "lucide-react";

export type TesisContactRow = {
  type: "person" | "phone" | "whatsapp" | "email" | "location";
  text: string;
};

export type TesisMapCard = {
  id: string;
  name: string;
  thumb: string;
  /** Harita üzerinde marker (yüzde) */
  marker: { top: string; left: string };
  /** Masaüstünde kart köşesi (yüzde) */
  card: { top: string; left: string };
  contacts: TesisContactRow[];
};

export const TESIS_MAP_BG = "/turkey_map.png";

export const TESIS_MAP_CARDS: TesisMapCard[] = [
  {
    id: "merkez",
    name: "AS Çimento (Merkez)",
    thumb: "/slider_images/burdur_ihracat.jpeg",
    marker: { top: "42%", left: "46%" },
    card: { top: "6%", left: "52%" },
    contacts: [
      { type: "person", text: "Genel Koordinatör" },
      { type: "phone", text: "+90 (248) 000 00 00" },
      { type: "whatsapp", text: "+90 5xx xxx xx xx" },
      { type: "email", text: "merkez@ascement.com" },
      { type: "location", text: "Burdur / Isparta" },
    ],
  },
  {
    id: "aydin",
    name: "Aydın Ortaklar",
    thumb: "/slider_images/vergi_rek_bg.png",
    marker: { top: "58%", left: "24%" },
    card: { top: "34%", left: "4%" },
    contacts: [
      { type: "person", text: "Tesis Müdürü" },
      { type: "phone", text: "+90 (256) 000 00 00" },
      { type: "email", text: "aydin@ascement.com" },
      { type: "location", text: "Aydın" },
    ],
  },
  {
    id: "altinova",
    name: "Altınova Tesisi",
    thumb: "/slider_images/elektrikli_kaya_kamyonu.png",
    marker: { top: "72%", left: "44%" },
    card: { top: "58%", left: "6%" },
    contacts: [
      { type: "person", text: "Operasyon Sorumlusu" },
      { type: "phone", text: "+90 (242) 000 00 00" },
      { type: "whatsapp", text: "+90 5xx xxx xx xx" },
      { type: "location", text: "Antalya / Altınova" },
    ],
  },
  {
    id: "aksu",
    name: "Aksu Çimento Paketleme Tesisi",
    thumb: "/slider_images/baib_odulu.jpg",
    marker: { top: "70%", left: "54%" },
    card: { top: "56%", left: "58%" },
    contacts: [
      { type: "person", text: "Paketleme Birimi" },
      { type: "phone", text: "+90 (242) 000 00 01" },
      { type: "email", text: "aksu@ascement.com" },
      { type: "location", text: "Antalya / Aksu" },
    ],
  },
];

export const TESIS_STAT_ITEMS: {
  id: string;
  Icon: LucideIcon;
  highlight: string;
  title: string;
  description?: string;
}[] = [
  {
    id: "tesis",
    Icon: MapPin,
    highlight: "4",
    title: "Üretim Tesisi",
  },
  {
    id: "calisan",
    Icon: Users,
    highlight: "250+",
    title: "Uzman Çalışan",
  },
  {
    id: "il",
    Icon: Truck,
    highlight: "81",
    title: "İle kesintisiz hizmet",
  },
  {
    id: "kalite",
    Icon: Award,
    highlight: "",
    title: "Yüksek Kalite",
    description: "Uluslararası standartlarda üretim ve sürekli iyileştirme.",
  },
];

const contactIcons: Record<
  TesisContactRow["type"],
  LucideIcon
> = {
  person: User,
  phone: Phone,
  whatsapp: MessageCircle,
  email: Mail,
  location: MapPin,
};

export function tesisContactIcon(type: TesisContactRow["type"]) {
  return contactIcons[type];
}
