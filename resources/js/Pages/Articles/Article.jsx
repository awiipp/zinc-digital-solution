import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaArrowLeft } from "react-icons/fa";

export default function Article() {
    return (
        <AuthenticatedLayout>
            <Head title="Article" />

            <main className="min-h-screen">
                <div className="px-28 pt-14">
                    <div className="max-w-4xl">
                        <Link
                            href={route("articles.index")}
                            className="text-zinc-800 font-medium hover:text-zinc-600 mb-4 flex items-center gap-2"
                        >
                            <FaArrowLeft />
                            Back to Articles
                        </Link>
                        <h1 className="text-5xl font-bold mt-4">
                            Choosing the Right Merchandise for Your Event
                        </h1>
                        <div className="mt-4">
                            <span>January 20, 2026</span>
                        </div>
                    </div>
                </div>

                <div className="px-28 py-12 bg-white">
                    <div className="mx-auto">
                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                            <img
                                src="/images/product-test.jpeg"
                                alt="Article Thumbnail"
                                className="relative w-full h-[450px] object-cover border-4 border-zinc-900"
                            />
                        </div>
                    </div>
                </div>

                <article className="px-28 pb-20 bg-white">
                    <div className="mx-auto">
                        <div className="relative w-[90%] mx-auto mb-12">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                            <div className="relative bg-zinc-50 border-4 border-zinc-900 px-8 py-5 rotate-1">
                                <p className="text-lg leading-relaxed text-zinc-700">
                                    Selecting the perfect merchandise for your
                                    event can make all the difference in
                                    creating a memorable experience for
                                    attendees. Whether it's a corporate
                                    conference, product launch, or community
                                    gathering, the right promotional items help
                                    reinforce your brand and leave a lasting
                                    impression.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-10 text-lg text-zinc-700 leading-relaxed">
                            <section>
                                <p className="mb-4">
                                    Before selecting merchandise, it's crucial
                                    to understand who will be attending your
                                    event. Different demographics have different
                                    preferences and needs. A tech conference
                                    might benefit from USB drives and tech
                                    accessories, while a wellness event could
                                    focus on reusable water bottles and yoga
                                    mats.
                                </p>
                                <p>
                                    Consider factors like age range,
                                    professional background, and the event's
                                    purpose. This insight will guide you toward
                                    merchandise that attendees will actually use
                                    and appreciate, rather than items that end
                                    up forgotten.
                                </p>
                            </section>
                        </div>

                        <div className="relative mt-12">
                            <div className="absolute inset-0 bg-zinc-400 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-zinc-900 border-4 border-zinc-900 px-8 py-5 text-white rotate-1">
                                <h2 className="text-2xl font-bold mb-4">
                                    Final Thoughts
                                </h2>
                                <p className="text-zinc-300 leading-relaxed">
                                    Choosing the right merchandise is about
                                    understanding your audience, prioritizing
                                    quality, and aligning with your brand
                                    values. When done right, event merchandise
                                    becomes more than just a giveaway—it becomes
                                    a tangible connection between your brand and
                                    your attendees.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 text-center">
                            <p className="text-xl text-zinc-700 mb-6">
                                Need help choosing merchandise for your next
                                event?
                            </p>
                            <Link
                                href={route("products.index")}
                                className="relative inline-block group"
                            >
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                                <div className="relative bg-white border-4 border-zinc-900 px-8 py-4 font-bold text-lg hover:-rotate-1 transition-all">
                                    Explore Our Products →
                                </div>
                            </Link>
                        </div>
                    </div>
                </article>

                <section className="px-20 pt-16 pb-32 bg-zinc-50 border-t-4 border-zinc-900">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                Related Articles
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="#" className="relative group">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                                <div className="relative bg-white border-4 border-zinc-900 p-6 rotate-1 group-hover:rotate-0 transition-all">
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2">
                                        5 Trends in Event Merchandise for 2026
                                    </h3>
                                    <p className="text-zinc-600">
                                        Discover the latest trends shaping event
                                        merchandise this year.
                                    </p>
                                </div>
                            </Link>

                            <Link href="#" className="relative group">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                                <div className="relative bg-white border-4 border-zinc-900 p-6 -rotate-1 group-hover:rotate-0 transition-all">
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2">
                                        How to Design Eye-Catching T-Shirts
                                    </h3>
                                    <p className="text-zinc-600">
                                        Tips and tricks for creating memorable
                                        apparel designs.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
