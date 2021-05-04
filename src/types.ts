export interface IProduct {
    id: string,
    name: string,
    make: string,
    price: number,
    description?: string
}

export interface ICartItem {
    id: string,
    name: string,
    make: string,
    price: number,
    description?: string,
    quantity: number
}