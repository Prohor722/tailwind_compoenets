import { ArrowRight } from 'lucide-react'

const RevealIconButton = () => {
    return (
        <button className="group flex items-center gap-2 px-6 py-3 bg-indigo-700 rounded-lg hover:bg-indigo-800 transition-all duration-300">
            <span>Reveal Icon Button</span>
            <ArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
    )
}

export default RevealIconButton
