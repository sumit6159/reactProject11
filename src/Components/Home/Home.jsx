import { BookCard } from "../../Components/BookCard/BookCard";
import { SortAndFilterButtons } from "../../Components/SortAndFilterButtons/SortAndFilterButtons";
import React, {useState,useEffect} from 'react'
import axios from "axios";

 export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get('http://localhost:8080/books').then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  const [change, setChange] = useState(false);
  useEffect(()=>{
    getData();
  }, [])
  const handleSort = (sort, value) =>{
    if(sort === 'asc' && value==='title'){
      data.sort((a,b)=> {
        if(a.title>b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)
    }
    if(sort === 'desc' && value==='title'){
      data.sort((a,b)=> {
        if(a.title<b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)

    }
    if(sort === 'asc' && value==='price'){
      data.sort((a,b)=> a.price-b.price)
      setChange(!change)
    }
    if(sort === 'desc' && value==='price'){
      data.sort((a,b)=> b.price-a.price)
      setChange(!change)

    }
  }
  useEffect(()=>{}, [change])

  // const Main = styled.div`
  //   /* Apply some responsive styling to children */
  // `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort}/>

      <div className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
            {data.map(({title,imageUrl,price,id})=>{
          return <BookCard key={id} title={title} imageUrl={imageUrl} price={price} id={id} />
        })}
      </div>
    </div>
  );
};
