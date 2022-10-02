import { Menu, Transition } from '@headlessui/react';
import { Fragment, JSX } from 'preact';
import { DropdownLink } from '../../types/common';

export interface DropdownProps {
  menuButton?: JSX.Element;
  menuLinks?: DropdownLink[];
}

export const Dropdown = ({ menuButton, menuLinks }: DropdownProps) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button>{menuButton || 'Options'}</Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-base-100 shadow-lg focus:outline-none'>
          {menuLinks?.map(link => (
            <div className='px-1 py-1 '>
              <Menu.Item
                as='a'
                key={link.href}
                href={link.href}
                className={
                  'hover:bg-highlight group flex w-full items-center rounded-md px-2 py-2 text-sm'
                }
              >
                {link.label}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
