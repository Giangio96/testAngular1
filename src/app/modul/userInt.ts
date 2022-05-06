export interface User {
    id: string;
    name:string;
    surname: string;
    mail: string;
    imageUrl: string;
    location :Location;
    orders: Orders[];
}

 interface Location {
    address: string;
    city: string;
    cap : string;
}

interface Orders {
    id: string;
    date: string;
    product: Product;
    quantity: number;
}


interface Product {
          name:string;
        price: number;
    }