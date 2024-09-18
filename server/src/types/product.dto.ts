export interface productDto {
    type?: string;
    description?: string;
    brand?: string;
    model?:string;
    acquisition_date?:string;
    state?: string;
    location?: string;
    dateLastMaintenance?: string;
}

export interface updateProductDto extends productDto{
    id:number
}