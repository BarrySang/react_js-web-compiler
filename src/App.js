import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import { useState } from 'react';
import { compileAndRun } from './lib/functions';

function App() {
  const [output, setOutput] = useState('');

  const handleRunCode = (code) => {
    compileAndRun(code, setOutput);
  };
  
  const handleClearOutput = () => {
    setOutput('');
  };

  return (
    <div className="App">
       <div className="App">
            <Header />
            <Input onRunCode={handleRunCode} />
            <Output output={output} onClearOutput={handleClearOutput} />
        </div>
    </div>
  );
}

export default App;
