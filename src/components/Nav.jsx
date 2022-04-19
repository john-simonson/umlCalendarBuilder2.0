/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {getAuth, signOut} from 'firebase/auth'
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav({navItems}) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  getAuth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  });
  return (
    <Disclosure as="nav" className="bg-indigo-400">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navItems.map((item, i) => (
                    <Link
                      to={item.to}
                      className={`rounded-md px-3 py-2 text-sm text-white hover:bg-indigo-500`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                </div>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {(!isLoggedIn && window.navigator.onLine) && (
                  <Link
                  className='text-white border border-solid border-white bg-indigo-400 hover:bg-indigo-500 hidden rounded-md px-3 py-2 font-bold transition-all sm:block'
                  to="/login"
                  >Login</Link>
                )}
                {/* Profile dropdown */}
                {(isLoggedIn && window.navigator.onLine) && (
                  <Link
                  className='text-white border border-solid border-white bg-indigo-400 hover:bg-indigo-500 hidden rounded-md px-3 py-2 font-bold transition-all sm:block'
                  to="/"
                  onClick={() => {
                    const auth = getAuth();
                    signOut(auth).then(
                      function () {
                        // Sign-out successful.
                      },
                      function (error) {
                        // An error happened.
                      }
                    );
                  }}
                  >Sign Out</Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  to={item.to}
                  className={classNames('bg-indigo-400 hover:bg-indigo-500 text-white block px-3 py-2 rounded-md text-base font-medium')}
                >
                  {item.name}
                </Link>
              ))}
             {!isLoggedIn && (
               <Link
               to="/Login"
               className={classNames('bg-indigo-400 hover:bg-indigo-500 text-white block px-3 py-2 rounded-md text-base font-medium')}
             >
               Login
             </Link>
             )}
             {isLoggedIn && (
                  <Link
                  className={classNames('bg-indigo-400 hover:bg-indigo-500 text-white block px-3 py-2 rounded-md text-base font-medium')}
                  to="/"
                  onClick={() => {
                    const auth = getAuth();
                    signOut(auth).then(
                      function () {
                        // Sign-out successful.
                      },
                      function (error) {
                        // An error happened.
                      }
                    );
                  }}
                  >Sign Out</Link>
                )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}