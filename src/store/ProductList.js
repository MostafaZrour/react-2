import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const displayCategory = () => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];

    return (
      <>
        {uniqueCategories.map((category, index) => (
          <button
            onClick={(e) => setCategory(e.target.value)}
            key={index}
            value={category}
            className={`btn btn-outline-primary ${
              category == selectedCategory ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </>
    );
  };

  const displayProducts = () => {
    let productsTemp = products.filter((product) => {
      return (
        product.id.toString().includes(searchInput) ||
        product.title.includes(searchInput) ||
        product.description.includes(searchInput)
      );
    });

    if (selectedCategory !== "") {
      productsTemp = productsTemp.filter((product) => {
        return product.category === selectedCategory;
      });
    }

    if (productsTemp.length > 0) {
      return productsTemp.map((product, index) => {
        return <Product product={product} key={index} />;
      });
    }
    return (
      <tr>
        <td className="text-center text-danger fw-bold" colSpan="7">
          No Items
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">List Des Produits :</h1>
      <form>
        <div className="row mb-5">
          <div className="col-10 mb-2">
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              id="search"
              className="form-control"
            />
          </div>
          <div className="col-2">
            <input
              type="reset"
              value="Reset"
              className="btn btn-outline-danger w-100"
              onClick={() => {
                setSearchInput("");
                setCategory("");
              }}
            />
          </div>
        </div>
      </form>
      <div className="btn-group w-100 mb-5">{displayCategory()}</div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Title</th>
            <th>Prix</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{displayProducts()}</tbody>
      </table>
    </div>
  );
}

export default ProductList;
