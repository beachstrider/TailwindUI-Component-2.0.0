/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          cyan: colors.cyan,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  PlusIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]
const features = [
  {
    name: 'List view',
    description:
      'Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.',
    icon: ViewListIcon,
  },
  {
    name: 'Boards',
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
    icon: ViewBoardsIcon,
  },
  {
    name: 'Calendar',
    description:
      'Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.',
    icon: CalendarIcon,
  },
  {
    name: 'Teams',
    description:
      'Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.',
    icon: UsersIcon,
  },
]
const checklist = [
  'Unlimited projects',
  'No per user fees',
  'Unlimited storage',
  '24/7 support',
  'Cancel any time',
  '14 days free',
]
const logos = [
  { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-cyan-900.svg' },
  { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-cyan-900.svg' },
  { name: 'Level', url: 'https://tailwindui.com/img/logos/level-logo-cyan-900.svg' },
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 3,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50">
        <Popover className="relative">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                            )}
                          >
                            <span>Solutions</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                            >
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {solutions.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-cyan-600" aria-hidden="true" />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                  {callsToAction.map((item) => (
                                    <div key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                      >
                                        <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">{item.name}</span>
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Pricing
                    </a>
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Docs
                    </a>

                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                            )}
                          >
                            <span>More</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                            >
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                  {resources.map((item) => (
                                    <a
                                      key={item.name}
                                      href="#"
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-cyan-600" aria-hidden="true" />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                  <div>
                                    <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                      Recent Posts
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                      {recentPosts.map((post) => (
                                        <li key={post.id} className="text-base truncate">
                                          <a href={post.href} className="font-medium text-gray-900 hover:text-gray-800">
                                            {post.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                                      View all posts <span aria-hidden="true">&rarr;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                  <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                    <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      Sign in
                    </a>
                    <a
                      href="#"
                      className="whitespace-nowrap bg-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                            alt="Workflow"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-cyan-600" aria-hidden="true" />
                              <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Pricing
                        </a>

                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Docs
                        </a>

                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Blog
                        </a>

                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                          Contact Sales
                        </a>
                        {resources.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div>
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700"
                        >
                          Sign up
                        </a>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Existing customer?{' '}
                          <a href="#" className="text-cyan-600 hover:text-cyan-500">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* Header section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-base font-semibold text-cyan-600 uppercase tracking-wide">Pricing</h1>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Take control of your team.
            </p>
            <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
              Start building for free, then add a site plan to go live. Account plans unlock additional features.
            </p>
          </div>
        </div>
      </div>

      {/* Split brand panel */}
      <div className="relative bg-white">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:px-8">
          <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-base font-semibold tracking-wide text-cyan-600 uppercase">Full-featured</h2>
              <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Everything you need to talk with your customers
              </p>
              <dl className="mt-12 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 to-green-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8">
            <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
              <div>
                <h2 className="sr-only">Price</h2>
                <p className="relative grid grid-cols-2">
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold text-white tracking-tight">$99</span>
                    <span className="mt-2 text-base font-medium text-cyan-100">Setup fee</span>
                    <span className="sr-only">plus</span>
                  </span>
                  <span
                    className="pointer-events-none absolute h-12 w-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <PlusIcon className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-extrabold text-white tracking-tight">$4</span>
                      <span className="mt-2 text-base font-medium text-cyan-100">Per month</span>
                    </span>
                  </span>
                </p>
              </div>
              <ul className="rounded overflow-hidden grid gap-px sm:grid-cols-2">
                {checklist.map((item) => (
                  <li key={item} className="bg-cyan-700 bg-opacity-50 py-4 px-4 flex items-center text-base text-white">
                    <CheckIcon className="h-6 w-6 text-cyan-200" aria-hidden="true" />
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="w-full bg-white border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-lg leading-6 font-medium text-cyan-700 hover:bg-cyan-50 md:px-10"
              >
                Get started today
              </a>
              <a href="#" className="block text-center text-base font-medium text-cyan-100 hover:text-white">
                Try Workflow Lite for free
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo cloud */}
      <div className="bg-cyan-100 bg-opacity-25">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 className="max-w-md mx-auto text-3xl font-extrabold text-cyan-900 text-center lg:max-w-xl lg:text-left">
              The world's most innovative companies use Workflow
            </h2>
            <div className="mt-8 flow-root lg:mt-0 self-center">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
                  >
                    <img className="h-12" src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {faqs.map((item) => (
              <div key={item.id}>
                <dt className="text-lg leading-6 font-medium text-gray-900">{item.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gradient-to-r from-cyan-600 to-green-400">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block text-cyan-900">Start using Workflow today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-cyan-100">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
            href="#"
            className="mt-8 w-full bg-cyan-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-cyan-700 hover:bg-cyan-100 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>

      {/* Footer 4-column with newsletter and localization dark */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="sr-only">Footer</h2>
          <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-4">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 xl:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Language &amp; Currency</h3>
              <form className="mt-4 space-y-4 sm:max-w-xs">
                <fieldset className="w-full">
                  <label htmlFor="language" className="sr-only">
                    Language
                  </label>
                  <div className="relative">
                    <select
                      id="language"
                      name="language"
                      className="block w-full bg-none bg-gray-800 border border-transparent text-base text-white focus:ring-white focus:border-white sm:text-sm rounded-md"
                      defaultValue="English"
                    >
                      <option>English</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                      <option>Spanish</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                      <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="w-full">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <div className="mt-1.5 relative">
                    <select
                      id="currency"
                      name="currency"
                      className="block w-full bg-none bg-gray-800 border border-transparent text-base text-white focus:ring-white focus:border-white sm:text-sm rounded-md"
                      defaultValue="AUD"
                    >
                      <option>ARS</option>
                      <option>AUD</option>
                      <option>CAD</option>
                      <option>CHF</option>
                      <option>EUR</option>
                      <option>GBP</option>
                      <option>JPY</option>
                      <option>USD</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                      <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between xl:mt-0">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="text-base text-gray-300">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
            </div>
            <form className="sm:flex sm:max-w-md">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                autoComplete="email"
                required
                className="min-w-0 w-full bg-white border border-transparent py-2 px-4 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-gray-700 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
