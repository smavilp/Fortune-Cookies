import React from 'react';

const Proverb = ({text}) => {
  return (
    <blockquote className='App-blockquote'>
      {text}
    </blockquote>
  );
};

export default Proverb;