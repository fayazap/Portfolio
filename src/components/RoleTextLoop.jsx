import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

// Styled components
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

// Main component
const Bio = {
  roles: ['Web Developer', 'Designer', 'Coder', 'Photographer'],
};

const RoleTextLoop = () => {
  return (
    <TextLoop>
      I am a
      <Span className='text-yellow-400'>
        <Typewriter
          options={{
            strings: Bio.roles,
            autoStart: true,
            loop: true,
          }}
        />
      </Span>
    </TextLoop>
  );
};

export default RoleTextLoop;
