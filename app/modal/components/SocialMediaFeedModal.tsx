import { Heart, MessageCircle, Share2, X } from 'lucide-react';
import { useState } from 'react'

const SocialMediaFeedModal = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const closeModal = () => setActiveModal(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Alex Designer',
      avatar: '👤',
      time: '2h ago',
      content: 'Just finished this amazing modal design! What do you think?',
      image: '🎨',
      likes: 24,
      comments: 8,
      liked: false
    },
    {
      id: 2,
      user: 'Sarah Dev',
      avatar: '👩‍💻',
      time: '4h ago',
      content: 'New React component library is looking great! Can\'t wait to share it.',
      image: '⚛️',
      likes: 15,
      comments: 3,
      liked: true
    }
  ]);

  const toggleLike = (postId: number) => {
    setPosts(prev => prev.map(post =>
      post.id === postId
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <div>

        <div className={`fixed inset-0 bg-black bg-opacity-80 
        p-4 z-50
        ${activeModal === "social_media_feed_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
          <div className="bg-white rounded-2xl max-w-md w-full h-96 shadow-2xl flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">Social Feed</h3>
              <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {posts.map(post => (
                <div key={post.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-lg">
                      {post.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{post.user}</p>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3 text-sm">{post.content}</p>

                  <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-4xl mb-3">
                    {post.image}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${post.liked ? 'text-red-500 bg-red-50' : 'hover:bg-gray-100'
                        }`}
                    >
                      <Heart size={16} className={post.liked ? 'fill-current' : ''} />
                      <span>{post.likes}</span>
                    </button>

                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <MessageCircle size={16} />
                      <span>{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Share2 size={16} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setActiveModal('social_media_feed_modal')}
          className="cursor-pointer p-4
          bg-blue-950 rounded-xl shadow-2xl"
        >
          Social Media Feed Modal
        </button>

      </div>
  )
}

export default SocialMediaFeedModal