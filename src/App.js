import React, { useState, useEffect } from 'react';

export default function App() {
  let [WindowMousePosition, setWindowMousePosition] = useState({});

  function handleMouseMove(e) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  }

  function handleWhereIClick() {
    console.log('Exibir os pontos clicados')
  }

  useEffect(() => {
    window.addEventListener("click", handleMouseMove);
  }, []);

  return (
    <div>
      <div>
        Posição X: {WindowMousePosition.x} <br />
        Posição Y: {WindowMousePosition.y}
      </div>
      <div>
        <button onClick={handleWhereIClick}>Where i click?</button>
      </div>
    </div>
  )

}