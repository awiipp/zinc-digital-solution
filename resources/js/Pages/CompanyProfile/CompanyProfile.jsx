import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import t from "@/utils/t";

export default function CompanyProfile() {
    return (
        <AuthenticatedLayout>
            <Head title="Company Profile" />

            <main className="min-h-screen bg-zinc-50 mt-14">
                <div className="text-5xl font-bold flex gap-3 px-20">
                    <div className="-rotate-3">{t("profile.company")}</div>
                    <div className="rotate-3">{t("profile.profile")}</div>
                    <div className="-rotate-3">&</div>
                    <div className="-rotate-3">{t("profile.experience")}</div>
                </div>

                <div className="px-20 pt-14 pb-32">
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                {t("profile.company_profile")}
                            </h2>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 rotate-1 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-900 p-8 rotate-1 hover:rotate-0 transition-all">
                                <p className="text-lg leading-relaxed text-zinc-700">
                                    {t("profile.profile.body")}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                {t("profile.our_experience")}
                            </h2>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2 -rotate-1"></div>
                            <div className="relative bg-white border-4 border-zinc-900 p-8 -rotate-1 hover:rotate-0 transition-all">
                                <p className="text-lg leading-relaxed text-zinc-700">
                                    {t("profile.experience.body")}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                {t("profile.reason")}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 rotate-1"></div>
                                <div className="relative h-full bg-white border-4 border-zinc-900 p-6 rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            01
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            {t("profile.reason.1")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 -rotate-1"></div>
                                <div className="relative h-full bg-white border-4 border-zinc-900 p-6 -rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            02
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            {t("profile.reason.2")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 rotate-1"></div>
                                <div className="relative h-full bg-white border-4 border-zinc-900 p-6 rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            03
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            {t("profile.reason.3")}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 -rotate-1"></div>
                                <div className="relative h-full bg-white border-4 border-zinc-900 p-6 -rotate-1 hover:rotate-0 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                            04
                                        </div>
                                        <p className="text-lg text-zinc-700">
                                            {t("profile.reason.4")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative w-5/6 mx-auto">
                        <div className="absolute inset-0 border-4 border-zinc-800 translate-x-3 translate-y-3"></div>
                        <div className="relative bg-zinc-900 border-4 border-zinc-900 p-12 text-center rotate-3 hover:rotate-0 transition-all">
                            <div className="max-w-2xl mx-auto">
                                <p className="text-4xl font-bold text-white mb-4">
                                    {t("profile.cta")}
                                </p>
                                <p className="text-xl text-zinc-300 mb-8">
                                    {t("profile.cta.body")}
                                </p>
                                <Link
                                    href={route("products.index")}
                                    className="inline-block bg-white text-zinc-900 px-5 py-2 font-bold text-lg border-4 border-white hover:-translate-y-1 transition-all"
                                >
                                    {t("profile.cta.button")} →
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
