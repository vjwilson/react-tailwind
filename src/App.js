import React from 'react';
import logo from './logo.svg';
import './App.css';

import ColorSwatches from './components/ColorSwatches';

function App() {
return (
    <div className="App">
      <header className="App-header">
        <h1>
          Examples of Tailwind classes
        </h1>
      </header>
      <main className="my-4 mx-auto max-w-6xl">
        <section>
          <h2>Borders</h2>
          <div className="flex flex-wrap w-1\/2 justify-around">
            <div className="flex flex-wrap justify-around p-3">
              <div className="w-24 h-12 border m-2"></div>
              <div className="w-24 h-12 border-2 m-2"></div>
              <div className="w-24 h-12 border-4 m-2"></div>
              <div className="w-24 h-12 border-8 m-2"></div>
            </div>
            <div className="flex flex-wrap justify-around p-3">
              <div className="w-24 h-12 border rounded-sm m-2"></div>
              <div className="w-24 h-12 border-2 rounded-sm m-2"></div>
              <div className="w-24 h-12 border-4 rounded-sm m-2"></div>
              <div className="w-24 h-12 border-8 rounded-sm m-2"></div>
            </div>
            <div className="flex flex-wrap justify-around p-3">
              <div className="w-24 h-12 border rounded m-2"></div>
              <div className="w-24 h-12 border-2 rounded m-2"></div>
              <div className="w-24 h-12 border-4 rounded m-2"></div>
              <div className="w-24 h-12 border-8 rounded m-2"></div>
            </div>
            <div className="flex flex-wrap justify-around p-3">
              <div className="w-24 h-12 border rounded-lg m-2"></div>
              <div className="w-24 h-12 border-2 rounded-lg m-2"></div>
              <div className="w-24 h-12 border-4 rounded-lg m-2"></div>
              <div className="w-24 h-12 border-8 rounded-lg m-2"></div>
            </div>
            <div className="flex flex-wrap justify-around p-3">
              <div className="w-24 h-12 border rounded-full m-2"></div>
              <div className="w-24 h-12 border-2 rounded-full m-2"></div>
              <div className="w-24 h-12 border-4 rounded-full m-2"></div>
              <div className="w-24 h-12 border-8 rounded-full m-2"></div>
            </div>
          </div>
        </section>
        <section>
          <h2>Color Swatches</h2>
          <div className="flex flex-wrap w-1\/2 justify-around">
            <ColorSwatches label="Grays" color="gray"></ColorSwatches>
            <ColorSwatches label="Reds" color="red"></ColorSwatches>
            <ColorSwatches label="Oranges" color="orange"></ColorSwatches>
            <ColorSwatches label="Yellows" color="yellow"></ColorSwatches>
            <ColorSwatches label="Greens" color="green"></ColorSwatches>
            <ColorSwatches label="Teals" color="teal"></ColorSwatches>
            <ColorSwatches label="Blues" color="blue"></ColorSwatches>
            <ColorSwatches label="Indigos" color="indigo"></ColorSwatches>
            <ColorSwatches label="Purples" color="purple"></ColorSwatches>
            <ColorSwatches label="Pinks" color="pink"></ColorSwatches>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
