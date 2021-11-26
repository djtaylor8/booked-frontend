import React from 'react';
import Audition from './Audition'

const AuditionList = () => {
    const auditionsToRender = [
      {
        id: '1',
        description:
          'Big audition test 1',
        location: 'My living room'
      },
      {
        id: '2',
        description: 'Jailbreak',
        location: 'Green Casting'
      }
    ]
    return (
        <div>
            {auditionsToRender.map((audition) => (
                <Audition key={audition.id} audition={audition} />
            ))}
            
        </div>
    );
};

export default AuditionList;
