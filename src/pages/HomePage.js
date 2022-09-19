import React from 'react';
import './homeStyles.css';
import {Link} from "react-router-dom";


const HomePage = () => {

    return (
       <div className='main'>
            <h2 className='title'>
                Welcome to the completed assignment!
            </h2>
           <p className='details'>Click on the button below to access the employees page</p>
           <Link to ="/employeePage">Employee Page</Link>
       </div>
    );

}

export default HomePage;