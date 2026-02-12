import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import t from "@/utils/t";

export default function Home() {
    return (
        <AuthenticatedLayout>
            <Head title="Welcome!" />

            <main className="pb-32 md:pb-56">
                <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen w-full text-zinc-900 bg-white px-4 py-10 md:py-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev/svgjs"
                        preserveAspectRatio="xMidYMid slice"
                        viewBox="0 0 1440 560"
                        className="w-full h-full absolute inset-0 opacity-100 hidden sm:block"
                    >
                        <g mask='url("#SvgjsMask1013")' fill="none">
                            <path
                                d="M1127.82 312.51a53.09 53.09 0 1 0 35.96 99.9z"
                                fill="rgba(159, 159, 169, 1)"
                            ></path>
                            <path
                                d="M286.89 273.33a20.33 20.33 0 1 0 38.16 14.04z"
                                stroke="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M314.24 130.11L346.17 130.11L346.17 162.04L314.24 162.04z"
                                stroke="rgba(39, 39, 42, 1)"
                            ></path>
                            <path
                                d="M1055.57 139.4a53.42 53.42 0 1 0 105.83 14.66z"
                                stroke="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M586.67 4.88L616.15 4.88L616.15 37.93L586.67 37.93z"
                                fill="rgba(159, 159, 169, 1)"
                            ></path>
                            <path
                                d="M120.84 282.9L155.13 282.9L155.13 326.64L120.84 326.64z"
                                stroke="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M428.03 82.4 a41.54 41.54 0 1 0 83.08 0 a41.54 41.54 0 1 0 -83.08 0z"
                                fill="rgba(159, 159, 169, 1)"
                            ></path>
                            <path
                                d="M721.11 4.45L742.03 4.45L742.03 34.96L721.11 34.96z"
                                fill="rgba(9, 9, 11, 1)"
                            ></path>
                            <path
                                d="M364.7 234.45a11.81 11.81 0 1 0 16.04-17.34z"
                                fill="rgba(159, 159, 169, 1)"
                            ></path>
                            <path
                                d="M1174.02 287.74a52.17 52.17 0 1 0 96.48-39.72z"
                                fill="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M184.92 214.69L232.95 214.69L232.95 232.83L184.92 232.83z"
                                fill="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M1051.79 241.98a50.56 50.56 0 1 0 89.39-47.28z"
                                stroke="rgba(39, 39, 42, 1)"
                                transform="translate(0, 20)"
                            ></path>
                            <path
                                d="M649.53 22.69L703.39 22.69L703.39 50.9L649.53 50.9z"
                                stroke="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M1325.8 434.13a51.99 51.99 0 1 0-52.37-89.83z"
                                fill="rgba(9, 9, 11, 1)"
                            ></path>
                            <path
                                d="M1001.48 12.8a31.2 31.2 0 1 0 35.48 51.33z"
                                fill="rgba(9, 9, 11, 1)"
                            ></path>
                            <path
                                d="M101.5 309.55a44.5 44.5 0 1 0-83.17 31.67z"
                                fill="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M97.64 383.07L120.42 383.07L120.42 401.9L97.64 401.9z"
                                fill="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M1388.03 371.76a13.67 13.67 0 1 0-21 17.52z"
                                stroke="rgba(82, 82, 92, 1)"
                            ></path>
                            <path
                                d="M1386.83 220.47L1396.13 220.47L1396.13 229.77L1386.83 229.77z"
                                stroke="rgba(159, 159, 169, 1)"
                            ></path>
                        </g>
                        <defs>
                            <mask id="SvgjsMask1013">
                                <rect
                                    width="1440"
                                    height="560"
                                    fill="#ffffff"
                                ></rect>
                            </mask>
                        </defs>
                    </svg>

                    <div className="relative mb-3 z-10">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3"></div>
                        <div className="relative text-5xl md:text-8xl font-bold bg-white border-2 md:border-4 p-3 md:p-4 border-zinc-900">
                            Zn
                        </div>
                    </div>

                    <h1 className="mt-5 z-10 text-3xl md:text-6xl font-bold text-center">
                        Zinc Creative Studio
                    </h1>

                    <p className="text-base md:text-xl text-center px-4">
                        {t("home.slogan")} #CreateWithZinc
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-12 mt-5">
                        <div className="relative group">
                            <div className="absolute group-hover:rotate-2 group inset-0 bg-white border-2 md:border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                            <Link
                                href={route("products.index")}
                                className="relative z-10 block text-base md:text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0"
                            >
                                {t("navbar.products")}
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link
                                href={route("articles.index")}
                                className="relative z-10 block text-base md:text-lg font-bold px-5 py-2 bg-white border-2 md:border-[3px] border-zinc-900 transition rotate-2 group-hover:rotate-0"
                            >
                                {t("navbar.articles")}
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="px-4 md:px-20 py-10 md:h-[400px] gap-10 bg-white">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 md:w-12 h-1 bg-zinc-900"></div>
                        <h2 className="text-2xl md:text-4xl font-bold text-zinc-900">
                            {t("home.foreword")}
                        </h2>
                    </div>

                    <div className="relative w-full md:w-[85%] mx-auto">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 z-0 rotate-1 md:rotate-2"></div>
                        <div className="relative z-10 border-2 md:border-4 border-zinc-900 px-5 md:px-10 py-6 md:py-10 text-base md:text-[22px] bg-white -rotate-1">
                            <div className="flex gap-2 md:gap-3 rotate-1">
                                <span className="text-2xl md:text-4xl">❛❛</span>
                                <div>{t("home.foreword.body")}</div>
                            </div>
                            <div className="relative w-fit mt-5 group">
                                <div className="absolute group-hover:rotate-2 group inset-0 bg-white border-2 md:border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                                <Link
                                    href={route("about-us")}
                                    className="relative z-10 block w-fit text-base md:text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0"
                                >
                                    {t("navbar.about_us")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
