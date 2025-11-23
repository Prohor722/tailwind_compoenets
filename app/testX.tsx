import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export default function AccordionShowcase() {
  const [openIndex1, setOpenIndex1] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);
  const [openIndex3, setOpenIndex3] = useState(null);

  const items = [
    {
      title: "What is your return policy?",
      content: "We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery."
    },
    {
      title: "How long does shipping take?",
      content: "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for delivery within 2-3 business days."
    },


    {
      title: "How can I track my order?",
      content: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site."
    }
  ];

  const toggleAccordion = (index, setter, current) => {
    setter(current === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Modern Accordion Designs</h1>
          <p className="text-slate-600">Three different styles for your Next.js project</p>
        </div>

        {/* Style 1: Minimal with Border */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Style 1: Minimal Border</h2>
     
                  <span className="font-medium text-slate-900">{item.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
                      openIndex1 === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex1 === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-slate-600">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

         === index ? 'shadow-lg' : ''
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index, setOpenIndex2, openIndex2)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left group"
                >
                  <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex2 === index ? 'bg-blue-600 rotate-180' : 'bg-slate-100 group-hover:bg-slate-200'
                  }`}>
                    <ChevronDown className={`w-5 h-5 ${openIndex2 === index ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex2 === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-slate-600 border-t border-slate-100 pt-4">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Style 3: Bold with Gradient Accent */}
       
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Style 3: Gradient Accent</h2>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index, setOpenIndex3, openIndex3)}
                  className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 ${
                    openIndex3 === index ? 'bg-gradient-to-r from-purple-50 to-pink-50' : ''
                  }`}
                >
                  <span className={`font-semibold transition-colors duration-300 ${
                    openIndex3 === index ? 'text-purple-900' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </span>
                  <div className={`transition-all duration-300 ${
                    openIndex3 === index ? 'scale-110' : ''
                  }`}>
                    {openIndex3 === index ? (
                      <Minus className="w-5 h-5 text-purple-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex3 === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}