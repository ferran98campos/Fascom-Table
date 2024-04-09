import { Customer } from "./Customer";

export enum OrderStatus {
    Registered,
    Sent,
    In_Delivery,
    Delivered,
    Cancelled
}

export interface OrderStatusProps{
    status: OrderStatus;
}

enum Products {
    Fönster,
    Dörrar,
    Isolering,
    Armering,
    Stål
}

export class CustomerOrder {
    id:number;
    customer : Customer;
    city:string;
    postalCode:number;
    deliveryAddress:string;
    product:string;
    quantity:number;
    weight:number;
    date:Date;
    status: OrderStatus;
    
    constructor(id:number, customer:Customer, city:string, postalCode:number, deliveryAddress:string, product:string, quantity:number, weight:number, date:Date, status:OrderStatus){
        this.id = id;
        this.customer = customer;
        this.deliveryAddress = deliveryAddress;
        this.product = product;
        this.quantity = quantity;
        this.weight = weight;
        this.city = city;
        this.postalCode = postalCode;
        this.date = date;
        this.status = status;
    }
}

/*
* Creates a set of random orders and pushes them into an array which is returned.
*/
export function createOrders(number:number, customerList:Customer[]) : CustomerOrder[]
{
    let orders : CustomerOrder[] = [];
    for(let i:number = 0; i < number; i++)
    {
        //Get random numbers for status and user. This will allow us to create orders with random information.
        let randomStatus = Math.floor(Math.random() * Object.keys(OrderStatus).length / 2);
        let randomUser = Math.floor(Math.random() * customerList.length);
        let randomProduct = Math.floor(Math.random() * Object.keys(Products).length/2);
        let randomQuantity = Math.floor(Math.random() * (20 - 1) + 1);
        let randomWeight = Math.floor(Math.random() * (1000 - 20) + 20);
        //Create order
        console.log(OrderStatus[Object.keys(OrderStatus)[randomStatus]])
        let order : CustomerOrder = new CustomerOrder(
            i,
            customerList[randomUser],
            customerList[randomUser].city,
            customerList[randomUser].postalCode,
            customerList[randomUser].address,
            Products[randomProduct],
            randomQuantity,
            randomWeight,
            randomDate(new Date(2024, 3, 1), new Date(2024, 4, 10)),
            OrderStatus[Object.keys(OrderStatus)[randomStatus]]
        )

        //Push order to list
        orders.push(order);
    }
    return orders;
}

/*Extracted from https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
*
* Returns a random date within the given start and end date
*/
function randomDate(start: Date, end:Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}