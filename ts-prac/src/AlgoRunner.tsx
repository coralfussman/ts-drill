import { useState } from 'react';

export type Func = string | number | [] | boolean;
export interface AlgoRunnerProps {
  name: string;
  func: () => Func;
}

export default function AlgoRunner({ name, func }: AlgoRunnerProps) {
  const [answer, setAnswer] = useState<string | number | [] | boolean>('');
  function runAlgos(func: () => string | number | [] | boolean) {
    let result = func();

    setAnswer(result);
  }
  return (
    <div className="main-prob">
      <h2>{name}</h2>
      <h4>{answer}</h4>
      <button onChange={() => runAlgos(func)}>Run</button>
    </div>
  );
}
