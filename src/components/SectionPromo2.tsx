import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import rightImgDemo from "@/images/promo2.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Logo from "@/shared/Logo/Logo";
import backgroundLineSvg from "@/images/Moon.svg";
import Image from "next/image";

export interface SectionPromo2Props {
  className?: string;
}

const SectionPromo2: FC<SectionPromo2Props> = ({ className = "lg:pt-10" }) => {
  return (
    <div className={`nc-SectionPromo2 ${className}`}>
      <div className="relative flex flex-col lg:flex-row lg:justify-end bg-yellow-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
        <div className="absolute inset-0">
          <Image
            fill
            className="absolute w-full h-full object-contain dark:opacity-5"
            src={backgroundLineSvg}
            alt="backgroundLineSvg"
          />
        </div>

        <div className="lg:w-[45%] max-w-lg relative">
          <Logo className="w-28" />
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
            Special offer in <br />
            Elegant products
          </h2>
          <span className="block mt-6 text-slate-500 dark:text-slate-400">
          Explore a fragrant symphony of elegance on our perfume website, where each scent is a delicate masterpiece, crafted to evoke whispers of luxury and allure. Discover opulent bottles, each a vessel of olfactory delight, housing the essence of sensuality and refined indulgence. Immerse yourself in the artistry of perfumery, where every note dances gracefully, leaving an unforgettable trail of scented memories in its wake.          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary
              href="/search"
              className="dark:bg-slate-200 dark:text-slate-800"
            >
              Discover more
            </ButtonPrimary>
          </div>
        </div>

        <NcImage
          alt=""
          containerClassName="lg:max-w-[calc(55%-40px)]"
          src={rightImgDemo}
          sizes="(max-width: 108px) 50vw, 25vw"
          className=""
        />
        
      </div>
    </div>
  );
};

export default SectionPromo2;
