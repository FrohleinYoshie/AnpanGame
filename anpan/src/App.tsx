import React, { useState } from 'react';
import './App.css';
import Game from './game'; // Gameコンポーネントのインポート

function App() {
  const [gameStarted, setGameStarted] = useState(false); // ゲームが開始されたかどうかの状態

  // ゲームを開始する関数
  const startGame = () => {
    setGameStarted(true); // ゲームが開始されたことを記録
  };

  // ゲームが開始されている場合、Gameコンポーネントを表示する
  if (gameStarted) {
    return <Game />;
  }

  // ゲームが開始されていない場合、スタートボタンを表示する
  return (
    <div className="App">
      <div className="title">あんぱんゲーム</div>
      <button className='Start_Button' onClick={startGame}>Start</button>
    </div>
  );
}

export default App;
