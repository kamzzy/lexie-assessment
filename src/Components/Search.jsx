import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchNasa, setSearchNasa] = useState([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    fetch('https://images-api.nasa.gov/search?q=center&media_type=image&year_start=2011&year_end=2020')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.collection.items);
        setSearchNasa(data.collection.items);
      });
  },[]);

  return (
    <div className="container">
      <form>
      <input type="search" placeholder="Search Nasa"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
      </form>
      <div className="searchDiv row">
        { searchNasa.filter((item) => {
          if (query === '') {
            return item;
          } else if (item.data[0].title.toLowerCase().includes(query.toLowerCase())) {
            return item;
          }else {
            return null;
          }
        }).map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 gridClass">
            <img src={item.links[0].href} alt={item.data[0].title} className="searchImg" />
            <div className="searchDetails">
              <p><strong>Title:</strong> {item.data[0].title}</p>
              <p><strong>Photographer:</strong> {item.data[0].photographer}</p>
              <p><strong>Location:</strong> {item.data[0].location}</p>
              <span className="linkSpan">
              <Link to={`/:${item.data[0].nasa_id}`} className="seeDetails">SEE DETAILS</Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Search;
