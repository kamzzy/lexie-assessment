import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchNasa, setSearchNasa] = useState([]);
  const [query, setQuery] = useState('');
  const [yearStart, setYearStart] = useState('');
  const [yearEnd, setYearEnd] = useState('');

  useEffect(() => {
    const url = new URL('https://images-api.nasa.gov/search?q=center&media_type=image');
    const params = new URLSearchParams();

    if (yearStart !== '' && yearStart.length === 4) {
      params.set('q', 'center');
      params.set('media_type', 'image');
      params.set('year_start', yearStart);
      url.search = params;
    } else {
      params.delete('year_start');
    }

    if (yearEnd !== '' && yearEnd.length === 4) {
      params.set('q', 'center');
      params.set('media_type', 'image');
      params.set('year_end', yearEnd);
      url.search = params;
    } else {
      params.delete('year_end');
    }
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.collection.items);
        setSearchNasa(data.collection.items);
      });

  }, [yearEnd, yearStart]);

  return (
    <div className="container">
      <form>
        <div className="searchInput">
          <input type="search" placeholder="Search NASA Images..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="filterInput">
        <form>
          <input type="text" name="yearStart" placeholder="filter by start year..."
            onChange={(e) => setYearStart(e.target.value)} />
          <input type="text" name="yearEnd" placeholder="filter by end year..."
            onChange={(e) => setYearEnd(e.target.value)} />
        </form>
      </div>

      <div className="searchDiv row">
        {searchNasa.filter((item) => {
          if (query === '') {
            return item;
          } else if (item.data[0].title.toLowerCase().includes(query.toLowerCase())) {
            return item;
          } else {
            return null;
          }
        }).map((item) => (
          <div key={item.data[0].nasa_id} className="col-12 col-sm-6 col-md-4 col-lg-3 gridClass">
            <img src={item.links[0].href} alt={item.data[0].title} className="searchImg" />
            <div className="searchDetails">
              <p><strong>Title:</strong> {item.data[0].title}</p>
              <p><strong>Photographer:</strong> {item.data[0].photographer}</p>
              <p><strong>Location:</strong> {item.data[0].location}</p>
              <span className="linkSpan">
                <Link to={`/:${item.data[0].nasa_id}`} state={{ item: [item] }} className="seeDetails">SEE DETAILS</Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Search;
