import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Header from '../components/Header';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import items from './items';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/cart.css';

const Cart = () => {

    const [arr, setArr] = useState([]);
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        var total_price = 0;
        items.map(v => {
            total_price += parseInt(v.quantity) * parseInt(v.price);
            setTotal(total_price);
            setArr(pre => [
                ...pre,
                v
            ])
        })
    }, []);

    const incQuantity = i => {
        let newArr = [...arr];
        newArr[i].quantity += 1
        setTotal(total + newArr[i].price);
        setArr(newArr);
    }

    const decQuantity = i => {
        if (arr[i].quantity > 1) {
            let newArr = [...arr];
            newArr[i].quantity -= 1
            setTotal(total - newArr[i].price);
            setArr(newArr);
        }
    }

    const fav = i => {
        if (arr[i].fav) {
            let newArr = [...arr];
            newArr[i].fav = false;
            setArr(newArr);
        }
        else {
            let newArr = [...arr];
            newArr[i].fav = true;
            setArr(newArr);
        }

    }

    return (
        <div>
            <Header />
            <div style={{ marginTop: "150px" }}>
                <h1 className="auth_head mt-4">New<span style={{ color: "#37a000" }}>Co</span></h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className='col-lg-8 col-md-12 col-sm-12 col-12 mb-lg-0 mb-md-3 mb-sm-3 mb-3 px-2'>
                        <hr />
                        {arr.map((v, i) => {
                            return <div className="row py-3" key={i}>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 pb-2">
                                            <img src={v.img} alt={v.name} className="item_img img-fluid" />
                                        </div>
                                        <div className="col-6 pl-2">
                                            <p className="item_name">{v.name}</p>
                                            <p className="item_detail">{v.detail}</p>
                                            <button className="btn_change small" onClick={handleShow}>Change</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <p className="mb-0">${v.price}</p>
                                </div>
                                <div className="col-4" style={{ position: 'relative' }}>
                                    <div className="d-flex">
                                        <button className="btn_quantity" onClick={() => decQuantity(i)}>-</button>
                                        <p className='quantity'>{v.quantity}</p>
                                        <button className="btn_quantity" onClick={() => incQuantity(i)}>+</button>
                                    </div>
                                    <div className="m-auto" style={{ position: 'absolute', right: "20%", bottom: 0 }}>
                                        <IconButton aria-label="favorite" onClick={() => fav(i)}>
                                            {v.fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        })}
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-12 summary_cart'>
                        <div>
                            <h1 className="small text-center">13 Items in your Bag</h1>
                        </div>
                        <hr />
                        <div className="summary_subtotal">
                            <div className="d-flex justify-content-between">
                                <div>
                                    Subtotal
                                </div>
                                <div>
                                    ${total}
                                </div>
                            </div>
                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    Shipping Fee
                                </div>
                                <div>
                                    $0
                                </div>
                            </div>
                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    Sales Tax
                                </div>
                                <div>
                                    $0
                                </div>
                            </div>
                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    Tips
                                </div>
                                <div>
                                    $0
                                </div>
                            </div>
                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    Others
                                </div>
                                <div>
                                    $0
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="subtotal_title">
                                Total
                                </div>
                            <div>
                                ${total}
                            </div>
                        </div>
                        <div className="mt-3">
                            <Button variant="contained" color="primary" className="w-100">
                                Go to Secure checkout
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered className="modal_container">
                <Modal.Body>
                    <p className="mb-2 small font-weight-bold">Burger/Sandwich Premium Add Ons</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Add American Cheese"
                            />
                        </div>
                        <div>
                            <p className="">+$0.55</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Add Avocado"
                            />
                        </div>
                        <div>
                            <p className="">+$0.55</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Add Bacon"
                            />
                        </div>
                        <div>
                            <p className="">+$0.55</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Add Portabella Mushroom"
                            />
                        </div>
                        <div>
                            <p className="">+$0.55</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Add White American"
                            />
                        </div>
                        <div>
                            <p className="">+$0.55</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Restaurant 4"
                            />
                        </div>
                        <div>
                            <p className="">+$0.55</p>
                        </div>
                    </div>

                    <p className="mb-2 small font-weight-bold">Removeable</p>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Easy Cucumber"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Extra Cucumber"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="No Cucumber"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Easy Lettuce"
                        />
                    </div>

                    <div className="d-flex justify-content-between">
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Restaurant 4"
                            />
                        </div>
                        <div>
                            <p className="">+$0.55</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Cart;