import React from 'react';
import { CardWraper ,Avatar, Details,Badge} from './styles';

export default({repository}) => {
   const  {
        name,
        html_url,
        description,
        stargazers_count,
        open_issues_count,
        pushed_at,
        owner
    }= repository;
    const {login,avatar_url}=owner;
    return (
        <CardWraper as="a" href={html_url} target="_blank" rel="noopener noreferrer">
            <Avatar src={avatar_url} />
            <Details>
                <h3>{name}</h3>
                <p>{description?description:"No description, website, or topics provided."}</p>
                <Badge>Stars: {stargazers_count} </Badge>
                <Badge>Issues: {open_issues_count}</Badge>
                <span> submitted by {login} 30 days ago</span>
            </Details> 
        </CardWraper> 
    );
};
