import React from 'react';
import Button from './Button';

interface ButtonPanelProps {
  onButtonPress: (value: string) => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({ onButtonPress }) => {
  const buttons = [
    { value: 'C', type: 'function', color: 'bg-red-500' },
    { value: '+/-', type: 'function' },
    { value: '←', type: 'function' },
    { value: '÷', type: 'operator' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '×', type: 'operator' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '-', type: 'operator' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '+', type: 'operator' },
    { value: '0', type: 'number', span: 2 },
    { value: '.', type: 'number' },
    { value: '=', type: 'operator', color: 'bg-purple-600' },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((button, index) => (
        <Button
          key={index}
          value={button.value}
          type={button.type}
          span={button.span}
          color={button.color}
          onPress={() => onButtonPress(button.value)}
        />
      ))}
    </div>
  );
};

export default ButtonPanel;