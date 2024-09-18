import { Request, Response } from "express";
import ProductService from "../service/Product.service";
import { productDto, updateProductDto } from "../types/product.dto";

class ProductController {
  
  async create(req: Request, res: Response) {
    try {
      const data: productDto = req.body;
    //   const newProduct = await ProductService.create(data);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error creating product", error });
    }
  }


  async findAll(_req: Request, res: Response) {
    try {
      const products = await ProductService.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  }


  async findOne(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const product = await ProductService.findOne(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Error fetching product", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data: updateProductDto = req.body;
      const updatedProduct = await ProductService.update(data);

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  }
}

export default new ProductController();
