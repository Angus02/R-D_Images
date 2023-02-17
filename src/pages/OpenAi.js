import { Configuration, OpenAIApi } from "openai";

import { useState } from "react";
import "../App.css";
import "./Ai.css"

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult ] = useState("");
  const [config, setConfig ] = useState("")
  const [check1, setCheck1 ] = useState("");
  const [check2, setCheck2 ] = useState("");
  const [check3, setCheck3 ] = useState("");


  const configuration = new Configuration({
    apiKey: config,
  });

  const openai = new OpenAIApi(configuration);

  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  const btn1 = () => {
    if(check1 = "")
    {
      return check1;
    }
    else{
      return (!check1);
    }
  }


  const handleChange1 = () => {
    setCheck1(!check1);
  };

  const generateImage = async () => {
    let res;

    if(check1 == "")
    {
      res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
      console.log("not");
    }
    else
    {
      res = await openai.createImage({
        prompt: prompt + "full-frame, high resolution, DSLR, colour correction, 50mm",
        n: 1,
        size: "512x512",
      });
      console.log("yes");
    }

    setResult(res.data.data[0].url);
  };


  const onChangeHandler = event => {
    setConfig(event.target.value);
  }
  

  return (
    <div className="app-main">
      <>
        <div className="centered5">
          <h2>Generate an Image using Open AI API</h2>
        </div>

        <div className="centered">
          <h2>Enter Api Key</h2>
          <input
            type="type"
            name="name"
            onChange={onChangeHandler}
            value={config}
          />
        </div>

        <div className="centered2">
          <textarea
            className="app-input"
            placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />

          <Checkbox 
            label="Value 1"
            value={check1}
            onChange={handleChange1}
          />
        </div>

        <div className="centered3">
          <button onClick={generateImage}>Generate an Image</button>
        </div>
      </>

      <div className="centered4">
        {result.length > 0 ? (
            <>
            <img className="result-image" src={result} alt="result" />
            
            <h2>
              {check1}
            </h2>
            </>
          ) : (
            <>
            </>
          )}
      </div>
    </div>
  );
}

export default App;




//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