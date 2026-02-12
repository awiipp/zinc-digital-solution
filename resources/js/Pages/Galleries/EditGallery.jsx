import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function EditGallery({ gallery }) {
    const [preview, setPreview] = useState(null);
    const [descriptionLength, setDescriptionLength] = useState(0);

    const { data, setData, post } = useForm({
        title: gallery.title,
        image: null,
        description: gallery.description ?? "",
        _method: "PUT",
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setPreview(reader.result);
            };

            reader.readAsDataURL(file);

            setData("image", file);
        }
    };

    const handleDescriptionChange = (e) => {
        const value = e.target.value;

        setData("description", value);
        setDescriptionLength(value.length);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("galleries.update", gallery.id), {
            forceFormData: true,
        });
    };

    useEffect(() => {
        if (gallery.image) {
            setPreview(`/storage/${gallery.image}`);
        }

        setDescriptionLength(gallery.description?.length ?? 0);
    }, [gallery.image]);

    return (
        <AuthenticatedLayout>
            <Head title="Create Gallery" />

            <main className="px-20 pt-14 min-h-screen">
                <h1 className="text-4xl font-bold mb-10">Create New Gallery</h1>

                <section className="max-w-4xl pb-32">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-10"
                    >
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Image Title
                            </label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    type="text"
                                    name="title"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Thumbnail
                            </label>

                            {preview && (
                                <img
                                    src={preview}
                                    className="w-[430px] h-[250px] object-cover mt-2 border-[3px] border-zinc-900"
                                />
                            )}

                            <div className="relative mt-3">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0 bg-white file:py-2 file:px-3 file:font-bold file:border-0 file:bg-zinc-900 file:text-white file:hover:cursor-pointer"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <p className="text-xs text-zinc-600 mt-4">
                                Max file size: 2MB. Formats: JPG, PNG, GIF
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Description
                                <span className="text-xs font-regular ml-1">
                                    (optional. Max chars is 200. Currently:{" "}
                                    {descriptionLength})
                                </span>
                            </label>
                            <div className="relative h-[100px]">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-3"></div>
                                <textarea
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                        }
                                    }}
                                    name="description"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0 h-full"
                                    maxLength={200}
                                    value={data.description}
                                    onChange={handleDescriptionChange}
                                />
                            </div>
                        </div>

                        <div className="relative w-fit group mt-2">
                            <div className="absolute group-hover:rotate-2 group inset-0 bg-white border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                            <button
                                type="submit"
                                className="relative z-10 block w-fit text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
