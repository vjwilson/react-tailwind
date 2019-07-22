import React from 'react';

const colorNumbers = Array.from('123456789', x => +x * 100);

function ColorSwatches({ label, color }) {
  const colors = colorNumbers.map(num => (<div key={`bg-${color}-${num}`} className={`w-12 h-12 bg-${color}-${num}`}></div>));

  return (
    <div>
      <h3>{label}</h3>
      <div className="flex">
        {colors}
      </div>
    </div>
  );
}

export default ColorSwatches;
