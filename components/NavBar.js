import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { styles } from "@/styles";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTranslation } from "next-i18next";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function NavBar() {
  const window = useWindowSize();
  const { locales } = useRouter();
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation("common");
  const nav = t("nav", { returnObjects: true });

  return (
    <div className="gradient shadow-[0_8px_8px_-8px_#4D323910] sticky top-0">
      <div className={`${styles.innerWidth} flex py-6 justify-between`}>
        <Image
          src={"./assets/logo.svg"}
          alt="Logo"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-8 md:h-10"
        />
        {/* menu button */}
        <button
          className="z-10 text-2xl md:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="sr-only">Menu</span>
          {isOpen ? (
            <i className="uil uil-multiply"></i>
          ) : (
            <i className="uil uil-bars"></i>
          )}
        </button>
        {/* menu responsive */}
        {(isOpen || window.width > 768) && (
          <div className="gradient md:bg-none w-2/3 md:w-auto h-screen md:h-auto md:grid absolute md:static right-0 top-0 py-16 px-8 md:p-0">
            <ul className="flex flex-col md:flex-row md:items-center gap-8 md:gap-4">
              <Menu as="li" className="relative list-none">
                <Menu.Button className="px-1">
                  <div className="flex gap-2 items-center">
                    <span className="sr-only">Choose language</span>
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_558_2203)">
                        <path
                          d="M9.53118 11.9998H15.2704M9.53118 11.9998L8.00078 15.1998M9.53118 11.9998L11.8234 7.207C12.0081 6.82084 12.1005 6.62772 12.2269 6.56668C12.3367 6.51364 12.4649 6.51364 12.5747 6.56668C12.7011 6.62772 12.7934 6.82084 12.9781 7.207L15.2704 11.9998M15.2704 11.9998L16.8008 15.1998M0.800781 2.3998H5.60078M5.60078 2.3998H8.40078M5.60078 2.3998V0.799805M8.40078 2.3998H10.4008M8.40078 2.3998C8.0039 4.76564 7.08285 6.90876 5.73322 8.70732M5.73322 8.70732C6.2109 9.07348 6.71076 9.37964 7.20078 9.5998M5.73322 8.70732C4.6512 7.87804 3.68299 6.74108 3.20078 5.5998M5.73322 8.70732C4.44947 10.4181 2.77793 11.8172 0.800781 12.7998"
                          stroke="#49373B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_558_2203">
                          <rect width="18" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 9 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_558_2205)">
                        <path
                          d="M4.26958 5.11127C4.5299 5.37159 4.95265 5.37159 5.21297 5.11127L8.545 1.77924C8.80531 1.51893 8.80531 1.09618 8.545 0.835861C8.28468 0.575546 7.86193 0.575546 7.60162 0.835861L4.74023 3.69724L1.87885 0.837944C1.61854 0.577629 1.19579 0.577629 0.935471 0.837944C0.675156 1.09826 0.675156 1.52101 0.935471 1.78132L4.2675 5.11336L4.26958 5.11127Z"
                          fill="#49373B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_558_2205">
                          <rect
                            width="9"
                            height="5"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="gradient flex flex-col gap-2 p-2 absolute left-0 mt-1 rounded-lg min-w-[10rem] shadow-md shadow-neutral-700/20">
                    {locales.map((l) => (
                      <Menu.Item key={l}>
                        {({ active }) => (
                          <Link
                            className={`${
                              active && "bg-primary-100/50"
                            } p-4 inline-block rounded-lg`}
                            href={"/"}
                            locale={l}
                          >
                            {l}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
              {Object.keys(nav).map((section) => (
                <li key={section}>
                  <Link href={`#${section}`} scroll={false}>
                    {nav[section]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
