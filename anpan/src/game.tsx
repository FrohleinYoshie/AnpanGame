import React, { useState, useEffect } from 'react';
import './game.css';
import Score from './score';

const Game: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    } else {
      const timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (value === 'あんぱん') {
      setScore(score => score + 1);
      setInputValue('');
    }
  };

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
  };

  if (gameOver) {
    return <Score score={score} onRestart={handleRestart} onBackToTitle={function (): void {
      throw new Error('Function not implemented.');
    } } />;
  }
  

  return (
    <div className="game-container">
      <h1 className='title'>あんぱんゲーム</h1>
      <p className='timer'>制限時間: {timeLeft}秒</p>
      <p className='score'>スコア: {score}</p>
      <input
        className='input'
        type="text"
        value={inputValue}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

export default Game;
