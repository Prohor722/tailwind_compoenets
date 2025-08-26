import { CheckCircle, Gamepad2, Target, Trophy, X, Zap } from 'lucide-react';
import { useState } from 'react'

const GameModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [gameScore, setGameScore] = useState(0);
  
  const achievements = [
    { id: 1, title: 'First Steps', description: 'Complete your first task', icon: Target, unlocked: true, rarity: 'common' },
    { id: 2, title: 'Speed Demon', description: 'Complete 10 tasks in under 5 minutes', icon: Zap, unlocked: true, rarity: 'rare' },
    { id: 3, title: 'Perfectionist', description: 'Get 100% accuracy on 5 tasks', icon: Trophy, unlocked: false, rarity: 'legendary' }
  ];

  const playGame = () => {
    setGameScore(prev => prev + Math.floor(Math.random() * 100) + 50);
  };
  
  const closeModal = () => setActiveModal(null);
  
  return (
    <div>

        <div className={`fixed inset-0 bg-gradient-to-br 
        from-indigo-900/90 to-purple-900/90 p-4 z-50
        ${activeModal === "game_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border-2 border-yellow-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10"></div>

            <button onClick={closeModal} className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-white z-10">
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                  <Gamepad2 size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Achievement Center</h3>
                <div className="flex items-center justify-center gap-2 text-yellow-400">
                  <Trophy size={16} />
                  <span className="font-mono text-lg">{gameScore} XP</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {achievements.map(achievement => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-xl border transition-all duration-300 ${achievement.unlocked
                      ? `bg-gradient-to-r ${achievement.rarity === 'legendary' ? 'from-yellow-500/20 to-orange-500/20 border-yellow-500/50' :
                        achievement.rarity === 'rare' ? 'from-purple-500/20 to-blue-500/20 border-purple-500/50' :
                          'from-gray-600/20 to-gray-500/20 border-gray-500/50'
                      }`
                      : 'bg-gray-800/50 border-gray-700 opacity-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${achievement.unlocked ? 'bg-white/20' : 'bg-gray-700'
                        }`}>
                        <achievement.icon size={18} className={achievement.unlocked ? 'text-white' : 'text-gray-500'} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${achievement.unlocked ? 'text-white' : 'text-gray-500'}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-xs ${achievement.unlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.unlocked && (
                        <CheckCircle size={16} className="text-green-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={playGame}
                  className="p-4 cursor-pointer "
                >
                  Play Mini Game (+XP)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('game_modal')}
          className="p-4 cursor-pointer
          bg-gray-900 rounded-xl shadow-2xl border-2 border-yellow-500/30"
        >
          Game Modal
        </button>

      </div>
  )
}

export default GameModal