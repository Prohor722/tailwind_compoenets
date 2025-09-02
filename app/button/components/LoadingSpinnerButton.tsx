import { Loader2 } from 'lucide-react'

const LoadingSpinnerButton = () => {
    return (
        <button className="cursor-pointer bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition">
            <Loader2 className="w-5 h-5 animate-spin" />
            Loading Spinner Button
        </button>
    )
}

export default LoadingSpinnerButton
