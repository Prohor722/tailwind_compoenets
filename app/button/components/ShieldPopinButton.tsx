import { ShieldCheck } from 'lucide-react'

const ShieldPopinButton = () => {
    return (
        <button className="cursor-pointer bg-yellow-500 text-black px-6 py-3 rounded-lg flex items-center gap-2 font-medium hover:scale-105 transition-transform duration-200">
            <ShieldCheck className="animate-pulse" />
            Shield Pop-in Button
        </button>
    )
}

export default ShieldPopinButton
