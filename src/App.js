import React,{useState,useEffect}from 'react';
import axios from 'axios'
import Container from './components/Container';
import './App.css';

function App() {

  const [Data,setData]=useState([])
  const FetchData= async ()=>{
    return await axios.get("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc");
  }

  useEffect(async () => {
    const {data}=await FetchData();
      setData(data.items);
  }, []);
  return (
    <Container repositories={Data} className="App"/>
  );
}

export default App;
