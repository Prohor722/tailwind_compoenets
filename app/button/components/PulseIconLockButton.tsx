import { Lock } from 'lucide-react'

const PulseIconLockButton = () => {
  return (
    <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white transition duration-300">
      <Lock className="animate-pulse" />
      Pulse Icon Lock Button
    </button>
  )
}

export default PulseIconLockButton
