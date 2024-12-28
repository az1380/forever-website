import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
} from "../controllers/poductsController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productrouter = express.Router();

productrouter.post("/add", adminAuth, upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productrouter.post("/remove",adminAuth, removeProduct);
productrouter.get("/list", listProduct);
productrouter.get("/singleProduct", singleProduct);

export default productrouter;
