"use client";

import React from 'react'
import { useProperties } from '@/hooks/useProperties';

export default function Header() {
    const { t } = useProperties();
    return (
        <div className="mx-auto max-w-7xl px-3 sm:px-8">
            <div className="flex h-16 justify-between gap-4 md:gap-8">
                <div className="flex items-center font-bold"><a aria-label="homepage" href="/">NextStore</a></div>
                <nav className="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
                    <ul className="hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
                        <li className="inline-flex"><a className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700" href="/products">{t('global.header.allProducts')}</a></li>
                        <li className="inline-flex"><a className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700" href="/categories/apparel">{t('global.header.apparel')}</a></li>
                        <li className="inline-flex"><a className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700" href="/categories/accessories">{t('global.header.accessories')}</a></li>
                    </ul>
                    <div className="ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
                        <div className="hidden lg:flex">
                            <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')" className="group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-80">
                                <label className="w-full"><span className="sr-only">search for products</span><input placeholder={t('global.header.searchPlaceholder')} autoComplete="on" required={true} className="h-10 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black" type="text" name="search"/></label>
                                <div className="absolute inset-y-0 right-0">
                                    <button type="submit" className="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80">
                                        <span className="sr-only">search</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search h-5 w-5" aria-hidden="true">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <a className="h-6 w-6 flex-shrink-0" href="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user h-6 w-6 shrink-0" aria-hidden="true">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span className="sr-only">Log in</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a className="relative flex items-center" data-testid="CartNavItem" href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-6 w-6 shrink-0" aria-hidden="true">
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                <path d="M3 6h18"></path>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <span className="sr-only">0 items in cart</span>
                        </a>
                    </div>
                    <button className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6 shrink-0" aria-hidden="true">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    )
}
