import React from 'react';
import './homeStyles.css';

import Button from "../components/Button/Button";

const Body = () =>{
    return(
        <div id = "body">
            <Header/>
            <Card
                className='section'
                title="Assignment 1"
                description='Welcome to my submission of this assignment! It was an interesting one. There was some work put into it. Learned a few things as well!'
            />
            <Button text = "Welcome to the jungle" event = {() => {
                alert("Welcome");
            }}></Button>

        </div>
    )
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'/>
            <br/>
            <span className='header-text'>
                It is finally done!
            </span>
        </div>
    )
}

const Card = (props) =>{
    return(
        <div className={props.className}>
            <div className='small-div'>
                <i className={props.className}/>
            </div>
            <div className = "big-div">
                <span className = 'div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

export default Body;