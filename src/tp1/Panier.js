import React, { useState } from "react";

export default function Panier({ products, sharedData }) {
  let totalPro = 0;
  let filteredProducts = [];

  const displayPanier = () => {
    filteredProducts = products.filter((product) =>
      sharedData.includes(product.id)
    );

    if (filteredProducts.length > 0) {
      return filteredProducts.map((el) => {
        const quantity = sharedData.filter((ele) => ele == el.id).length;
        const total = quantity * parseFloat(el.price);
        el.quantity = quantity;
        el.total = total;

        totalPro += el.total;

        return (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.price}</td>
            <td>
              <img src={"pictures/" + el.thumbnail} width={70} />
            </td>
            <td>{quantity}</td>
            <td>{total}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr className="text-center">
          <td colSpan="5">No Item</td>
        </tr>
      );
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Price</td>
            <td>Image</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>{displayPanier()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end">
              Total :{" "}
            </td>
            <td>{totalPro}</td>
          </tr>
        </tfoot>
      </table>
      <button
        className="btn btn-outline-success w-100"
        onClick={() => {
          console.log(JSON.stringify(filteredProducts));
        }}
      >
        Validate
      </button>
    </div>
  );
}
