import { Brush, Download, Grid3x3, PaintBucket, PenIcon, RefreshCw, Type, X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const CreativeDesignToolModal = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const closeModal = () => setActiveModal(null);


    const [designTool, setDesignTool] = useState('brush');
    const [currentColor, setCurrentColor] = useState('#3B82F6');
    const canvasRef = useRef<HTMLCanvasElement>(null);



    const [brushSize, setBrushSize] = useState(10);
    const [isDrawing, setIsDrawing] = useState(false);

    const tools = [
        { id: 'brush', icon: Brush, name: 'Brush' },
        { id: 'paint', icon: PaintBucket, name: 'Fill' },
        { id: 'text', icon: Type, name: 'Text' },
        { id: 'shapes', icon: Grid3x3, name: 'Shapes' }
    ];

    const colors = [
        '#EF4444', '#F97316', '#EAB308', '#22C55E',
        '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'
    ];

    const handleCanvasMouseDown = (e: React.MouseEvent) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
        ctx.fillStyle = currentColor;
        ctx.fill();
    };

    const handleCanvasMouseMove = (e: React.MouseEvent) => {
        if (!isDrawing) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
        ctx.fillStyle = currentColor;
        ctx.fill();
    };

    return (
        <div>
            <div className={`fixed inset-0 bg-black bg-opacity-80 
        p-4 z-50
        ${activeModal === "creative_design_tool_modal" ? "flex items-center justify-center" : "hidden"}
        `}>
                <div className="bg-white rounded-2xl max-w-4xl w-full h-[600px] shadow-2xl flex">
                    {/* Toolbar */}
                    <div className="w-20 bg-gray-900 rounded-l-2xl p-4 flex flex-col items-center gap-4">
                        <button onClick={closeModal} className="cursor-pointer text-gray-400 hover:text-white mb-4">
                            <X size={20} />
                        </button>

                        {tools.map(tool => (
                            <button
                                key={tool.id}
                                onClick={() => setDesignTool(tool.id)}
                                className={`cursor-pointer w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${designTool === tool.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                <tool.icon size={20} />
                            </button>
                        ))}

                        <div className="border-t border-gray-700 w-full my-2"></div>

                        <div className="grid grid-cols-2 gap-1">
                            {colors.map(color => (
                                <button
                                    key={color}
                                    onClick={() => setCurrentColor(color)}
                                    className={`cursor-pointer w-5 h-5 rounded border-2 transition-all ${currentColor === color ? 'border-white scale-110' : 'border-gray-600'
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>

                        <div className="mt-4">
                            <input
                                type="range"
                                min="2"
                                max="50"
                                value={brushSize}
                                onChange={(e) => setBrushSize(Number(e.target.value))}
                                className="w-12 transform -rotate-90"
                            />
                        </div>
                    </div>

                    {/* Canvas Area */}
                    <div className="flex-1 p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Creative Studio</h3>
                            <div className="flex gap-2">
                                <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors">
                                    <RefreshCw size={16} />
                                    Clear
                                </button>
                                <button className="cursor-pointer flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                                    <Download size={16} />
                                    Export
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden relative">
                            <canvas
                                ref={canvasRef}
                                width={600}
                                height={400}
                                className="w-full h-full cursor-crosshair"
                                onMouseDown={handleCanvasMouseDown}
                                onMouseMove={handleCanvasMouseMove}
                                onMouseUp={() => setIsDrawing(false)}
                                onMouseLeave={() => setIsDrawing(false)}
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center gap-4">
                                <span>Tool: <strong>{tools.find(t => t.id === designTool)?.name}</strong></span>
                                <span>Size: <strong>{brushSize}px</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded border" style={{ backgroundColor: currentColor }}></div>
                                <span>{currentColor}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Button */}
            <button
                onClick={() => setActiveModal('creative_design_tool_modal')}
                className="flex items-center gap-1 cursor-pointer p-4 rounded-xl bg-white
    shadow-[0_0_0_2px_transparent] 
    hover:shadow-[0_0_0_2px_red,0_0_0_4px_orange,0_0_0_6px_yellow,0_0_0_8px_green]
    transition-all duration-300 hover:scale-105"
                style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) border-box',
                    border: '2px solid transparent'
                }}
            >
                <span className='text-blue-500'>Creative</span>
                <span className='text-yellow-500'>Design</span>
                <span className='text-orange-500'>Tool</span>
                <span className='text-red-500'> Modal</span>
                <span className='ml-2 text-green-500'>
                    <PenIcon size={14} />
                </span>
            </button>

        </div>
    )
}

export default CreativeDesignToolModal