import React from 'react';
import { CardWraper ,Avatar, Details,Badge} from './styles';

export default() => {
    return (
        <CardWraper>
            <Avatar/>
            <Details>
                <h3>TensorFlow</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nam repellat expedita </p>
                <Badge>Stars: 1.5k </Badge>
                <Badge>Issues: 2.6k</Badge>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, nam repellat expedita </span>
            </Details> 
        </CardWraper> 
    );
};
