export interface productDto {
    id?: string;
    name?:string
    description?: string;
    brand?: string;
    model?:string;
    acquisition_date?:string;
    state?: string;
    location?: string;
}

// export interface updateProductDto extends productDto{
//     id:number
// }