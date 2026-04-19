import { useState } from "react";

export default function AgentsPage() {
  const [result, setResult] = useState("");

  async function runAgent() {
    const res = await fetch("/api/agent/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: "hello" })
    });

    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Agents Test</h1>
      <button onClick={runAgent}>Run Agent</button>
      <pre>{result}</pre>
    </div>
  );
}
