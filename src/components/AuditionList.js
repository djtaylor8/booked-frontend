import React from 'react';
import Audition from './Audition'
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
    {
        feed {
            id
            auditions {
                id
                createdAt
                location
                description
            }
        }
    }
`;

const AuditionList = () => {
    const { data } = useQuery(FEED_QUERY);

    return (
        <div>
            {data && (
                <>
                {data.feed.auditions.map((audition) => (
                    <Audition key={audition.id} audition={audition} />
                ))}
                </>
            )}
        </div>
    );
};

export default AuditionList;
