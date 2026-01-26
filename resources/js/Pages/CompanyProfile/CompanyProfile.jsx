import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function CompanyProfile() {
    return (
        <AuthenticatedLayout>
            <Head title="Company Profile" />

            <main className="min-h-screen bg-zinc-50 mt-14">
                <div className="text-5xl font-bold flex gap-3 px-20">
                    <div className="-rotate-3">Company</div>
                    <div className="rotate-3">Profile</div>
                    <div className="-rotate-3">&</div>
                    <div className="-rotate-3">Experience</div>
                </div>

                <div className="px-20 pt-14 pb-32">
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                Company Profile
                            </h2>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 rotate-1 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-900 p-8 rotate-1 hover:rotate-0 transition-all">
                                <p className="text-lg leading-relaxed text-zinc-700">
                                    Zinc Creative Studio is a creative brand
                                    specializing in custom merchandise and event
                                    branding solutions. We focus on creating
                                    high-quality products that help brands
                                    communicate their identity and deliver
                                    memorable experiences.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                Our Experience
                            </h2>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2 -rotate-1"></div>
                            <div className="relative bg-white border-4 border-zinc-900 p-8 -rotate-1 hover:rotate-0 transition-all">
                                <p className="text-lg leading-relaxed text-zinc-700">
                                    Since 2023, Zinc Creative Studio has
                                    collaborated with various clients from
                                    corporate companies, communities, and event
                                    organizers. Our experience includes
                                    supporting seminars, exhibitions, product
                                    launches, and promotional events with
                                    creative merchandise and branding materials.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                Why Choose Us
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 rotate-1"></div>
                                <div className="relative bg-white border-4 border-zinc-900 p-6 rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            01
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            High-quality creative products with
                                            attention to detail
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 -rotate-1"></div>
                                <div className="relative bg-white border-4 border-zinc-900 p-6 -rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            02
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            Experienced in handling events and
                                            brand activations
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 rotate-1"></div>
                                <div className="relative bg-white border-4 border-zinc-900 p-6 rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            03
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            Creative and professional team
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 -rotate-1"></div>
                                <div className="relative bg-white border-4 border-zinc-900 p-6 -rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            04
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            Flexible solutions tailored to
                                            client needs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative w-5/6 mx-auto">
                        <div className="absolute inset-0 border-4 border-zinc-800 translate-x-5 translate-y-3"></div>
                        <div className="relative bg-zinc-900 border-4 border-zinc-900 p-12 text-center rotate-3 hover:rotate-0 transition-all">
                            <div className="max-w-2xl mx-auto">
                                <p className="text-4xl font-bold text-white mb-4">
                                    Oops, a bit tilted...
                                </p>
                                <p className="text-xl text-zinc-300 mb-8">
                                    Let's straighten things out and check our
                                    products!
                                </p>
                                <Link
                                    href={route("products.index")}
                                    className="inline-block bg-white text-zinc-900 px-5 py-2 font-bold text-lg border-4 border-white hover:-translate-y-1 transition-all"
                                >
                                    View Our Products →
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
