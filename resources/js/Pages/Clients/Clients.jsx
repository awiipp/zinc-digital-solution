import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import t from "@/utils/t";

export default function Clients({ reviews, clients }) {
    console.log(reviews);
    console.log(clients);

    return (
        <AuthenticatedLayout>
            <Head title="Clients" />

            <main className="min-h-screen bg-zinc-50">
                <div className="relative w-full px-20 pt-14 bg-zinc-900 text-white pb-14 overflow-hidden">
                    <h1 className="text-5xl font-bold mb-3">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Trusted
                        </span>{" "}
                        By
                    </h1>
                    <p className="text-xl text-zinc-300 w-[30rem]">
                        {t("clients.desc")}
                    </p>
                    <img
                        src="/images/client.png"
                        className="absolute w-[23rem] right-[5rem] -top-[2rem]"
                    />
                </div>

                {clients.length === 0 && reviews.length === 0 ? (
                    <div className="relative max-w-2xl mx-auto mt-20 mb-20">
                        <div className="absolute bg-zinc-400 inset-0 translate-x-2 translate-y-2"></div>
                        <div className="relative bg-white border-4 border-zinc-400 p-12 text-center">
                            <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                                {t("clients.none")}
                            </h2>
                            <p className="text-lg text-zinc-400">
                                {t("clients.none.desc")}
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <section className="px-20 mt-10 pb-10 bg-white">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-1 bg-zinc-900"></div>
                                <h2 className="text-3xl font-bold text-zinc-900">
                                    {t("clients.clients")}
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {clients.map((client, index) => (
                                    <div key={index} className="relative group">
                                        <div className="absolute inset-0 bg-zinc-900 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                                        <div className="relative bg-white border-4 border-zinc-900 p-6 h-32 flex items-center justify-center text-center hover:rotate-2 transition-all">
                                            <p className="font-bold text-zinc-900">
                                                {client}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="px-20 pt-16 pb-20">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-1 bg-zinc-900"></div>
                                <h2 className="text-3xl font-bold text-zinc-900">
                                    {t("clients.review")}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {reviews.map((review, index) => (
                                    <div
                                        key={review.id}
                                        className="relative h-fit"
                                    >
                                        <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                                        <div
                                            className={`relative h-full bg-white border-4 border-zinc-900 p-6 hover:rotate-0 transition-all ${
                                                index % 2 === 0
                                                    ? "rotate-1"
                                                    : "-rotate-1"
                                            }`}
                                        >
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(review.rating)].map(
                                                    (_, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-zinc-900 text-xl"
                                                        >
                                                            ★
                                                        </span>
                                                    ),
                                                )}
                                            </div>

                                            <p className="text-zinc-700 mb-6 leading-relaxed">
                                                "{review.message}"
                                            </p>

                                            <div className="border-t-2 border-zinc-900 pt-4">
                                                <p className="font-bold text-zinc-900">
                                                    {review.name}
                                                </p>
                                                <p className="text-sm text-zinc-600">
                                                    {review.role ?? review.role}
                                                </p>
                                                <p className="text-sm text-zinc-500 mt-1">
                                                    {review.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                <section className="px-20 pb-32">
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                        <div className="relative bg-white border-4 border-zinc-900 p-12 text-center">
                            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                                {t("clients.cta")}
                            </h2>
                            <p className="text-lg text-zinc-600 mb-8">
                                {t("clients.cta.desc")}
                            </p>
                            <Link
                                href={route("clients.create")}
                                className="inline-block relative group"
                            >
                                <div className="absolute inset-0 bg-white border-[3px] border-zinc-900 translate-x-2 translate-y-1 group-hover:translate-x-1 group-hover:translate-y-0.5 transition-all"></div>
                                <div className="relative bg-zinc-900 text-white font-bold px-8 py-3 text-lg border-[3px] border-zinc-900">
                                    {t("clients.cta.button")}
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
