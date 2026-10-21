import Image from "next/image";
import { brand } from "../lib/brand";

export default function BrandSignature() {
  return (
    <Image
      src={brand.logo}
      alt={brand.businessName}
      width={1774}
      height={887}
      sizes="(max-width: 639px) 180px, 230px"
      className="h-auto w-[180px] sm:w-[230px]"
    />
  );
}
