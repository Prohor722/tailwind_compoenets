'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { Highlighter, Palette } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

interface ColorOption {
  name: string;
  value: string;
  bg: string;
}

interface TextHighlighterProps {
  children: ReactNode;
}

const TextHighlighter: React.FC<TextHighlighterProps> = ({ children }) => {
  const [showHighlighter, setShowHighlighter] = useState<boolean>(false);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [highlighterPosition, setHighlighterPosition] = useState<Position>({ x: 0, y: 0 });
  const [colorPickerPosition, setColorPickerPosition] = useState<Position>({ x: 0, y: 0 });
  const [selectedRange, setSelectedRange] = useState<Range | null>(null);
  const [currentColor, setCurrentColor] = useState<string>('#ffff00');
  const containerRef = useRef<HTMLDivElement>(null);

  const colorOptions: ColorOption[] = [
    { name: 'Yellow', value: '#ffff00', bg: 'bg-yellow-300' },
    { name: 'Green', value: '#90EE90', bg: 'bg-green-300' },
    { name: 'Blue', value: '#87CEEB', bg: 'bg-blue-300' },
    { name: 'Pink', value: '#FFB6C1', bg: 'bg-pink-300' },
    { name: 'Orange', value: '#FFA500', bg: 'bg-orange-300' },
    { name: 'Purple', value: '#DDA0DD', bg: 'bg-purple-300' },
  ];

  useEffect(() => {
    const handleSelection = (): void => {
      const selection = window.getSelection();
      
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        setShowHighlighter(false);
        setShowColorPicker(false);
        return;
      }

      const range = selection.getRangeAt(0);
      
      // Check if selection is within our container
      if (!containerRef.current?.contains(range.commonAncestorContainer)) {
        setShowHighlighter(false);
        setShowColorPicker(false);
        return;
      }

      const rect = range.getBoundingClientRect();
      
      if (rect.width > 0 && rect.height > 0) {
        setSelectedRange(range.cloneRange());
        // Position the highlighter above the selected text (15px above)
        setHighlighterPosition({
          x: rect.left + rect.width - 0,
          y: rect.top - 20
        });
        setShowHighlighter(true);
      }
    };

    const handleClickOutside = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (!containerRef.current?.contains(target) && 
          !target.closest('.highlighter-toolbar') &&
          !target.closest('.color-picker-panel')) {
        setShowHighlighter(false);
        setShowColorPicker(false);
      }
    };

    document.addEventListener('selectionchange', handleSelection);
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const highlightText = (color: string = currentColor): void => {
    if (!selectedRange) return;

    try {
      const selectedText = selectedRange.toString();
      if (!selectedText) return;

      // Create the highlight span
      const highlightSpan = document.createElement('span');
      highlightSpan.style.backgroundColor = color;
      highlightSpan.style.display = 'inline';
      highlightSpan.style.lineHeight = 'inherit';
      highlightSpan.className = 'text-highlight';
      highlightSpan.setAttribute('data-highlight-color', color);
      highlightSpan.textContent = selectedText;

      // Get the range boundaries
      const startContainer = selectedRange.startContainer;
      const endContainer = selectedRange.endContainer;
      const startOffset = selectedRange.startOffset;
      const endOffset = selectedRange.endOffset;

      if (startContainer === endContainer && startContainer.nodeType === Node.TEXT_NODE) {
        // Simple case: selection within single text node
        const textNode = startContainer as Text;
        const originalText = textNode.textContent || '';
        
        const beforeText = originalText.substring(0, startOffset);
        const afterText = originalText.substring(endOffset);
        
        // Create text nodes for before and after
        const beforeTextNode = document.createTextNode(beforeText);
        const afterTextNode = document.createTextNode(afterText);
        
        // Replace the original text node with before + highlight + after
        const parent = textNode.parentNode;
        if (parent) {
          // Insert in correct order
          parent.insertBefore(beforeTextNode, textNode);
          parent.insertBefore(highlightSpan, textNode);
          parent.insertBefore(afterTextNode, textNode);
          parent.removeChild(textNode);
          
          // Clean up empty text nodes only if they're truly empty
          if (beforeText === '') parent.removeChild(beforeTextNode);
          if (afterText === '') parent.removeChild(afterTextNode);
        }
      } else {
        // Complex case: use a simpler, more reliable approach
        // Just delete the selected content and insert the highlight span
        const selectedContent = selectedRange.toString();
        selectedRange.deleteContents();
        
        const span = document.createElement('span');
        span.style.backgroundColor = color;
        span.style.display = 'inline';
        span.style.lineHeight = 'inherit';
        span.className = 'text-highlight';
        span.setAttribute('data-highlight-color', color);
        span.textContent = selectedContent;
        
        selectedRange.insertNode(span);
      }
      
      window.getSelection()?.removeAllRanges();
      setShowHighlighter(false);
      setShowColorPicker(false);
    } catch (error) {
      console.error('Failed to highlight text:', error);
      // Fallback: simple text replacement
      try {
        const selectedText = selectedRange.toString();
        selectedRange.deleteContents();
        const highlightSpan = document.createElement('span');
        highlightSpan.style.backgroundColor = color;
        highlightSpan.style.display = 'inline';
        highlightSpan.className = 'text-highlight';
        highlightSpan.setAttribute('data-highlight-color', color);
        highlightSpan.textContent = selectedText;
        selectedRange.insertNode(highlightSpan);
        
        window.getSelection()?.removeAllRanges();
        setShowHighlighter(false);
        setShowColorPicker(false);
      } catch (fallbackError) {
        console.error('Fallback highlight also failed:', fallbackError);
        setShowHighlighter(false);
        setShowColorPicker(false);
      }
    }
  };

  const removeHighlight = (e: React.MouseEvent<HTMLDivElement>): void => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('text-highlight')) {
      const parent = target.parentNode;
      if (parent) {
        // Move all child nodes before the highlight span
        while (target.firstChild) {
          parent.insertBefore(target.firstChild, target);
        }
        // Remove the highlight span
        parent.removeChild(target);
        
        // Normalize the parent to merge adjacent text nodes
        parent.normalize();
      }
    }
  };

  const toggleColorPicker = (): void => {
    if (!showColorPicker) {
      // Position color picker to the right of the highlighter
      setColorPickerPosition({
        x: highlighterPosition.x + 60,
        y: highlighterPosition.y - 10
      });
    }
    setShowColorPicker(!showColorPicker);
  };

  const selectColor = (color: string): void => {
    setCurrentColor(color);
    highlightText(color);
  };

  const handleColorInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentColor(e.target.value);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onDoubleClick={removeHighlight}
        className="select-text"
      >
        {children}
      </div>
      
      {showHighlighter && (
        <div
          className="fixed z-50 bg-white border border-gray-200 rounded shadow-lg highlighter-toolbar flex items-center gap-1"
          style={{
            left: `${highlighterPosition.x}px`,
            top: `${highlighterPosition.y}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <button
            onClick={() => highlightText()}
            className="flex cursor-pointer items-center justify-center w-5 h-5 text-black hover:text-white hover:bg-black rounded transition-colors"
            title="Highlight text"
          >
            <Highlighter className='h-4 w-4' />
          </button>
          
          <div className="w-px h-4 bg-gray-300"></div>
          
          <button
            onClick={toggleColorPicker}
            className="flex items-center cursor-pointer justify-center w-5 h-5 text-black hover:text-white hover:bg-black rounded transition-colors"
            title="Choose color"
          >
            <Palette className='h-4 w-4' />
          </button>
        </div>
      )}

      {showColorPicker && (
        <div
          className="fixed z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-3 color-picker-panel"
          style={{
            left: `${colorPickerPosition.x}px`,
            top: `${colorPickerPosition.y}px`
          }}
        >
          <div className="text-sm font-medium text-gray-700 mb-2">Choose Color</div>
          <div className="grid grid-cols-3 gap-2">
            {colorOptions.map((color: ColorOption) => (
              <button
                key={color.value}
                onClick={() => selectColor(color.value)}
                className={`w-8 h-8 rounded border-2 transition-all hover:scale-110 ${
                  currentColor === color.value ? 'border-gray-800 ring-2 ring-gray-400' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
          
          {/* Custom color input */}
          <div className="mt-3 pt-2 border-t border-gray-200">
            <label className="block text-xs text-gray-600 mb-1">Custom Color</label>
            <input
              type="color"
              value={currentColor}
              onChange={handleColorInputChange}
              className="w-full h-8 rounded cursor-pointer"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .text-highlight {
          cursor: pointer;
          display: inline;
          line-height: inherit;
          white-space: nowrap;
          word-break: keep-all;
        }
        .text-highlight:hover {
          opacity: 0.8;
        }
        
        /* Ensure highlighted text doesn't break layout */
        .text-highlight * {
          display: inline;
          line-height: inherit;
        }
      `}</style>
    </div>
  );
};

export default TextHighlighter;

// Example usage in a Next.js page:
/*
import TextHighlighter from './components/TextHighlighter';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <TextHighlighter>
        <h1 className="text-3xl font-bold mb-4">Hello World Today</h1>
        <p className="mb-4">
          This is a sample paragraph that you can select and highlight. 
          Select any text and use the highlighter toolbar that appears above the selection.
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Test Cases:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Select "World Today" from the h1 tag above</li>
            <li>Select text that spans across different elements</li>
            <li>Select partial words or phrases</li>
            <li>All selections should work without breaking the HTML structure</li>
          </ul>
        </div>
      </TextHighlighter>
    </div>
  );
}
*/