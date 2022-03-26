import React from "react"
  
import { Link } from "react-router-dom";

 export const BookCard = ({id, title, imageUrl, price}) => {
    return (
        <Link to={`/bookdetailspage/${id}`}>
            <div className='bookCard'>
                <img src={imageUrl} alt="" width="100%" height="40%" />
                <h2 className='title'>
                    {title}
                </h2>
                <p className='price'>
                    {price}
                </p>
            </div>
        </Link>
    )

  
};
