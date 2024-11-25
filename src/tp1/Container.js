import Product from "./Product";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Panier from "./Panier";

function Container() {
  const [sharedData, setSharedData] = useState([]);
  const [products, setPro] = useState([
    {
      id: 1,
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "HP16D0195NF.jpg",
    },
    {
      id: 2,
      title: "PC Portable Gamer HP VICTUS",
      price: "2190 DH",
      thumbnail: "HP14424U3EA.jpg",
    },
    {
      id: 3,
      title: "Pc Portable Chromebook Acer",
      price: "3640 DH",
      thumbnail: "NXATHEF002.jpg",
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: "HUA6901443442959.jpg",
    },
  ]);

  const [search, setSearch] = useState("");

  const filtredProducts = products.filter((el) => {
    return (
      el.id.toString().includes(search) ||
      el.title.toLowerCase().includes(search) ||
      el.price.toLowerCase().includes(search)
    );
  });
  return (
    <>
      <Nav setSearch={setSearch} products={products} sharedData={sharedData} />
      <div className="container">
        <div className="row">
          {filtredProducts.length > 0 ? (
            filtredProducts.map((ele, index) => {
              return <Product data={ele} key={index} setData={setSharedData} />;
            })
          ) : (
            <div className="alert alert-danger text-center fw-bold p-5">No items</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Container;
