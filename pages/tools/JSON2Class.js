import { useState } from "react";
import styled from "styled-components";
import JsonUtil from "../../utils/JsonUtil";

const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const Input = styled.textarea`
  height: 90vh;
  width: 65vh;
  margin: 2rem;
`;
const Output = styled.textarea`
  height: 90vh;
  width: 65vh;
  margin: 2rem;
`;

export default function MyComponent() {
  const [text, setText] = useState("");
  const [outText, setOutText] = useState("");

  const handleSubmit = (e) => {
    if (!JsonUtil.isJson(text)) {
      alert("Is not json!");
    } else {
      let jsonObj = JSON.parse(text);
      // 格式化输入框json
      setText(JSON.stringify(jsonObj, null, 2));
  
      console.log("===========")
      for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
          const value = jsonObj[key];
          console.log(key + ": " + value,"-type:",typeof(value),"isArr:",Array.isArray(value));
        }
      }
    }
  };

  return (
    <Container>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Switch</button>
      <Output value={outText} />
    </Container>
  );
}
