import React,{useState,useEffect}from 'react';
import axios from 'axios'
import Container from './components/Container';
import './App.css';

function App() {
  const [Data,setData]=useState([]);
  const [pageIndex,setPageIndex]=useState(1);

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
    return stringDate;
  }

  const Paginate=()=>{
    setPageIndex(pageIndex+1)
  }

  const fetchData=async ()=>{
    const startdate=GenerateStarDate();
    const API_ENDPOINT=`https://api.github.com/search/repositories?q=created:>${startdate}&sort=stars&order=desc&page=${pageIndex}`;
    const {data}= await axios.get(API_ENDPOINT);
    setData([...Data,...data.items]);
  }

  useEffect(() => {
    fetchData();
  }, [pageIndex]);
  
  return (
    <Container onPageChange={Paginate} repositories={Data} className="App"/>
  );
}

export default App;
