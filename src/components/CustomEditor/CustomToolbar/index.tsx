import React from 'react';

interface ToolbarProps {
  onBoldClick: any;
  onItalicClick: any;
}
const Toolbar = ({ onBoldClick, onItalicClick }: ToolbarProps) => {
  return (
    <div>
      <button onMouseDown={onBoldClick}>Bold</button>
      <button onMouseDown={onItalicClick}>Italic</button>
    </div>
  );
};

export default Toolbar;
