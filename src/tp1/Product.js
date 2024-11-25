function Produc({ data: { id, title, price, thumbnail }, setData }) {
  const handleInputChange = () => {
    setData((preState) => {
      return [...preState, id];
    });
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-5">
      <div className="card shadow-sm h-100">
        <img
          className="bd-placeholder-img card-img-top"
          src={"pictures/" + thumbnail}
        />
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{price}</p>
          <button
            type="button"
            onClick={handleInputChange}
            className="btn btn-outline-secondary w-100 "
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Produc;
