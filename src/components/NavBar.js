import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { styles } from "@/styles";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { AnimatePresence, motion as m } from "framer-motion";
import { IconContext } from "react-icons";
import { CgMenu, CgClose } from "react-icons/cg";
import { RiTranslate2, RiArrowDropDownLine } from "react-icons/ri";
import useOnClickOutside from "use-onclickoutside";

export default function NavBar({ t }) {
  const window = useWindowSize();
  const { locales } = useRouter();
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setOpen(!isOpen);
  useOnClickOutside(menuRef, () => setOpen(false));
  const nav = t("nav", { returnObjects: true });

  return (
    <div className="gradient shadow-[0_8px_8px_-8px_#4D323910] sticky top-0 overflow-x-clip z-10">
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
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="sr-only">Open menu</span>
          <CgMenu size={24} />
        </button>
        {/* menu responsive */}
        <AnimatePresence>
          {(isOpen || window.width >= 768) && (
            <>
              {/* blur background */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="md:hidden min-h-screen fixed inset-0 bg-neutral-700/50 backdrop-blur-[2px]"
              />
              <m.nav
                // deshabilito la animación inicial en pantallas md
                // posicion inicial en pantallas md => x=0, en sm => x=100%
                initial={{ x: window.width >= 768 ? 0 : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                ref={menuRef}
                className="gradient md:bg-none w-2/3 md:w-auto h-screen md:h-auto grid content-start md:place-content-center absolute md:static right-0 top-0 py-6 px-8 gap-12 md:p-0"
              >
                <button className="md:hidden place-self-end" onClick={toggleMenu}>
                  <span className="sr-only">Close menu</span>
                  <CgClose size={24} />
                </button>
                <ul className="flex flex-col md:flex-row md:items-center gap-8 md:gap-4">
                  <Menu as="li" className="relative">
                    <Menu.Button className="px-1 flex gap-1 items-center">
                      <span className="sr-only">Choose language</span>
                      <IconContext.Provider value={{ size: "20px" }}>
                        <RiTranslate2 />
                        <RiArrowDropDownLine />
                      </IconContext.Provider>
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
                      <Menu.Items className="gradient flex flex-col gap-2 p-2 absolute left-0 mt-2 rounded-lg min-w-[10rem] shadow-md shadow-neutral-700/20">
                        {locales.map((l) => (
                          <Menu.Item key={l}>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active && "bg-primary-100"
                                } p-4 inline-block rounded-lg transition`}
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
              </m.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
