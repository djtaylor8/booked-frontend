import React from 'react';

const Audition = (props) => {
    const { audition } = props;
    return (
        <div>
            <div>
                {audition.description} ({audition.location})
            </div>
        </div>
    );
};

export default Audition;