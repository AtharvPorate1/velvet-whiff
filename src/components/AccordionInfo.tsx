"use client";

import { Disclosure } from "@/app/headlessui";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const DEMO_DATA = [
  {
    name: "Description",
    content:
      "Elegant perfume featuring a harmonious blend of jasmine and vanilla, creating a captivating scent that embodies sophistication, allure, and timeless sensuality for discerning individuals.",
  },
  {
    name: "How its Made",
    content: `<ul class="list-disc list-inside leading-7">
    <li> Globally sourced for unparalleled richness and allure.</li>
    <li>
    Crafted for harmonious, long-lasting fragrance compositions.
    </li>
    <li>
    Patient aging fosters depth and sophistication.
    </li>
    <li>
    Quality control ensures excellence from formulation.
    </li>
  </ul>`,
  },

  {
    name: "How it Feels",
    content:
      "It envelops you in a delicate embrace, evoking emotions of confidence, allure, and elegance. Its scent lingers, leaving a trail of enchantment wherever you go"  },
  {
    name: "FAQ",
    content: `
    <ul class="list-disc list-inside leading-7">
    <li>What is the fragrance profile?</li>
    <li>
    Can the perfume be layered with other scents?
    </li>
    <li>
    Want to know our full returns policies? Here you go.
    </li>
    <li>
    Want more info about shipping, materials or care instructions? Here!
    </li>
  </ul>
    `,
  },
];

interface Props {
  panelClassName?: string;
  data?: typeof DEMO_DATA;
}

const AccordionInfo: FC<Props> = ({
  panelClassName = "p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6",
  data = DEMO_DATA,
}) => {
  return (
    <div className="w-full rounded-2xl space-y-2.5">
      {/* ============ */}
      {data.map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 2}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}

      {/* ============ */}
    </div>
  );
};

export default AccordionInfo;
