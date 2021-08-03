import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ArrayState() {
  const [nums, updateNums] = useState([1,2,3,4]);

  return (
    <>
    <div class="container">
      {nums.map(x=><div>{x}</div>)}
    </div>
    <Button variant="primary" size="sm">Add Number</Button>
    </>
  )
}

export default ArrayState;
