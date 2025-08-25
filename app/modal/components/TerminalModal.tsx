import { X } from 'lucide-react';
import { useState } from 'react'

const TerminalModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  const commands = [
    '$ system init...',
    '> Loading modal interface...',
    '> Authentication: SUCCESS',
    '> Ready for user input'
  ];

  return (
    <div>

        <div className={`fixed inset-0 bg-black 
        bg-opacity-95 p-4 z-50
        ${activeModal === "terminal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-black border border-green-500 rounded-lg max-w-2xl w-full shadow-2xl shadow-green-500/25">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between rounded-t-lg border-b border-green-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-400 font-mono text-sm">terminal@modal:~$</span>
              <button onClick={closeModal} className="cursor-pointer text-green-400 hover:text-green-300">
                <X size={16} />
              </button>
            </div>

            <div className="p-6 font-mono text-green-400 bg-black min-h-80">
              {commands.map((cmd, i) => (
                <div key={i} className="mb-2 flex items-center">
                  <span className="text-green-500 mr-2">{'>'}</span>
                  <span>{cmd}</span>
                </div>
              ))}

              <div className="mt-6 border-t border-green-500/30 pt-4">
                <p className="text-green-300 mb-4">SYSTEM INFORMATION:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-green-500">Status:</span> ACTIVE
                  </div>
                  <div>
                    <span className="text-green-500">Uptime:</span> 99.9%
                  </div>
                  <div>
                    <span className="text-green-500">Memory:</span> 512MB
                  </div>
                  <div>
                    <span className="text-green-500">CPU:</span> 0.8%
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="cursor-pointer bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded font-bold transition-colors">
                  [EXECUTE]
                </button>
                <button onClick={closeModal} className="cursor-pointer border border-green-500 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded transition-colors">
                  [EXIT]
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('terminal')}
          className="cursor-pointer p-4 font-mono text-green-400
          bg-black border border-green-500 rounded-lg shadow-2xl shadow-green-500/25"
        >
          Terminal Modal
        </button>

      </div>
  )
}

export default TerminalModal