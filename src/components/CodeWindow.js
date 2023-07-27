export default function CodeWindow({ command, output }) {
    let outputLines = output.split("\n");

    return (
        <div className="mockup-code px-2">
            <pre data-prefix="$"><code>{command}</code></pre>
            {outputLines.map((line) => {
                return <pre data-prefix=">" className="whitespace-normal" ><code>{line}</code></pre>
            })}
        </div>
    );
}