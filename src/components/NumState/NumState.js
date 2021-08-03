import React, {useState} from 'react';

function NumState() {
 const [num, updateNum] = useState(1);
  return (
    <>
      <div class="container">
        num: {num}
      </div>
      <input id="newNum" type='text' />
    </>
  )
}

export default NumState;
