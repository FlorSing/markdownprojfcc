import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';

function App() {
  
  
  
  const [form, setForm] = useState("");
  
  const textAreaStyles = {
    width: 235,
    margin: 5
  };
  
  return (
    <div>

      <p>
        enter text:
        </p>
        <textarea
        style = {textAreaStyles}
        id='editor'
          value={form}
          onChange={e => {
            setForm(e.target.value)
          }} 
        />
      

      <p id='preview'>
        markdown preview:
        
      </p>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(form)}}> 
        
        </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
