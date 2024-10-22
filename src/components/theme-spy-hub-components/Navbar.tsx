import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <header className="bg-white my-5">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">

                <a className="flex  items-center justify-center text-black" href="/">
                    <img className="h-16 w-16 rounded-full" src="/spy.png" alt="Logo" />

                    <div className="text-center">
                        <span className="text-xl">SpyHub</span>
                        <p className="text-sm text-gray-500">No. 1 spy website</p>
                    </div>
                </a>



                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-black transition hover:text-red-500/75" href="/"> Home</a>
                            </li>

                            <li>
                                <a className="text-black transition hover:text-red-500/75" href="#"> Spy Camera </a>
                            </li>

                            <li>
                                <a className="text-black transition hover:text-red-500/75" href="#"> CCTV Camera </a>
                            </li>

                            <li>
                                <a className="text-black transition hover:text-red-500/75" href="#"> GPS Device </a>
                            </li>

                            <li>
                                <a className="text-black transition hover:text-red-500/75" href="/contact"> Contact</a>
                            </li>

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </Link>
                            <Link href="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                    <path d="M3 6h18" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                            </Link>

                            <Link href="/user-login">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round">
                                    <path d="M18 20a6 6 0 0 0-12 0" />
                                    <circle cx="12" cy="10" r="4" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </Link>
                        </div>

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
