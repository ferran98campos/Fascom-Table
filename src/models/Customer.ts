export class Customer {
    name:string;
    email:string;
    city:string;
    postalCode:number;
    address:string;
    phone:string;

    constructor(name:string, email:string, city:string, postalCode:number, address:string, phone:string){
        this.name = name;
        this.email = email;
        this.city = city;
        this.postalCode = postalCode;
        this.address = address;
        this.phone = phone;
    }
}
