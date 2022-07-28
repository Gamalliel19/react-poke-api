import React from 'react';
import '../style.css';

export default function Pagination() {
  const hello = () => {
    alert('hello');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <input onClick={hello} type='text' />
    </div>
  );
}
