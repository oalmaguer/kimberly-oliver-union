import { useState, useEffect } from 'react';
import { Palette, X, RotateCcw } from 'lucide-react';
import { useColor } from '@/contexts/ColorContext';

const ColorPalettePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { background, text, gold, setBackground, setText, setGold } = useColor();

  // Apply colors to CSS custom properties
  useEffect(() => {
    document.documentElement.style.setProperty('--color-background', background);
    document.documentElement.style.setProperty('--color-text', text);
    document.documentElement.style.setProperty('--color-gold', gold);
  }, [background, text, gold]);

  const presetColors = {
    backgrounds: [
      { name: 'Warm White', value: '#faf7f0' },
      { name: 'Cream', value: '#f5f5dc' },
      { name: 'Ivory', value: '#fffff0' },
      { name: 'Beige', value: '#f5f5dc' },
      { name: 'Light Gold', value: '#f7f3e9' },
      { name: 'Soft Pink', value: '#fdf2f8' },
      { name: 'Sage Green', value: '#f0f4f0' },
      { name: 'Light Gray', value: '#f8f9fa' }
    ],
    texts: [
      { name: 'Dark Brown', value: '#8b4513' },
      { name: 'Charcoal', value: '#36454f' },
      { name: 'Dark Gray', value: '#2c3e50' },
      { name: 'Navy', value: '#1e3a8a' },
      { name: 'Forest Green', value: '#064e3b' },
      { name: 'Burgundy', value: '#7c2d12' },
      { name: 'Black', value: '#000000' },
      { name: 'Dark Gold', value: '#b8860b' }
    ],
    golds: [
      { name: 'Classic Gold', value: '#d4af37' },
      { name: 'Rose Gold', value: '#e8b4b8' },
      { name: 'Champagne', value: '#f7e7ce' },
      { name: 'Bronze', value: '#cd7f32' },
      { name: 'Copper', value: '#b87333' },
      { name: 'Antique Gold', value: '#b8860b' },
      { name: 'Light Gold', value: '#ffd700' },
      { name: 'Dark Gold', value: '#b8860b' }
    ]
  };

  const handleColorChange = (type: 'background' | 'text' | 'gold', color: string) => {
    if (type === 'background') {
      setBackground(color);
    } else if (type === 'text') {
      setText(color);
    } else if (type === 'gold') {
      setGold(color);
    }
  };

  const resetToDefaults = () => {
    setBackground('#faf7f0');
    setText('#8b4513');
    setGold('#d4af37');
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gold text-white p-3 rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: gold }}
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Color Picker Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Color Palette</h3>
            <div className="flex gap-2">
              <button
                onClick={resetToDefaults}
                className="p-1 hover:bg-gray-100 rounded"
                title="Reset to defaults"
              >
                <RotateCcw className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Background Colors */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Background</label>
            <div className="grid grid-cols-4 gap-2">
              {presetColors.backgrounds.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange('background', color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                    background === color.value ? 'border-gray-800' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <input
              type="color"
              value={background}
              onChange={(e) => handleColorChange('background', e.target.value)}
              className="mt-2 w-full h-8 rounded border border-gray-300"
            />
          </div>

          {/* Text Colors */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Text</label>
            <div className="grid grid-cols-4 gap-2">
              {presetColors.texts.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange('text', color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                    text === color.value ? 'border-gray-800' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <input
              type="color"
              value={text}
              onChange={(e) => handleColorChange('text', e.target.value)}
              className="mt-2 w-full h-8 rounded border border-gray-300"
            />
          </div>

          {/* Gold/Accent Colors */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Gold/Accent</label>
            <div className="grid grid-cols-4 gap-2">
              {presetColors.golds.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange('gold', color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                    gold === color.value ? 'border-gray-800' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <input
              type="color"
              value={gold}
              onChange={(e) => handleColorChange('gold', e.target.value)}
              className="mt-2 w-full h-8 rounded border border-gray-300"
            />
          </div>

          {/* Current Values Display */}
          <div className="text-xs text-gray-500 space-y-1">
            <div>BG: {background}</div>
            <div>Text: {text}</div>
            <div>Gold: {gold}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorPalettePicker;
