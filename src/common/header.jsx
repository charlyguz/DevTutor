/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";
import Temario from './Temario';

const navigation = [
  { name: 'Cursos', href: '#' },
  { name: 'Mi Aprendizaje', href: '#' },
  { name: 'Mi Perfil', href: '#' },
]

const cursos = [
  { name: 'Python', href: '/curso/python/temario' },
  { name: 'JavaScript', href: '/curso/javascript/temario' },
  { name: 'React', href: '/curso/react/temario' },
  { name: 'Nube', href: '/curso/nube/temario' },
  { name: 'IA', href: '/curso/ia/temario' },
  { name: 'Estructuras de Datos y Algoritmos', href: '/curso/estructurasdedatosyalgoritmos/temario' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-black">
      <div className="max-w-5xl mx-auto px-10 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </Link>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              item.name === 'Cursos'
                ? <Popover className="relative group">
                    <Popover.Button className="text-base font-medium text-white hover:text-gray-300">
                      {item.name}<ChevronDownIcon className="h-5 w-5 text-white ml-2" />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 px-2 w-screen max-w-sm sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {cursos.map((curso) => (
                            <Link
                              key={curso.name}
                              to={curso.href} // Aquí estaba el error
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{curso.name}</p>
                              </div>
                            </Link>
                          ))}

                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                : <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-900 hover:bg-gray-400"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  )
}
