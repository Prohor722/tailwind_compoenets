import { CheckCircle2 } from 'lucide-react'

const BouncyConfirmButton = () => {
    return (
        <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition transform hover:scale-105 duration-300">
            <CheckCircle2 className="animate-bounce" />
            Bouncy Confirm Button
        </button>
    )
}

export default BouncyConfirmButton
