export interface Product {
    id: number;
name: string;
price: string;
description: string;
images: string[];
}

export interface CartItem {
product: Product;
selectedSize: string;
quantity: number;
selectedImage: number;
}