import React from 'react';
import './score.css';

interface ScoreProps {
  score: number;
  onRestart: () => void;
  onBackToTitle: () => void; // タイトルへ戻るためのコールバック関数を追加
}

const Score: React.FC<ScoreProps> = ({ score, onRestart, onBackToTitle }) => {
  const generateAnpan = (count: number) => {
    let anpan = '';
    for (let i = 0; i < count; i++) {
      anpan += 'あんぱん ';
    }
    return anpan.trim(); // 末尾の余分な空白を削除
  };

  return (
    <div className="score-container">
      <h1 className="title">スコア: {score}</h1>
      <h2 className="anpan-background">{generateAnpan(score)}</h2>
      <div className="button-container">
        <button className="restart-button" onClick={onRestart}>再開</button>
      </div>
    </div>
  );
};

export default Score;
