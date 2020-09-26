import React, { useState, useEffect } from "react";
import item1 from "../../assets/pokemon/item1.png";
import item2 from "../../assets/pokemon/item2.png";
import item3 from "../../assets/pokemon/item3.png";
import item4 from "../../assets/pokemon/item5.png";
import item5 from "../../assets/pokemon/item6.png";
import ls1 from "../../assets/shirts/shirt1.png";
import ls2 from "../../assets/shirts/shirt2.png";
import ls3 from "../../assets/shirts/shirt3.png";

const ItemList = [
  { src: item1, id: 1, price: 350 },
  { src: item2, id: 2, price: 450 },
  { src: item3, id: 3, price: 550 },
  { src: item4, id: 4, price: 530 },
  { src: item5, id: 5, price: 750 },
];

const ItemColorList = [
  {src: ls1, id: 1},
  {src: ls2, id: 2},
  {src: ls3, id: 3}
];

const Item = ({ Item, handleClick, Price }) => {
  return (
    <div className="card">
      <div className="m-auto p-3">
        <a href="#" onClick={(e) => handleClick(e, Item, Price)}>
          <img
            src={Item}
            className="card-img-top"
            alt="..."
            style={{ width: "3rem" }}
          />
        </a>
      </div>
    </div>
  );
};

const ItemColor = ({ ItemColor, handleChangeColor }) => {
  return (
    <div className="card">
      <div className="m-auto p-3">
        <a href="#" onClick={(e) => handleChangeColor(e, ItemColor)}>
          <img
            src={ItemColor}
            className="card-img-top"
            alt="..."
            style={{ width: "3rem" }}
          />
        </a>
      </div>
    </div>
  );
};

const List = ({ selectImg, handleClick, handleChangeColor }) => {
  const [price, setPrice] = useState(250);

  useEffect(() => {
    const onPrice = () => {
      if (selectImg.enabled) {
        setPrice(selectImg.price);
      }
    };

    onPrice();
    return () => {};
  }, [selectImg]);

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <h4>Shirt</h4>
        <p>THB{price}.00</p>
      </li>
      <li className="list-group-item">
        <h5>Choose Color</h5>
        <div className="card-group">
          {ItemColorList.map((x, i) => (
            <ItemColor
              ItemColor={x.src}
              key={i}
              handleChangeColor={handleChangeColor}
            />
          ))}
        </div>
      </li>
      <li className="list-group-item">
        <h5>Choose Pattern</h5>
        <div className="card-group">
          {ItemList.map((x, i) => (
            <Item
              Item={x.src}
              Price={x.price}
              key={i}
              handleClick={handleClick}
            />
          ))}
        </div>
      </li>
    </ul>
  );
};

const OverLay = ({ selectImg }) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onclosedto = () => {
      if (selectImg.enabled) {
        setClosed(true);
      }
    };

    onclosedto();
    return () => {};
  }, [selectImg]);

  const handleClosed = (e) => {
    setClosed(!closed);
    e.preventDefault();
  };

  return (
    <>
      {closed && (
        <div className="card-img-overlay" style={{ top: "17%", left: "34%" }}>
          <button
            className="btn btn-link text-danger text-center"
            onClick={handleClosed}
          >
            <i className="fas fa-minus-circle"></i>
          </button>
          <div className="m-auto">
            <img src={selectImg.src} style={{ width: "5rem" }} />
          </div>
        </div>
      )}
    </>
  );
};

function About() {
  const [selectImg, setSelectImg] = useState({
    src: "",
    price: "",
    enabled: false,
  });

  const [color, setcolor] = useState(ls1);

  const handleClick = (e, Item, Price) => {
    setSelectImg({ src: Item, price: Price, enabled: true });
    e.preventDefault();
  };

  const handleChangeColor = (e, ItemColor) => {
    console.log('ItemColor :>> ', ItemColor);
    setcolor(ItemColor);
    e.preventDefault();
  };

  return (
    <div className="container">
      <h3 className="mt-3">Shirt</h3>

      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <div className="card">
              <div className="p-3">
                <img src={color} className="card-img-top" alt="..." />
              </div>
              <OverLay selectImg={selectImg} />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-group">
            <List selectImg={selectImg} handleClick={handleClick} handleChangeColor={handleChangeColor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
