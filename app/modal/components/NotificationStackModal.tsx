import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useState } from 'react'

const NotificationStackModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const closeModal = () => setActiveModal(null);

  const notifications = [
    { id: 1, type: 'success', icon: CheckCircle, title: 'Task Completed', message: 'Your file has been uploaded successfully', time: '2m ago' },
    { id: 2, type: 'warning', icon: AlertTriangle, title: 'Storage Almost Full', message: 'You have used 85% of your storage space', time: '5m ago' },
    { id: 3, type: 'info', icon: Info, title: 'New Update Available', message: 'Version 2.1.0 is ready to install', time: '10m ago' }
  ];
  
  return (
    <div>

        <div className={`fixed inset-0 bg-black 
      bg-opacity-30 p-6 z-50
      ${activeModal === "notification" ? "flex items-center justify-center" : "hidden"}
      `}>
          <div className="space-y-4 w-80">
            {notifications.map((notif, index) => (
              <div
                key={notif.id}
                className={`bg-white rounded-xl p-4 shadow-lg border-l-4 transform transition-all duration-500 hover:scale-105 ${notif.type === 'success' ? 'border-green-500' :
                  notif.type === 'warning' ? 'border-yellow-500' : 'border-blue-500'
                  }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${notif.type === 'success' ? 'bg-green-100 text-green-600' :
                    notif.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                    <notif.icon size={18} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-800 text-sm">{notif.title}</h4>
                      <span className="text-xs text-gray-500">{notif.time}</span>
                    </div>
                    <p className="text-gray-600 text-xs">{notif.message}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center">
              <button
                onClick={closeModal}
                className="cursor-pointer bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg shadow-md transition-colors text-sm"
              >
                Close All
              </button>
            </div>
          </div>
        </div>

        {/* Button  */}
        <button
          onClick={() => setActiveModal('notification')}
          className="cursor-pointer p-4
          bg-white rounded-xl shadow-lg border-l-4 transform transition-all duration-500 hover:scale-105 border-green-500"
        >
          Notification Stack Modal
        </button>

      </div>
  )
}

export default NotificationStackModal