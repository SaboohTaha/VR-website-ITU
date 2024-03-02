import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Team', href: '/team' },
    { name: 'Publications', href: '/publications' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/aboutus' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-blue-600 sticky lg:px-20 top-0 z-50 w-screen">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-[100rem] px-2 lg:px-6 xl:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                <Disclosure.Button className="relative inline-flex transition duration-300 items-center justify-center rounded-md p-2 text-blue-200 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:justify-start">
                                {/* VR Lab logo */}
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="/logo.png"
                                        alt="VR Lab logo"
                                    />
                                    <p className='text-blue-100 mx-8 text-md font-semibold'>ITU Virtuality Labs</p>
                                </div>

                                {/* div for large screen navbar */}
                                <div className="hidden lg:absolute lg:right-0 lg:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => {
                                            return (item.hasOwnProperty('subitems')) ?
                                                <Menu as='div' key={item.name} className="relative">
                                                    <Menu.Button className={'text-blue-200 transition duration-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}>
                                                        <div>
                                                            {item.name}
                                                            <ChevronDownIcon className='-mr-1 ml-2 h-4 w-4 inline' aria-hidden='true' />
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {item.subitems.map((subitem) => (
                                                                    <Menu.Item key={subitem.name}>
                                                                        {({ active }) => (
                                                                            <a
                                                                                href={subitem.href}
                                                                                className={classNames(active ? 'bg-blue-100' : '', 'block px-4 py-2 text-sm text-start font-normal text-blue-700')}
                                                                            >
                                                                                {subitem.name}
                                                                            </a>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))
                                                                }
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu.Button>
                                                </Menu>
                                                : <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={'text-blue-200 transition duration-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-blue-800 p-1 text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6 bg-blue-800 text-blue-400" aria-hidden="true" />
                                </button>

                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-blue-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/editprofile"
                                                        className={classNames(active ? 'bg-blue-100' : '', 'block px-4 py-2 text-sm text-blue-700')}
                                                    >
                                                        Edit Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-blue-100' : '', 'block px-4 py-2 text-sm text-blue-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-blue-100' : '', 'block px-4 py-2 text-sm text-blue-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div> */}
                        </div>
                    </div>

                    {/* div for mobile screen navbar */}
                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => {
                                return <Disclosure key={item.name}>
                                    <Disclosure.Button
                                        as={item.hasOwnProperty('subitems') ? "div" : "a"}
                                        href={item.href}
                                        className={'text-blue-200 transition duration-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium cursor-pointer'}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                        {item.subitems !== undefined &&
                                            <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5 mt-1 inline float-right' aria-hidden='true' />
                                        }
                                    </Disclosure.Button>
                                    {item.subitems !== undefined &&
                                        <Disclosure.Panel>
                                            <Disclosure as='div'>
                                                {item.subitems.map((subitem) => (
                                                    <Disclosure.Button
                                                        key={subitem.name}
                                                        as={subitem.hasOwnProperty('subitems') ? "div" : "a"}
                                                        href={subitem.href}
                                                        className='text-blue-200 transition duration-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                                    >
                                                        {subitem.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure>
                                        </Disclosure.Panel>
                                    }
                                </Disclosure>
                            })}
                        </div >
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}

