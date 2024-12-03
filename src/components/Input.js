import React, { useRef } from 'react';
import '../styles/input.css'

function Input({ onRunCode }) {
    const codeRef = useRef();

    const handleClearInput = () => {
        if (codeRef.current) {
            codeRef.current.value = ''
        }
    }

    return (
        <div className="input">
            <div className="instructions">
                <p>Enter your code below ⬇️</p>
            </div>
            <textarea ref={codeRef} className="code-input"></textarea>
            <button onClick={() => onRunCode(codeRef.current.value)}>Run Code</button>
            <button onClick={handleClearInput}>Clear Console</button>
        </div>
    );
}

export default Input;
