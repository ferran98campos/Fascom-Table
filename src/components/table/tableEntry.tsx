import { CustomerOrder } from "../../models/CustomerOrder.ts";
import Status from "../status.tsx";
import React from 'react';

function TableEntry(props: CustomerOrder) {
    return(
    <tr className="text-grey [&>td]:px-4 [&>td]:py-6 [&>td]:text-xs md:[&>td]:text-sm lg:[&>td]:text-base">
        <td className="text-fascom-black font-bold text-xl hidden md:table-cell">{props.id}</td>
        <td className="text-center lg:text-left">
            <p className="hidden lg:table-cell">{props.date.toLocaleDateString()}</p>
            <dl className="lg:hidden">
                <dd className="md:hidden text-fascom-black">ID: {props.id}</dd>
                <dd className="text-grey">{props.date.toLocaleDateString()}</dd>
                <dd><Status status={props.status}></Status></dd>
            </dl>
        </td>
        <td className="text-fascom-black">
            <p className="hidden 2xl:table-cell">{props.customer.name}</p>
            <div className="divide-y sm:divide-none [&>div]:mt-4 2xl:hidden">
                <div>
                    <dl>
                        <dd>{props.customer.name}</dd>
                        <dd className="text-grey">{props.customer.email}</dd>
                        <dd className="text-grey">{props.customer.phone}</dd>
                    </dl>
                </div>
                <div>
                    <dl className="sm:hidden">
                        <dd>{props.deliveryAddress}</dd>
                        <dd>{props.postalCode}</dd>
                        <dd>{props.city}</dd>
                    </dl>
                </div>
                <div>
                    <dl className="sm:hidden">
                        <dd>{props.product}</dd>
                        <dd>{props.quantity} u.</dd>
                        <dd>{props.weight} kg</dd>
                    </dl>
                </div>
            </div>
        </td>
        <td className="hidden 2xl:table-cell">{props.customer.email}</td>
        <td className="hidden 2xl:table-cell">{props.customer.phone}</td>
        <td className="hidden sm:table-cell">
            {props.deliveryAddress}
            <dl className="3xl:hidden">
                <dd>{props.postalCode}</dd>
                <dd>{props.city}</dd>
            </dl>
        </td>
        <td className="hidden 3xl:table-cell">{props.postalCode}</td>
        <td className="hidden 3xl:table-cell">{props.city}</td>
        <td className="hidden sm:table-cell">
            {props.product}
            <dl className="xl:hidden">
                <dd>{props.quantity} u.</dd>
                <dd>{props.weight} kg</dd>
            </dl>
        </td>
        <td className="hidden xl:table-cell">{props.quantity}</td>
        <td className="hidden xl:table-cell">{props.weight} kg.</td>
        <td className="hidden lg:table-cell"><Status status={props.status}></Status></td>
    </tr>
    )
}

export default TableEntry;