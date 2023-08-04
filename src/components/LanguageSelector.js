import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { IconContext } from "react-icons";
import { RiTranslate2, RiArrowDropDownLine } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";

const LanguageSelector = () => {
  const { locales } = useRouter();

  return (
    <Menu>
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
        <Menu.Items className="gradient flex flex-col p-2 absolute left-0 mt-2 rounded-lg min-w-[10rem] shadow-md shadow-neutral-700/20">
          {locales.map((l) => (
            <Menu.Item key={l}>
              {({ active }) => (
                <Link
                  className={`${
                    active ? "bg-primary-100" : ""
                  } p-4 inline-block rounded-lg transition`}
                  href="/"
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
  );
};

export default LanguageSelector;
