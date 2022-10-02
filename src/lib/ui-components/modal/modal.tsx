import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'preact';
import clsx from 'clsx';

export interface ModalProps {
  title?: string;
  isOpen: boolean;
  children?: JSX.Element;
  footer?: JSX.Element;
  titleClassName?: string;
}

export function Modal({
  isOpen,
  title = '',
  children,
  footer,
  titleClassName
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={() => false}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-base-100 py-8 px-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className={clsx(
                    'text-lg font-medium leading-6 text-gray-900',
                    titleClassName
                  )}
                >
                  {title}
                </Dialog.Title>
                {children}
                {footer}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
