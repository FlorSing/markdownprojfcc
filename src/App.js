import { useState } from 'react';
import Markdown from "marked-react";



export default function App() {
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
            setForm((e.target.value));
          }} 
        />
      

      <p id='preview'>
        markdown preview:

      <Markdown>{form}</Markdown>
      </p>
    </div>
  );
}
