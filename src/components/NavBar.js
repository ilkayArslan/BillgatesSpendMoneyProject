import { useSelector } from "react-redux";
import CountUp from 'react-countup';
import { useEffect, useState } from "react";

function NavBar() {
    const remainmoney = useSelector(state => state.BillGatesMoney.remainMoney);
    const allMoney = useSelector(state => state.BillGatesMoney.allMoney)

    return (
        <div className="container px-5 fixNav">
            <div className="px-5 centered">
                <div className="bg-white fw-bold text-center text-white container py-3" id="money">
                    $<CountUp start={allMoney} end={remainmoney} formattingFn={(remainMoney) => remainMoney.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1' + ".")} />

                </div>
            </div>

        </div>

    )
}

export default NavBar