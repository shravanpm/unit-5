import React from 'react'

const CompletedListItem = ({ finishedList }) => {
    console.log(finishedList);
  return <div>
      {
          finishedList.map((e)=>{
              return <h4 style={{"color":"white"}}>{e.title}</h4>
          })
      }
  </div>;
};

export default CompletedListItem