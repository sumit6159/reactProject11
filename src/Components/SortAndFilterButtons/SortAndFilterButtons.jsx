import React from "react"
  export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
       <button onClick={()=> {handleSort('asc', 'title')}}>Sort by title Asc</button>
        <button onClick={()=> {handleSort('desc', 'title')}}>Sort by title Desc</button>
        <button onClick={()=> {handleSort('asc', 'price')}}>Sort price Asc</button>
        <button onClick={()=> {handleSort('desc', 'price')}}>Sort price Desc</button>
    </div>
  );
};
