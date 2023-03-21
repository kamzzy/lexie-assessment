import React from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  // const [showNasa, setShowNasa] = useState([]);
  const { id } = useParams();

  return (
    <div>
      <h1>show option {id}</h1>
    </div>
  );
};

export default Show;