import React from 'react';

function Table({ table, removeFromTable }) {
  return (
    <>
    <h1> Table </h1>
    <table className="styleTable" >
          <thead>
           <tr>
           <th ><h1>Image</h1> </th>
           <th > <h1>URL</h1></th>
           <th ><h1>Title</h1></th>
           </tr>
          </thead> 
  
          {table.map((item)=> (
           <>
              <tbody  rowkey={item.id}>
              <tr key={item.id} >
              <td className="imageTable">
              <img  src={item.url} alt={item.title}  style={{height: 300, width: 300}}/>
              <button className="btnTable" onClick={() => removeFromTable(item.id)}>
                REMOVE</button>
               </td>
              <td  className="tableUrl">{item.url}</td>
              <td className="tableTitle"> {item.title} </td>
              </tr>
              </tbody>  
              </>
              ))}
         </table>   
      </>
  )
}

export default Table;
