import React from "react";
import shirt1 from "../../../assets/2fbb6650a2b6b07aee93909b1f248e24.png";
import shirt2 from "../../../assets/4ebe50e2495b17a79c31e48a0e54883f.png";
import shirt3 from "../../../assets/bdefcbc72735f64db17f3250b1e64245.png";

const Card = ({ Title, Price, src }) => {
  return (
    <div class="card">
      <div className="px-3 pt-3 pb-0">
        <img src={src} class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">{Title}</h5>
        <p class="card-text">THB{Price}.00</p>
        <a href="#" class="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  );
};

function HomeContent() {
  const ls = [
    {
      Title: "Shirt",
      Price: "250",
      src: shirt1,
    },
    {
      Title: "Shirt",
      Price: "250",
      src: shirt1,
    },
    {
      Title: "Shirt",
      Price: "250",
      src: shirt2,
    },
    {
      Title: "Shirt",
      Price: "250",
      src: shirt2,
    },
    {
      Title: "Shirt",
      Price: "250",
      src: shirt3,
    },
    {
      Title: "Shirt",
      Price: "250",
      src: shirt3,
    },
  ];

  return (
    <div className="row">
      {ls.map((x, i) => (
        <div className="col-md-3" key={i}>
          <Card Title={x.Title} Price={x.Price} src={x.src} />
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
