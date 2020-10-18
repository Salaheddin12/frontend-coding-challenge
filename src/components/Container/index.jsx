import React from 'react';
import Card from '../Card'
import styled from "styled-components"
import InfiniteScroll from 'react-infinite-scroll-component';

export const Wraper=styled.div`
    margin: 0 auto;
    width:80%;
    min-height:100vh;
`; 

export default ({repositories,refValue,onPageChange}) => {
    
    const isLastItem=(item)=>{
        const lastIndex=repositories.length-1;
        console.log(lastIndex,repositories.indexOf(item));
        return repositories.indexOf(item)===lastIndex?refValue:null;
    }

    return (
       <Wraper>
        <InfiniteScroll 
            dataLength={repositories.length}
            next={()=>onPageChange()}
            hasMore={true}>
            {
             repositories.map((repo)=> <Card refVal={isLastItem(repo)} key={repo.id} repository={repo}/>)
            }
        </InfiniteScroll>
       </Wraper>
    );
} ;