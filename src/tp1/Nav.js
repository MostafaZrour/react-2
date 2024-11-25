import Panier from "./Panier";
import { useState } from "react";

export default function Nav({ setSearch, products, sharedData }) {
  const [mode,setMode] = useState(false);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <nav className={`navbar px-5 py-3 shadow ${!mode ? "navbar-dark bg-dark" : "navbar-light bg-ligth"}`}>
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleInput}
        />
      </form>
      <div className="d-flex gap-2 align-items-center">
      <button
        type="button"
        className="btn btn-primary position-relative"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-cart"></i>
        {sharedData.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {sharedData.length}
          </span>
        )}
      </button>
      <div
      onClick={() => setMode(prevState => !prevState)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "60px",
        height: "30px",
        backgroundColor: mode ? "#333" : "#f9d71c",
        borderRadius: "15px",
        cursor: "pointer",
        position: "relative",
        padding: "5px",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: mode ? "#fff" : "#ffa500",
          boxShadow: mode ? "0 0 10px #fff" : "0 0 10px #f9d71c",
          position: "absolute",
          top: "50%",
          left: mode ? "35px" : "5px",
          transform: "translateY(-50%)",
          transition: "left 0.3s ease, background-color 0.3s ease",
        }}
      ></div>
      <span
        style={{
          fontSize: "12px",
          color: mode ? "#fff" : "#333",
          position: "absolute",
          right: "5px",
        }}
      >
        {mode ? "🌙" : "☀️"}
      </span>
    </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Panier :
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Panier products={products} sharedData={sharedData} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
