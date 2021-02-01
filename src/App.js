import React, {useState, useEffect} from 'react';
import './App.css';
import PhotoList from './component/PhotoList';
import Table from './component/Table';


function App() {
  const max = 20;
  const Page_Table = 'table';
  const Page_Photo_List = 'images';
  const api = "https://jsonplaceholder.typicode.com/photos";

  const [images, setImages] = useState([]);
  const [limit, setLimit] = useState(9);
  const [table, setTable] = useState([]);
  const [page, setPage] = useState('images');
 
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        // Filter to Even itemId only
        const filterData = data.filter(x => x.id % 2 === 0);
        setImages(filterData);
      })
      .catch(err => console.log(err));
  };

  const addToTable = (item) => {
    console.log("Image is added to the table.");
    setTable([...table,{...item}]);
    console.log(table);
  }

  const handleShowMoreImages = () => {
    if (limit <= max) {
      setLimit(limit + 3);
    }
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const removeFromTable = (id) => {
    console.log("Image is removed from the table.")
    setTable(table.filter((item) => item.id !== id));
  }

  return (
    <>
    <div>
      <header>
        <button  className="btn2" onClick={() => navigateTo( Page_Table)}> Go to the Table ({table.length})</button>
        <button  className="btn3" onClick={() => navigateTo(Page_Photo_List)}> View Photo List </button>
      </header>

       {/* Page Navigation */}

      {page === Page_Photo_List  && 
      <PhotoList images={images} limit={limit} max={max}
      addToTable={addToTable} handleShowMoreImages={handleShowMoreImages}/>}

      {page ===  Page_Table && 
      <Table table={table} removeFromTable={removeFromTable}/>}
    </div>
    </>
  )
}

export default App;
