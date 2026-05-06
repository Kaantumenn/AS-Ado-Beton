import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

type IconProps = SVGProps<SVGSVGElement> & {
  strokeWidth?: number | string;
};

/** Dış dalgalı halka (14 lob), merkez (12,9), ~N=48 örnekleme */
const SEAL_SCALLOP_D =
  "M12.00,4.28L12.69,3.72L13.45,3.58L13.86,4.51L14.48,4.70L15.45,4.51L15.68,5.32L15.76,6.12L16.71,6.28L17.12,6.88L16.62,7.76L17.03,8.34L17.68,9.00L17.03,9.66L16.62,10.24L17.12,11.12L16.71,11.72L15.76,11.88L15.68,12.68L15.45,13.49L14.48,13.30L13.86,13.49L13.45,14.42L12.69,14.28L12.00,13.72L11.31,14.28L10.55,14.42L10.14,13.49L9.52,13.30L8.55,13.49L8.32,12.68L8.24,11.88L7.29,11.72L6.88,11.12L7.38,10.24L6.97,9.66L6.32,9.00L6.97,8.34L7.38,7.76L6.88,6.88L7.29,6.28L8.24,6.12L8.32,5.32L8.55,4.51L9.52,4.70L10.14,4.51L10.55,3.58L11.31,3.72L12.00,4.28Z";

const SEAL_STAR_D =
  "M12.00,6.95L12.46,8.37L13.95,8.37L12.74,9.24L13.20,10.66L12.00,9.78L10.80,10.66L11.26,9.24L10.05,8.37L11.54,8.37Z";

/**
 * Güvenilir: üst kenarda hafif içbükey (V), yanlar ve sivri alt; içte onay işareti.
 */
export function IconGüvenilirShield({
  className,
  strokeWidth = 1.5,
  ...rest
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...rest}
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.2 5.35 11.15 4.42Q12 4.82 12.85 4.42L17.8 5.35 18 5.7V11.6C18 15.45 15.45 18.95 12 20.6 8.55 18.95 6 15.45 6 11.6V5.7L6.2 5.35Z" />
        <path d="M9.15 11.85L10.9 13.6L15.55 8.95" />
      </g>
    </svg>
  );
}

/**
 * Yüksek standart: dalgalı rozet + iç halka + yıldız + çift kurdele (kuyruk kesimi).
 */
export function IconYüksekStandartSeal({
  className,
  strokeWidth = 1.5,
  ...rest
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...rest}
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Kurdeleler altta, rozet üstte çizilir */}
        <path d="M10.35 14.15 6.05 22.35 7.55 20.85 8.45 23.35 9.35 20.85 10.95 22.15 11.05 14.35z" />
        <path d="M13.65 14.15 17.95 22.35 16.45 20.85 15.55 23.35 14.65 20.85 13.05 22.15 12.95 14.35z" />
        <path d={SEAL_SCALLOP_D} />
        <circle cx={12} cy={9} r={3.68} />
        <path d={SEAL_STAR_D} />
      </g>
    </svg>
  );
}
