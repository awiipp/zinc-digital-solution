import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Galleries({ galleries }) {
    return (
        <AuthenticatedLayout>
            <Head title="Galleries" />

            <main>
                <div className="bg-zinc-900 px-20 pt-14 pb-14 text-white">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Visual
                        </span>{" "}
                        Stories
                    </h1>
                    <p className="text-xl mt-3 text-zinc-300">
                        A collection of moments showcasing our creative works,
                        products, and event collaborations.
                    </p>
                </div>

                <section className="px-20 mt-10 pb-32">
                    {galleries.length === 0 ? (
                        <div className="relative max-w-2xl mx-auto mt-20">
                            <div className="absolute bg-zinc-400 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-400 p-12 text-center">
                                <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                                    No Galleries Available
                                </h2>
                                <p className="text-lg text-zinc-400">
                                    Our gallery is being curated. Amazing
                                    moments will be added soon!
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-8">
                            {galleries.map((gallery) => (
                                <div className="relative h-fit">
                                    <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-1.5"></div>
                                    <div
                                        key={gallery.id}
                                        className="relative h-full border-[3px] border-zinc-900 hover:translate-x-1.5 hover:translate-y-1.5 bg-white hover:shadow-md transition"
                                    >
                                        <img
                                            src={`/storage/${gallery.image}`}
                                            alt={gallery.title}
                                            className="w-full h-48 object-cover"
                                        />

                                        <div className="px-6 py-4">
                                            <h3 className="text-xl font-semibold mb-2">
                                                {gallery.title}
                                            </h3>

                                            {gallery.description && (
                                                <p className="text-sm text-zinc-600">
                                                    {gallery.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
