import { createContext, useState } from 'react';
import Run from '../config/CHAT-AI';

export const Context = createContext();

const contextProvider = (props) => {

  const [input,setInput] = useState("");
  const [recentPrompt,setRecentPrompt] = useState("");
  const [prevPrompts,setPrevPrompts] = useState([]);
  const[showResult,setShowResult] = useState(false);
  const[loading,setLoading] = useState(false);
  const[resultData,setResultData] = useState("");


  const onSent = async (_prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response = await Run(input)
    setResultData(response)
    setLoading(false)
    setInput("")

  };

  

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
    
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default contextProvider;
