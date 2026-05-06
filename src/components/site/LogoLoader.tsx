import Image from "next/image";

export function LogoLoader() {
  return (
    <div className="as-loader-screen" role="status" aria-live="polite" aria-label="Yükleniyor">
      <div className="as-loader-logo-wrap">
        <Image
          src="/logo/as_logo.webp"
          alt="AS Çimento"
          width={220}
          height={70}
          className="as-loader-logo as-loader-logo-base"
          priority
        />
        <Image
          src="/logo/as_logo.webp"
          alt=""
          aria-hidden
          width={220}
          height={70}
          className="as-loader-logo as-loader-logo-reveal"
          priority
        />
        <span className="as-loader-sweep" aria-hidden />
      </div>
    </div>
  );
}
