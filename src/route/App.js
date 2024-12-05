import React from "react";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Contact from "./pages/Contact";
import _404 from "./pages/_404";
import ProductList from "../store/ProductList";
import Container from "../tp1/Container";
import Form from "../Forms/Form"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Container />} />
          <Route path="Products" element={<ProductList />} />
          <Route path="contact" element={<Form />} />
          <Route path="*" element={<_404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
