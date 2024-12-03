export function compileAndRun(code, setOutput) {
    try {
        // Simulate compilation by creating a new function
        const compiledFunction = new Function(code);

        // Capture console.log output
        const logs = [];
        const originalConsoleLog = console.log;
        console.log = (message) => logs.push(message);

        // Execute the compiled code
        compiledFunction();

        // Restore original console.log
        console.log = originalConsoleLog;

        // Update the output
        setOutput(logs.join('\n'));
    } catch (error) {
        // Display any compilation/runtime errors
        setOutput(`Error: ${error.message}`);
    }
}
