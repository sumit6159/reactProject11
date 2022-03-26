import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'







export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const {id} = useParams();
    const [data, setData] = useState({});
    const [review, setReview] = useState([]);
    const getData = () => {
        axios.get(`http://localhost:8080/books/${id}`).then((response) => {
            setData(response.data);
            setReview(response.data.reviews);
            })
        }
        useEffect(()=>{
        getData();
        }, [])

  return (
    <>
      <div className="bookContainer" key={data.id}>
        <h2 className="title">{data.title}</h2>
        <img className="image" src={data.imageUrl} alt="#" />
        <div className="author">{data.author}</div>
        <div className="description">{data.description}</div>
        <div className="price">{data.price}</div>
        <div className="section">{data.section}</div>
        <div className="isbnNumber">{data.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
          {review.map((el,index)=>{
                return <li key={index}>{el}</li>
            })}
        </ul>
      </div>
    </>
  );
};
