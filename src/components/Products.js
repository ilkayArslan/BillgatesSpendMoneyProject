import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { buySomething, sellSomething } from "../redux/billgatesMoneySlice"
import { AddAmount, RemoveAmount, getbuyitems } from "../redux/productSlice"
function Products() {
    const products = useSelector(state => state.Products.items);
    const remainmoney = useSelector(state => state.BillGatesMoney.remainMoney);
    const dispatch = useDispatch();
    return (
        <div className="container px-5">

            <div className="container row m-auto g-4 px-5 centered">
                {products.map(pro => {
                    return (
                        <div className="col-4 " key={pro.id}>
                            <Card>
                                <div className="text-center py-2 px-1">
                                    <Card.Img variant="top" src={pro.img} className="img-fluid " style={{ height: "225px", width: "225px" }} />
                                </div>
                                <div className="pt-3 text-center ">
                                    <Card.Title className="fw-bolder">{pro.name}</Card.Title>
                                </div>
                                <div className="pb-2 text-center text-success">
                                    <Card.Title className="fw-bold">${pro.price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1' + ".")}</Card.Title>
                                </div>

                                <Card.Footer className="text-center">
                                    <div className="row ">
                                        <div className="col-4">
                                            <Button className="sellbtn px-4 py-2" onClick={() => {
                                                return (
                                                    dispatch(sellSomething(pro.price)),
                                                    dispatch(RemoveAmount(pro.id))

                                                )
                                            }} disabled={pro.amount < 1}>
                                                Sell
                                            </Button>
                                        </div>
                                        <div className="col-4">
                                            <input type="text" className="form-control text-center " onChange={() => { }} value={pro.amount} />
                                        </div>
                                        <div className="col-4">
                                            <Button className="buybtn px-4 py-2" onClick={() => {
                                                return (
                                                    dispatch(buySomething(pro.price)),
                                                    dispatch(AddAmount(pro.id))
                                                )
                                            }} disabled={pro.name === "Mona Lisa" ? pro.amount === 1 : remainmoney < pro.price}>
                                                Buy
                                            </Button>
                                        </div>
                                    </div>

                                </Card.Footer>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div >

    )
}

export default Products