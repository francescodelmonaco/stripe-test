import Link from "next/link";

export default function Cancel() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl">Pagamento annullato ❌</h1>
            <Link
                href="/"
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
            >Torna alla home</Link>
        </div>
    );
}