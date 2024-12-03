import '../styles/Output.css'

function Output({ output, onClearOutput }) {
    return (
        <div className="output">
            <p>The result of the code appears below ⬇️</p>
            <textarea 
                className="output-textarea" 
                value={output} 
                readOnly
            ></textarea>
            <button onClick={onClearOutput}>Clear Output</button>
        </div>
    );
}

export default Output;
