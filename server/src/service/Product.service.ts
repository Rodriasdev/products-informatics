import { ProductModel } from "../models/Product.model";
import { updateProductDto, productDto } from "../types/product.dto";


class ProductService {

    constructor(){}


    async create(data: productDto){
        console.log(data);
        
        return await ProductModel.create(data as any)
    }

    async findAll(){
         return await ProductModel.findAll()
    }

    async findOne(id: number){
        return await ProductModel.findOne({
            where: {
                id: id
            }
        })
    }


    async update(data: updateProductDto){
        const product = await this.findOne(data.id)

        if (!product){
            return null
        }

        return await product.update(data)
    }
}

export default new ProductService()