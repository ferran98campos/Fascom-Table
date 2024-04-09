import React, {useState, useEffect} from 'react';
import { Customer } from '../../models/Customer.ts';
import { CustomerOrder, createOrders } from '../../models/CustomerOrder.ts';
import TableEntry from './tableEntry.tsx';

function Table() {
    const numUsers = 20;
    const numOrders = 40;
    const [orders, setOrders] = useState<CustomerOrder[]>();

    /*This useEffect gets random users from an API and generates random orders. A total of 20 as it is right now (const numOrders)
    * Ideally we would have a DB with orders, but this is my workaround for the coding assingment
    * The orders are stored in the 'orders' variable.
    */
    useEffect(() => {
        fetch('https://randomuser.me/api/?results='+numUsers)
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            let customers : Customer[] = [];
            //Retrieve users and build the list
            data.results.forEach(element => {
                //Build the customer using the class Customer and retrieving info from 'https://randomuser.me/'
                let customer : Customer = new Customer(
                    element.name.first + " " + element.name.last,
                    element.email,
                    element.location.city,
                    element.location.postcode,
                    element.location.street.name,
                    element.phone
                );
                customers.push(customer);
            });
            setOrders(createOrders(numOrders, customers));
        });
    }, []);

    return (
            <table className='max-w-full table-auto text-white w-full bg-white text-left [&>tr:nth-child(even)]:bg-fascom-grey font-bold '>
                <tr className='bg-fascom-black [&>th]:px-2 xl:[&>th]:px-4 [&>th]:py-2 xl:[&>th]:py-6 [&>th]:text-xs md:[&>th]:text-sm lg:[&>th]:text-base'>
                    <th className='hidden md:table-cell'>Order n.</th>
                    <th className="text-center sm:text-left table-cell lg:hidden">Order details</th>
                    <th className="hidden lg:table-cell">Date of Order</th>
                    <th className='text-center sm:text-left'>Receiver</th>
                    <th className="hidden 2xl:table-cell">Email</th>
                    <th className="hidden 2xl:table-cell">Phone</th>
                    <th className="hidden sm:table-cell">Delivery Adress</th>
                    <th className="hidden 3xl:table-cell">Postal Code</th>
                    <th className="hidden 3xl:table-cell">City</th>
                    <th className="hidden sm:table-cell">Product</th>
                    <th className="hidden xl:table-cell">Quantity</th>
                    <th className="hidden xl:table-cell">Weight</th>
                    <th className='text-center hidden lg:table-cell'>Status</th>
                </tr>
                {
                    orders?.map(order => {
                        console.log(order);
                        return(<TableEntry 
                                id={order.id}
                                customer={order.customer}
                                city={order.city}
                                postalCode={order.postalCode}
                                deliveryAddress={order.deliveryAddress}
                                product={order.product}
                                quantity={order.quantity}
                                weight={order.weight}
                                date={order.date}
                                status={order.status}
                            ></TableEntry>)
                    })
                }
            </table>
        );
}
  
export default Table;