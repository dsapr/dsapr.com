import { useState } from "react";
import styled from "styled-components";
import JsonUtil from "../../utils/JsonUtil";
import StringUtil from "../../utils/StringUtil";
import Head from "next/head";

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

      console.log("===========");
      const strClass = dfs("", jsonObj, 0);
      console.log(strClass);
      setOutText(strClass);
    }
  };

  // 递归拼接字符串生成类
  function dfs(strClass, jsonObj, index) {
    for (const key in jsonObj) {
      if (jsonObj.hasOwnProperty(key)) {
        if (StringUtil.isBlank(strClass)) {
          strClass += "[类注解] \n";
          strClass += "public class ClassName { \n";
        }
        const objType = getType(jsonObj[key]);
        // 添加属性
        strClass += `    [字段注解] \n`;
        strClass += `    public ${objType} ${key}; \n`;
      }
    }
    strClass += "}";
    return strClass;
  }

  function getType(obj) {
    if (Array.isArray(obj)) {
      return "List";
    }
    if (typeof obj === "number") {
      return "int";
    }
    return typeof obj;
  }

  return (
    <Container>
      <Head>
        <title>protobuf工具</title>
      </Head>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Switch</button>
      <Output value={outText} />
    </Container>
  );
}
