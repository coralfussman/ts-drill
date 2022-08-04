import { useState } from 'react';
import { palindrome } from './algos/palindrome';
import { reverseInPlace } from './algos/reverseInPlace';
import { reverseWords } from './algos/reverseWords';
import logo from './logo.svg';
import SearchBar from './SearchBar';
import './styling.css';

let searchable = [
  { name: 'Palindrome', func: palindrome },
  { name: 'Reverse In Place', func: reverseInPlace },
  { name: 'Reverse Words', func: reverseWords },
  { name: 'Reverse In Place', func: reverseInPlace },
];

export type Func = string | number | [] | boolean;

function App() {
  const [filtered, setFiltered] = useState(searchable);
  const allProblems = filtered.map((item, i: number) => {
    return (
      <ReusableFunctionWrapper key={i} name={item.name} func={item.func} />
    );
  });
  return (
    <div className="App">
      <Ban />
      <div className="main-container">
        <SearchBar setFiltered={setFiltered} searchable={searchable} />
        {allProblems}
      </div>
    </div>
  );
}

function Ban() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Coral's Algo Playground</h2>
        <p>Hit run to test algos</p>
      </header>
    </>
  );
}

export default App;

interface ReusableFunctionWrapperProp {
  name: string;
  func: () => Func;
}

function ReusableFunctionWrapper({ name, func }: ReusableFunctionWrapperProp) {
  const [answer, setAnswer] = useState<Func>('');
  return (
    <>
      <h2>{name}:</h2>
      <button onClick={() => setAnswer(func())}> Test Code</button>
      <h5>
        result:
        {JSON.stringify(answer)}
      </h5>
    </>
  );
}
