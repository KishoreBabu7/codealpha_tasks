import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import HistoryPanel from './HistoryPanel';
import { evaluateExpression } from '../utils/calculatorLogic';
import { History, Github, ExternalLink } from 'lucide-react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('0');
  const [result, setResult] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleButtonPress = (value: string) => {
    switch (value) {
      case 'C':
        setInput('0');
        setResult('');
        break;
      case '=':
        try {
          const expressionResult = evaluateExpression(input);
          if (expressionResult !== undefined) {
            setResult(expressionResult);
            setHistory([`${input} = ${expressionResult}`, ...history.slice(0, 9)]);
            setInput(expressionResult);
          }
        } catch (error) {
          setResult('Error');
        }
        break;
      case '←':
        if (input.length === 1 || (input.length === 2 && input.startsWith('-'))) {
          setInput('0');
        } else {
          setInput(input.slice(0, -1));
        }
        break;
      case '+/-':
        if (input === '0') {
          setInput('-0');
        } else if (input.startsWith('-')) {
          setInput(input.substring(1));
        } else {
          setInput('-' + input);
        }
        break;
      default:
        if (input === '0' || input === 'Error' || input === result) {
          if (value === '.') {
            setInput('0.');
          } else if (['+', '-', '×', '÷'].includes(value)) {
            setInput(input + value);
          } else {
            setInput(value);
          }
        } else if (input === '-0' && value !== '.') {
          setInput('-' + value);
        } else {
          const lastChar = input.slice(-1);
          if (['+', '-', '×', '÷'].includes(lastChar) && ['+', '-', '×', '÷'].includes(value)) {
            setInput(input.slice(0, -1) + value);
          } else {
            setInput(input + value);
          }
        }
        break;
    }
  };

  const toggleHistory = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    const key = e.key;
    
    if (/[0-9]/.test(key)) {
      handleButtonPress(key);
    } else if (key === '.') {
      handleButtonPress('.');
    } else if (key === '+') {
      handleButtonPress('+');
    } else if (key === '-') {
      handleButtonPress('-');
    } else if (key === '*') {
      handleButtonPress('×');
    } else if (key === '/') {
      handleButtonPress('÷');
    } else if (key === 'Enter' || key === '=') {
      handleButtonPress('=');
    } else if (key === 'Backspace') {
      handleButtonPress('←');
    } else if (key === 'Escape') {
      handleButtonPress('C');
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input, result, history]);

  return (
    <div className="relative w-full max-w-md perspective-1000">
      <motion.div
        className="relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-black bg-opacity-20 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-white/10 backface-hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-white text-xl font-medium">Calculator</h1>
              <a 
                href="https://github.com/KishoreBabu7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://tulugukishorebabu.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-center gap-1"
              >
                <span className="text-sm">Portfolio</span>
                <ExternalLink size={16} />
              </a>
              <button 
                onClick={toggleHistory}
                className="text-white/70 hover:text-white transition-colors"
              >
                <History size={24} />
              </button>
            </div>
          </div>
          
          <Display input={input} result={result} />
          <ButtonPanel onButtonPress={handleButtonPress} />
          
          <div className="mt-4 text-center text-white/50 text-sm">
            Created by Tulugu Kishore Babu
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <HistoryPanel history={history} onClose={toggleHistory} />
        </div>
      </motion.div>
    </div>
  );
};

export default Calculator;