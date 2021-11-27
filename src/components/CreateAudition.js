import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const CREATE_AUDITION_MUTATION = gql`
  mutation PostAudition(
    $description: String!
    $location: String!
  ) {
    post(description: $description, location: $location) {
      id
      createdAt
      location
      description
    }
  }
`;


const CreateAudition = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    description: '',
    location: ''
  });

  const [CreateAudition] = useMutation(CREATE_AUDITION_MUTATION, {
    variables: {
        description: formState.description,
        location: formState.location,
      },
      onCompleted: () => navigate('/')
    });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CreateAudition();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Description"
          />
          <input
            className="mb2"
            value={formState.location}
            onChange={(e) =>
              setFormState({
                ...formState,
                location: e.target.value
              })
            }
            type="text"
            placeholder="Location"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAudition;