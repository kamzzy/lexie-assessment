import React from "react";
import { useLocation } from "react-router-dom";

const Show = () => {
  const location = useLocation();
  const {item } = location.state;

console.log(item);
console.log(item[0].title)

  return (
    <div className="container">
     {item.map(() => (
        <div key={item[0].data[0].nasa_id} className="showDiv">
          <img src={item[0].links[0].href} alt={item[0].data[0].title} className="showImg" />

          <div className="searchDetails">
            <p><strong>Title:</strong> {item[0].data[0].title}</p>
            <p><strong>Photographer:</strong> {item[0].data[0].photographer}</p>
            <p><strong>Location:</strong> {item[0].data[0].location}</p>
            <p><strong>Description:</strong> {item[0].data[0].description}</p>
            <p><strong>Date Created:</strong> {item[0].data[0].date_created}</p>
            <p><strong>Keywords:</strong> {item[0].data[0].keywords.join(', ')} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;