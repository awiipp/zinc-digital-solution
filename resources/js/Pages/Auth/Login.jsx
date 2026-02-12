import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import t from "@/utils/t";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title={t("login.title")} />

            <main className="px-20 pt-10 min-h-screen max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-10">{t("login.title")}</h1>

                {status && (
                    <div className="mb-6 text-sm font-medium text-green-600 bg-green-50 border-2 border-green-600 p-4">
                        {status}
                    </div>
                )}

                <section className="max-w-4xl pb-32">
                    <form className="flex flex-col gap-10" onSubmit={submit}>
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                {t("login.email")}
                            </label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                {t("login.password")}
                            </label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked,
                                            )
                                        }
                                        className="relative w-5 h-5 border-2 border-zinc-900 text-zinc-900 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                                    />
                                </div>
                                <span className="text-base font-medium text-zinc-700 group-hover:text-zinc-900">
                                    {t("login.remember")}
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-base font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-4 decoration-2"
                                >
                                    {t("login.forgot")}
                                </Link>
                            )}

                            <div className="relative w-fit group ml-auto">
                                <div className="absolute group-hover:rotate-2 inset-0 bg-white border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                                <button
                                    type="submit"
                                    className="relative z-10 block w-fit text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {t("login.submit")}
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
