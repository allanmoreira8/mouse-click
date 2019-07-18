import React, { useState, useEffect } from 'react';

export default function App() {
  const [MouseClicked, setMouseClicked] = useState([]);

  function handleMouseMove(e) {
    setMouseClicked([...MouseClicked, {
      x: e.pageX,
      y: e.pageY
    }]);
    console.log(`Adicionando mais um -> ${MouseClicked.length + 1}`)
  }

  function handleWhereIClick(e) {
    MouseClicked.map(mouse => (
      console.log(mouse)
    ))
  }

  useEffect(() => {
    window.addEventListener("click", handleMouseMove);
    return () => {
      window.removeEventListener("click", handleMouseMove)
    }
  }, [handleMouseMove]);

  return (
    <div>
      <div>
        <button onClick={handleWhereIClick}>Where i clicked?</button>
      </div>
      <div>
        <ul>
        {
          MouseClicked.map(mouse => (
            <li key={Math.random()}>{mouse.x} / {mouse.y}</li>
          ))
        }
        </ul>
      </div>
    </div>
  )

}