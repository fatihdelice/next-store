"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useProperties } from "@/hooks/useProperties";

const fakeMenuData = {
    menu: {
        items: [
            {
                id: "1",
                name: "global.footer.shop",
                children: [
                    { id: "1a", category: { slug: "electronics", name: "global.footer.electronics" } },
                    { id: "1b", collection: { slug: "new-arrivals", name: "global.footer.newArrivals" } },
                    { id: "1c", page: { slug: "about-us", title: "global.footer.aboutUs" } },
                    { id: "1d", url: "https://example.com", name: "global.footer.externalLink" }
                ]
            },
            {
                id: "2",
                name: "global.footer.help",
                children: [
                    { id: "2a", page: { slug: "faq", title: "global.footer.faq" } },
                    { id: "2b", url: "https://support.example.com", name: "global.footer.support" }
                ]
            }
        ]
    }
};

export function Footer() {
    const { t } = useProperties();

    const footerLinks = fakeMenuData;

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-neutral-300 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid grid-cols-3 gap-8 py-16">
                    {footerLinks.menu?.items?.map((item) => {
                        return (
                            <div key={item.id}>
                                <h3 className="text-sm font-semibold text-neutral-900">{t(item.name)}</h3>
                                <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
                                    {item.children?.map((child) => {
                                        if (child.category) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={`/categories/${child.category.slug}`}>
                                                        {t(child.category.name)}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                        if (child.collection) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={`/collections/${child.collection.slug}`}>
                                                        {t(child.collection.name)}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                        if (child.page) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={`/pages/${child.page.slug}`}>
                                                        {t(child.page.title)}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                        if (child.url) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={child.url}>{t(child.name)}</Link>
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <LanguageSwitcher />

                <div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
                    <p className="text-sm text-neutral-500">Copyright &copy; {currentYear} Next Store, Inc.</p>
                    <p className="flex gap-1 text-sm text-neutral-500">
                        Powered by{" "}
                        <Link target={"_blank"} href={"https://delice.dev/"}>
                            Fatih Delice
                        </Link>{" "}
                        <Link href={"https://github.com/fatihdelice/next-store"} target={"_blank"} className={"opacity-30"}>
                            <Image alt="Fatih Delice github repository" height={20} width={20} src={"/staticimage/github-mark.svg"} />
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
