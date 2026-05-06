import Image from "next/image";

export function LogoLoader() {
  return (
    <div className="as-loader-screen" role="status" aria-live="polite" aria-label="Yükleniyor">
      <div className="as-loader-logo-wrap">
        <Image
          src="/logo/as_ado_beton_logo.png"
          alt="AS Ado Beton"
          width={260}
          height={84}
          className="as-loader-logo as-loader-logo-base"
          priority
        />
        <Image
          src="/logo/as_ado_beton_logo.png"
          alt=""
          aria-hidden
          width={260}
          height={84}
          className="as-loader-logo as-loader-logo-reveal"
          priority
        />
        <span className="as-loader-sweep" aria-hidden />
      </div>
    </div>
  );
}
