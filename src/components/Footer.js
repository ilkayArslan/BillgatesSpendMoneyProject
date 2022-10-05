import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

function Footer() {
    const buyitems = useSelector(state => state.Products.buyitems);
    const sellMoney = useSelector(state => state.BillGatesMoney.sellMoney)

    return (
        <div className=" container px-5">
            {buyitems.length > 0 && <h2 className="text-center">Price List</h2>}
            <div className="container px-5">
                {buyitems.map(item => {
                    return (
                        <ul key={item.id} className="py-1 ps-5" >
                            <li className="col-4">
                                {item.name}
                            </li>
                            <li className="text-center col-4">
                                {item.amount}
                            </li>
                            <li className="text-end text-success fw-bolder col-4">
                                ${(item.price * item.amount).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1' + ".")}
                            </li>
                        </ul>
                    )
                })}
                {buyitems.length > 0 &&
                    <div className="fw-bolder text-center d-flex justify-content-between align-items-center  border-top border-4"><span className="ps-4" >Toplam:</span> <span className="text-success fs-3 pe-3 fw-bolder">${sellMoney.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1' + ".")}</span> </div>}
            </div>

        </div>
    )
}

export default Footer