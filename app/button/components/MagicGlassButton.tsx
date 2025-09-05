import { Sparkles } from 'lucide-react'

const MagicGlassButton = () => {
    return (
        <button className="relative cursor-pointer px-6 py-3 rounded-xl border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition text-white flex items-center gap-2">
            <Sparkles className="text-yellow-400 animate-ping" />
            Magic Glass Button
        </button>
    )
}

export default MagicGlassButton
