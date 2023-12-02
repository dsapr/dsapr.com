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

      const strClass = dfs("", jsonObj, 0);

      setOutText(strClass);
    }
  };

  const INDENT = "    "; // 四个空格的缩进
  // 递归拼接字符串生成类
  function dfs(strClass, jsonObj, index) {
    // 放置当前 object 中的 object 属性
    let objs = [];
    const CUR_INDENT = getCurIndent(index);
    const CUR_CLASS_INDENT = getCurClassIndent(index);
    let curStrClass = "";

    let fieldIndex = 0;
    for (const key in jsonObj) {
      if (jsonObj.hasOwnProperty(key)) {
        let value = jsonObj[key];
        if (StringUtil.isBlank(curStrClass)) {
          curStrClass += `${CUR_CLASS_INDENT}[ProtoBuf.ProtoContract()] \n`;
          curStrClass += `${CUR_CLASS_INDENT}[public class ClassName_${index+1} { \n \n`;
        }
        const objType = getType(value);
        // 添加属性
        curStrClass += `${CUR_INDENT}[ProtoBuf.ProtoMember(1)] \n`;
        curStrClass += `${CUR_INDENT}public ${objType} ${key}_${index+1}-${fieldIndex+1}; \n \n`;

        if (objType === "object") {
          objs.push({ className: key, classObj: value });
        }
      }

      fieldIndex++;
    }
    strClass += curStrClass;
    // 在此构造内部类
    for (const o in objs) {
      // 把最后一层返回给 0 层
      strClass = dfs(strClass, objs[o].classObj, index + 1);
    }

    strClass += `${CUR_CLASS_INDENT}} \n`;

    if (index === 0) {
      console.log("=======", index);
      console.log("strClass", strClass);
    }

    return strClass;
  }

  function getCurIndent(index) {
    let strRes = INDENT;
    for (let i = 0; i < index; i++) {
      strRes += INDENT;
    }
    return strRes;
  }

  function getCurClassIndent(index) {
    let strRes = "";
    for (let i = 0; i < index; i++) {
      strRes += INDENT;
    }
    return strRes;
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
