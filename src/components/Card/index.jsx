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

    const GetDateInterval=push_date=>{
      const dateDiff=new Date(Date.now()-Date.parse(push_date));
      return Math.ceil(dateDiff / (1000 * 60 * 60 * 24));
    }
    return (
        <CardWraper as="a" href={html_url} target="_blank" rel="noopener noreferrer">
            <Avatar src={avatar_url} />
            <Details>
                <h3>{name}</h3>
                <p>{description?description:"No description, website, or topics provided."}</p>
                <Badge>Stars: {stargazers_count} </Badge>
                <Badge>Issues: {open_issues_count}</Badge>
                <span> submitted by {login} {GetDateInterval(pushed_at)} days ago</span>
            </Details> 
        </CardWraper> 
    );
};
