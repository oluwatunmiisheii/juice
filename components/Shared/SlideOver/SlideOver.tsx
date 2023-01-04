import { Fragment, ReactNode, createContext, useContext, useMemo, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const SlideOverContext = createContext({ open: false, setOpen: (value: boolean) => {} });

interface SlideOverProps {
  children: ReactNode;
  open: boolean;
  setOpen: (val: boolean) => void;
}

const SlideOver = ({ children, open, setOpen }: SlideOverProps) => {
  const router = useRouter();
  const value = useMemo(() => ({ open, setOpen }), [open, setOpen]);

  useEffect(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return (
    <SlideOverContext.Provider value={value}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={setOpen}>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden w-full">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-full">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">{children}</div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </SlideOverContext.Provider>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  return <div className="p-8">{children}</div>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="flex-1 overflow-y-auto px-8 pt-10 pb-6">{children}</div>;
};

const Close = ({ type }: { type: "back" | "close" }) => {
  const { setOpen } = useSlideOverContext();

  return (
    <button
      type="button"
      className="bg-white rounded-md text-gray-800 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onClick={() => setOpen(false)}
    >
      <span className="sr-only">Close panel</span>
      {type === "back" ? (
        <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

SlideOver.Header = Header;
SlideOver.Body = Body;
SlideOver.Close = Close;

export { SlideOver };

export default function useSlideOverContext() {
  const context = useContext(SlideOverContext);
  if (context === undefined) {
    throw new Error("useSlideOverContext must be used within a SlideOverContext");
  }
  return context;
}
