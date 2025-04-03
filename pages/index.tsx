import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string>("");

  async function handleSubmit() {
    try {
      const res = await fetch(`/api?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResult(data.result);
	  setQuery("");
    } catch (error) {
      setResult("Error fetching result.");
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Welcome!!</h1>
      <p>Please enter any question or content in the box below. </p>
	  <p>If it is a piece of information, the start of you input should be &quot;This is information level-your information&quot;</p>
	  <p>If it is a question, the start of you input should be &quot;This is question level-your question&quot;</p>
	  <textarea
	    value={query}
	    onChange={(e) => setQuery(e.target.value)}
        style={{
			width: "400px",
			height: "150px",
			fontSize: "18px",
			whiteSpace: "pre-wrap", // ensures line wrapping and respects whitespace
			overflowWrap: "break-word",
		  }}
      />
	  
	  <br />
      <button onClick={handleSubmit}>Submit</button>
	  <div style={{ marginTop: "20px" }}>
		{result === "" ? ("No Result") : (
			<> <strong>SmartBot:</strong> {result}</>
			)}</div>
			</div>
			);
		}