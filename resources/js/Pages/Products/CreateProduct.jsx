import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function CreateProduct() {
    const [preview, setPreview] = useState(null);
    const { data, setData, post } = useForm({
        name: "",
        image: null,
        description: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Product" />

            <main className="px-20 pt-14 min-h-screen">
                <h1 className="text-4xl font-bold mb-10">Create New Product</h1>

                <section className="max-w-4xl pb-32">
                    <form
                        className="flex flex-col gap-10"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Product Name
                            </label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    type="text"
                                    name="name"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Product Image
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
                                    onChange={handleImageChange}
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0 bg-white file:py-2 file:px-3 file:font-bold file:border-0 file:bg-zinc-900 file:text-white"
                                    required
                                />
                            </div>
                            <p className="text-xs text-zinc-600 mt-4">
                                Max file size: 2MB. Formats: JPG, PNG, GIF
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Description
                            </label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 w-full translate-x-1.5 translate-y-2"></div>
                                <input
                                    type="text"
                                    className="relative border-2 border-zinc-900 mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0 w-full pb-10"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
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
