import React from 'react';
import Robot from './Robot';
import "./Style/Robot.css"
import { Helmet } from 'react-helmet-async';




const AllRobots = ({ database }) => {

    return (
        <>
        <Helmet>
            <title> Robofriends - All Robots </title>
            <meta name='description' content='Robofriends 2.0 - rework of robofriends' />
        </Helmet>
        <div className='robots-page tc'>
            {
                database.map( (user, i) => {
                    return (
                        <Robot 
                            key={i} 
                            id={database[i].id} 
                            name={database[i].name} 
                            email={database[i].email} 
                        />
                    );
            
                })
            }
        </div>
        </>
    );
}


export default AllRobots;