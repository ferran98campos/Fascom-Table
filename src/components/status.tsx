import { OrderStatus, OrderStatusProps } from '../models/CustomerOrder.ts';
import React from 'react';

function Status(props: OrderStatusProps) {
    if (OrderStatus[props.status] == OrderStatus.Cancelled.toString()) {
        return (
            <div className='bg-red text-center rounded-md font-bold text-fascom-black'>
                <p className='text-xs md:text-sm lg:text-base'>Cancelled</p>
            </div>
        )
    }else if (OrderStatus[props.status] == OrderStatus.Sent.toString() || OrderStatus[props.status] == OrderStatus.In_Delivery.toString() || OrderStatus[props.status] == OrderStatus.Registered.toString()) {
        return (
            <div className='bg-fascom-yellow text-center rounded-md font-bold text-fascom-black'>
                <p className='text-xs md:text-sm lg:text-base'>{props.status.toString().replace("_"," ")}</p>
            </div>
        )
    }else {
        return (
            <div className='bg-green text-center rounded-md font-bold text-fascom-black'>
                <p className='text-xs md:text-sm lg:text-base'>Received</p>
            </div>
        )
    }
}

export default Status;