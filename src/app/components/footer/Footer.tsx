import Link from "next/link";
import Image from "next/image";

const fakeMenuData = {
    menu: {
        items: [
            {
                id: "1",
                name: "Shop",
                children: [
                    { id: "1a", category: { slug: "electronics", name: "Electronics" } },
                    { id: "1b", collection: { slug: "new-arrivals", name: "New Arrivals" } },
                    { id: "1c", page: { slug: "about-us", title: "About Us" } },
                    { id: "1d", url: "https://example.com", name: "External Link" }
                ]
            },
            {
                id: "2",
                name: "Help",
                children: [
                    { id: "2a", page: { slug: "faq", title: "FAQ" } },
                    { id: "2b", url: "https://support.example.com", name: "Support" }
                ]
            }
        ]
    }
};

const fakeChannelsData = {
    channels: [
        { id: "1", name: "USD" },
        { id: "2", name: "EUR" },
        { id: "3", name: "GBP" }
    ]
};

export async function Footer() {
    const footerLinks = fakeMenuData;
    const channels = fakeChannelsData;

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-neutral-300 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid grid-cols-3 gap-8 py-16">
                    {footerLinks.menu?.items?.map((item) => {
                        return (
                            <div key={item.id}>
                                <h3 className="text-sm font-semibold text-neutral-900">{item.name}</h3>
                                <ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
                                    {item.children?.map((child) => {
                                        if (child.category) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={`/categories/${child.category.slug}`}>
                                                        {child.category.name}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                        if (child.collection) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={`/collections/${child.collection.slug}`}>
                                                        {child.collection.name}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                        if (child.page) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={`/pages/${child.page.slug}`}>
                                                        {child.page.title}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                        if (child.url) {
                                            return (
                                                <li key={child.id} className="text-sm">
                                                    <Link href={child.url}>{child.name}</Link>
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

                {channels?.channels && (
                    <div className="mb-4 text-neutral-500">
                        <label>
                            <span className="text-sm">Change currency:</span>
                            <select className="ml-2 text-sm">
                                {channels.channels.map((channel) => (
                                    <option key={channel.id} value={channel.name}>
                                        {channel.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                )}

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
