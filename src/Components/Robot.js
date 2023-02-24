import React from 'react';

const Robot = ({ name, email, id }) => {

    return (
        <div className='tc bg-purple hover-bg-light-purple dib br3 pa3 ma3 grow shadow-5 text-white'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Robot;