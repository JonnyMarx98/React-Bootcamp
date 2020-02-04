import React from 'react';
import useToggle from './hooks/useToggle';

export default function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartbroke, toggleIsHeartbroke] = useToggle(false);
  const [isPoo, toggleIsPoo] = useToggle(false);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😊" : "😫"}</h1>
      <h1 onClick={toggleIsHeartbroke}>{isHeartbroke ? "💔" : "💖"}</h1>
      <h1 onClick={toggleIsPoo}>{isPoo ? "Poo" : "Piss"}</h1>
    </div>
  )
}
