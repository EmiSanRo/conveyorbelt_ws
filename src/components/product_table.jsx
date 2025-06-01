import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import productData from "../product_data.json";

const ProductTable = () => {
  const [data, setData] = useState(productData);

  const [newProduct, setNewProduct] = useState({
    aruco_id: "",
    box_type: "",
    Product: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newProduct.aruco_id || !newProduct.box_type || !newProduct.Product)
      return;
    setData([
      ...data,
      { ...newProduct, aruco_id: parseInt(newProduct.aruco_id) },
    ]);
    setNewProduct({ aruco_id: "", box_type: "", Product: "" });
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Aruco ID</strong>
              </TableCell>
              <TableCell>
                <strong>Box Type</strong>
              </TableCell>
              <TableCell>
                <strong>Product</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.aruco_id}>
                <TableCell>{row.aruco_id}</TableCell>
                <TableCell>{row.box_type}</TableCell>
                <TableCell>{row.Product}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <TextField
          label="Aruco ID"
          name="aruco_id"
          value={newProduct.aruco_id}
          onChange={handleChange}
          type="number"
          size="small"
        />
        <TextField
          label="Box Type"
          name="box_type"
          value={newProduct.box_type}
          onChange={handleChange}
          size="small"
        />
        <TextField
          label="Product"
          name="Product"
          value={newProduct.Product}
          onChange={handleChange}
          size="small"
        />
        <Button variant="contained" onClick={handleAdd}>
          Add Product
        </Button>
      </div>
    </>
  );
};

export default ProductTable;
