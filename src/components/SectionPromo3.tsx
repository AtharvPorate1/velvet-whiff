import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import rightImgDemo from "@/images/promo2.png";
import backgroundLineSvg from "@/images/BackgroundLine.svg";
import Badge from "@/shared/Badge/Badge";
import Input from "@/shared/Input/Input";
import ButtonCircle from "@/shared/Button/ButtonCircle";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export interface SectionPromo3Props {
  className?: string;
}

const SectionPromo3: FC<SectionPromo3Props> = ({ className = "lg:pt-10" }) => {
  return (
    <div className={`nc-SectionPromo3 ${className}`}>
      <div className="relative flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
        <div className="absolute inset-0">
          <Image
            fill
            className="absolute w-full h-full object-contain object-bottom dark:opacity-5"
            src={backgroundLineSvg}
            alt="backgroundLineSvg"
          />
        </div>

        <div className="lg:w-[50%] max-w-lg relative">
          <h2 className="font-semibold text-4xl md:text-5xl">
            {`Contact Details :`}
          </h2>
          <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            If you have any query realted to our products you can contact below here.
          </span>
          <ul className="space-y-4 mt-10">
            <li className="flex items-center space-x-4">
              <Badge color="purple" name="Phn No:" />
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                 +91-9984987530, +91-7002838021
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <Badge name="email:" />
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Swiftie.Sanskriti@gmail.com
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <Badge color="red" name="Address:" />
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Patna, Bihar, India, 800008
              </span>
            </li>
          </ul>
          <form className="mt-10 relative max-w-sm">
            <Input
              required
              aria-required
              placeholder="Enter your email"
              type="email"
              rounded="rounded-full"
            />
            <ButtonCircle
              type="submit"
              className="absolute transform top-1/2 -translate-y-1/2 right-1"
            >
              <ArrowSmallRightIcon className="w-6 h-6" />
            </ButtonCircle>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default SectionPromo3;
