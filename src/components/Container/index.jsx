import React from 'react';
import styled from "styled-components"
import Card from '../Card'

export const Wraper=styled.div`
    margin: 0 auto;
    width:80%;
    min-height:100vh;
`; 

export default () => {
    return (
       <Wraper>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
       </Wraper>
    );
} ;