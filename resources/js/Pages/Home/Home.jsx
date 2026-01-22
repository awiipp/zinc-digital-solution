import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <AuthenticatedLayout>
            <Head title="Home" />

            <div className="flex flex-col items-center justify-center h-[500px] w-full text-zinc-900 bg-white">
                <h1 className="text-5xl font-bold">Zinc Creative Studio</h1>
                <p className="text-lg">
                    Creative Solutions for Every Experience #CreateWithZinc
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
