import React  from 'react';

  function PhotoList ({images,limit,max,addToTable,handleShowMoreImages})  {
  return (
  <>
  <h1> Photo List</h1>

  <div className="container">
  {images.slice(0,limit).map((item)=> (
     <div className="imageList" key={item.id}>
     <img src={item.url}  style={{height: 300, width: 300}} alt={item.title} />
    <button className="btn" onClick={() => addToTable(item)}>COMPARE</button></div>
  ))}
  </div>
  <button
    disabled={limit >= max}
    onClick={() => handleShowMoreImages()}
    variant="contained"
  >
    Load More
  </button>
 </>
  )
  }

export default PhotoList;