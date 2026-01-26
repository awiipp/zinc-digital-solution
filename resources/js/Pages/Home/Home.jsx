import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Home() {
    return (
        <AuthenticatedLayout>
            <Head title="Welcome!" />

            <main className="pb-56">
                <section className="flex flex-col items-center justify-center h-[460px] pt-[30px] w-full text-zinc-900 bg-white">
                    <div className="relative mb-3">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-3 translate-y-3"></div>
                        <div className="relative text-8xl font-bold bg-white border-4 p-4 border-zinc-900">
                            Zn
                        </div>
                    </div>
                    <h1 className="mt-5 text-6xl font-bold">
                        Zinc Creative Studio
                    </h1>
                    <p className="text-xl">
                        Creative Solutions for Every Experience #CreateWithZinc
                    </p>
                    <div className="flex gap-12 mt-5">
                        <div className="relative group">
                            <div className="absolute group-hover:rotate-2 group inset-0 bg-white border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                            <Link
                                href={route("products.index")}
                                className="relative z-10 block text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0"
                            >
                                Products
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link
                                href={route("articles.index")}
                                className="relative z-10 block text-lg font-bold px-5 py-2 bg-white border-[3px] border-zinc-900 transition rotate-2 group-hover:rotate-0"
                            >
                                Articles
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="px-20 pt-20 h-[400px] gap-10 bg-white">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-1 bg-zinc-900"></div>
                        <h2 className="text-4xl font-bold text-zinc-900">
                            Foreword
                        </h2>
                    </div>
                    <div className="relative w-[85%] mx-auto">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-3 translate-y-3 z-0 rotate-2"></div>
                        <div className="relative z-10 border-4 border-zinc-900 px-10 py-10 text-[22px] bg-white -rotate-1">
                            <div className="flex gap-3 rotate-1">
                                <span className="text-4xl">❛❛</span>
                                <div>
                                    <span className="font-semibold">
                                        Welcome to Zinc Creative Studio
                                    </span>
                                    , a creative brand focused on designing and
                                    producing high-quality creative products for
                                    brands and events. We combine creativity,
                                    strategy, and craftsmanship to deliver
                                    meaningful experiences and help our clients
                                    create a strong and lasting brand presence
                                    through every project we undertake.
                                </div>
                            </div>
                            <div className="relative w-fit mt-5 group">
                                <div className="absolute group-hover:rotate-2 group inset-0 bg-white border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                                <Link
                                    href={route("about-us")}
                                    className="relative z-10 block w-fit text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0"
                                >
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
