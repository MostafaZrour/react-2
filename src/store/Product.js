function Product({
  product: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  },
}) {
  return (
    <tr>
      <td className="align-middle">{id}</td>
      <td className="align-middle text-truncate" style={{ maxWidth: "200px" }} title={title}>
        {title}
      </td>
      <td className="align-middle">{price}</td>
      <td className="align-middle text-truncate"
        style={{ maxWidth: "200px" }}
        title={description}
      >
        {description}
      </td>
      <td className="align-middle">
        <span className="badge bg-dark w-100 p-2">{category}</span>
      </td>
      <td className="align-middle">
        <img src={image} alt="" width="50" />
      </td>
      <td className="align-middle">
        <span className="badge bg-warning w-100">Rating : {rate} / 5</span>
        <span className="badge bg-primary w-100">Count : {count}</span>
      </td>
    </tr>
  );
}

export default Product;
