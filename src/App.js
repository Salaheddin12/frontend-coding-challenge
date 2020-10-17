import React,{useState,useEffect}from 'react';
import axios from 'axios'
import Container from './components/Container';
import './App.css';

function App() {
  const [Data,setData]=useState([]);

  const GenerateStarDate=()=>{
    let date= new Date();
    date.setDate(date.getDate() - 30);
    let month = (date.getMonth()+1).toString();
    let day = date.getDate().toString();
    if(day.length<2)
    day="0"+day;
    if(month.length<2)
    month="0"+month;
    const stringDate=date.getFullYear()+"-"+month+"-"+day;
    console.log("start date",stringDate);
    return stringDate;
  }
  const FetchData= async ()=>{
    const startdate=GenerateStarDate();
    return await axios.get(`https://api.github.com/search/repositories?q=created:>${startdate}&sort=stars&order=desc`);
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
