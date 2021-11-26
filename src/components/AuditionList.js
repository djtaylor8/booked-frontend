import React from 'react';
import Audition from './Audition'
import { useQuery, gql } from '@apollo/client';

const AUDITIONS_QUERY = gql`
    {
        auditions {
            id {
                auditions {
                    id
                    createdAt
                    location
                    description
                }
            }
        }
    }
`;

const AuditionList = () => {
    const { data } = useQuery(AUDITIONS_QUERY);

    return (
        <div>
            {data && (
                <>
                {data.auditions.auditions.map((audition) => (
                    <Audition key={audition.id} audition={audition} />
                ))}
                </>
            )}
        </div>
    );
};

export default AuditionList;
