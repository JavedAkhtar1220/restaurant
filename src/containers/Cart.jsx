import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import items from './items';
import '../styles/cart.css';
const Cart = () => {

    const [arr, setArr] = useState([]);
    const [total, setTotal] = useState(0);

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
            <div style={{ overflowX: 'hidden' }}>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
                        <div className="row">
                            <div className="col-10 mx-auto mt-5">
                                <h1 className="auth_head mt-4">Your <span style={{ color: "#37a000" }}>Cart</span></h1>
                                <div className="mt-5 main_cart_container">
                                    {arr.map((v, i) => {
                                        // { total_price += parseInt(v.price) }
                                        return <div key={i}>
                                            <div className="row h-100 cart_container">
                                                <div className="col-lg-7 col-md-12 col-sm-12 col-12 mb-2">
                                                    <div className="row h-100 mb-5">
                                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                                            <div>
                                                                <IconButton aria-label="favorite" onClick={() => fav(i)}>
                                                                    {v.fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                                                </IconButton>
                                                                <IconButton aria-label="delete">
                                                                    <CloseIcon />
                                                                </IconButton>
                                                            </div>
                                                        </div>
                                                        <div className='col-8 d-flex align-items-center'>
                                                            <img src={v.img} alt={v.name} className="item_img " />
                                                            <div className="ml-3">
                                                                <p className="item_name">{v.name}</p>
                                                                <p className="item_detail">{v.detail}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                                    <div className="row h-100">
                                                        <div className="col d-flex justify-content-center align-items-center">
                                                            <div className="d-flex text-center">
                                                                <Button className="btn_quantity" onClick={() => decQuantity(i)}>-</Button>
                                                                <p className='quantity'>{v.quantity}</p>
                                                                <Button className="btn_quantity" onClick={() => incQuantity(i)}>+</Button>
                                                                {/* <button className="btn_quantity" onClick={() => decreament(i)}>-</button>
                                                                <p className="mb-0 quantity">{v.quantity}</p>
                                                                <button className="btn_quantity" onClick={() => increament(i)}>+</button> */}
                                                            </div>
                                                        </div>
                                                        <div className='col d-flex justify-content-center align-items-center'>
                                                            <div className="text-center">
                                                                <p className="mb-0">Rs. {v.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Divider />
                                        </div>
                                    })}
                                    <div className="container mt-4">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p>Total</p>
                                            </div>
                                            <div>
                                                <p>Rs. {total}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;