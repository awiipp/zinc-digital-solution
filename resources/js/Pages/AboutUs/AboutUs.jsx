import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function AboutUs() {
    return (
        <AuthenticatedLayout>
            <Head title="About Us" />

            <main className="px-10 pb-40 flex items-center flex-col bg-white">
                <div className="flex justify-center gap-14 pt-[80px] h-[450px]">
                    <div className="mt-7">
                        <div className="relative mb-3">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-3 translate-y-3"></div>
                            <div className="relative text-8xl font-bold bg-white border-4 p-4 border-zinc-900">
                                Zn
                            </div>
                        </div>
                    </div>
                    <div className="w-[600px]">
                        <h1 className="text-4xl font-bold mb-3">About Us</h1>
                        <p className="text-lg mb-5">
                            Zinc Creative Studio is a creative brand that
                            focuses on delivering innovative products and
                            creative solutions for branding and events. We
                            specialize in designing and producing high-quality
                            merchandise that helps brands communicate their
                            identity.
                        </p>
                        <h1 className="text-2xl font-bold">Since 2023</h1>
                        <p className="text-lg mb-5">
                            Founded in 2023, Zinc Creative Studio has grown with
                            a strong commitment to creativity, quality, and
                            continuous innovation in every project we handle.
                        </p>
                        <a
                            href={route("about-us") + "#vission"}
                            className="border-2 border-zinc-900 text-sm font-bold px-5 py-2 transition shadow-sm hover:bg-zinc-900 hover:text-white"
                        >
                            Our Vission and Mission
                        </a>
                    </div>
                </div>

                <div
                    id="vission"
                    className="flex justify-center items-start gap-14 pt-[100px]"
                >
                    <div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-3 rotate-1"></div>
                            <div className="relative border-[3px] border-zinc-900 w-[450px] px-8 pt-5 pb-10 bg-white">
                                <h1 className="text-2xl font-bold text-center mb-5">
                                    Vision
                                </h1>
                                <p className="text-lg text-center">
                                    To become a leading creative studio that
                                    delivers impactful products and memorable
                                    brand experiences through innovation and
                                    creativity.
                                </p>
                            </div>
                        </div>
                        <div className="font-semibold text-3xl text-center mt-20">
                            #CreateWithZinc
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-3 mt-[100px] rotate-1"></div>
                        <div className="relative border-[3px] border-zinc-900 w-[450px] px-8 pt-5 pb-10 mt-[100px] bg-white">
                            <h1 className="text-2xl font-bold text-center mb-5">
                                Mision
                            </h1>
                            <ul className="text-lg flex flex-col gap-8">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1 -rotate-[4deg]">
                                        01
                                    </div>
                                    To design and produce high-quality creative
                                    products that represent our clients’ brand
                                    identity.
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1 rotate-[-4deg]">
                                        02
                                    </div>
                                    To support events and brand activations with
                                    innovative merchandise and creative
                                    solutions.
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center font-bold flex-shrink-0 mt-1 rotate-[4deg]">
                                        03
                                    </div>
                                    To combine creativity, strategy, and
                                    craftsmanship in every project we deliver.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
