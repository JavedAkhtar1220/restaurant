import React from 'react';
import Header from '../components/Header';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import '../styles/payment.css';

const Payment = () => {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <div>
            <Header />
            <div style={{ marginTop: '150px' }}>
                <h1 className="payment_head mt-4">New<span style={{ color: "#37a000" }}>Co</span></h1>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12 p-2 order-lg-1 order-md-1 order-sm-2 order-2">
                        <h2 className="billing_head">Delivery Address</h2>
                        <form className="mt-4">
                            <div className="row mb-3">
                                <div className="col-6 px-2">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" placeholder="Enter first Name" className="inp_payment" />
                                </div>
                                <div className="col-6 px-2">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" placeholder="Enter last Name" className="inp_payment" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Address</label>
                                <input type="email" placeholder="" className="inp_payment" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Country</label>
                                <input type="email" placeholder="" className="inp_payment" />
                            </div>
                            <div className="row">
                                <div className="col-4 px-2">
                                    <label htmlFor="country">City</label>
                                    <select className="inp_payment">
                                        <option disabled selected>Choose...</option>
                                        <option value="1">United State</option>
                                        <option value="2">United Kingdom</option>
                                        <option value="3">London</option>
                                    </select>
                                </div>
                                <div className="col-4 px-2">
                                    <label htmlFor="state">State</label>
                                    <select className="inp_payment">
                                        <option disabled selected>Choose...</option>
                                        <option value="1">United State</option>
                                        <option value="2">United Kingdom</option>
                                        <option value="3">London</option>
                                    </select>
                                </div>
                                <div className="col-4 px-2">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="number" placeholder="Zip code" className="inp_payment" />
                                </div>
                            </div>
                        </form>
                        <h2 className="billing_head mt-3">Billing Address</h2>
                        <form className="mt-4">
                            <div className="row mb-3">
                                <div className="col-6 px-2">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" placeholder="Enter first Name" className="inp_payment" />
                                </div>
                                <div className="col-6 px-2">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" placeholder="Enter last Name" className="inp_payment" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email (Optional)</label>
                                <input type="email" placeholder="you@example.com" className="inp_payment" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Address</label>
                                <input type="email" placeholder="1234 Main St" className="inp_payment" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Address 2 (Optional)</label>
                                <input type="email" placeholder="Apartment or suite" className="inp_payment" />
                            </div>
                            <div className="row">
                                <div className="col-4 px-2">
                                    <label htmlFor="country">Country</label>
                                    <select className="inp_payment">
                                        <option disabled selected>Choose...</option>
                                        <option value="1">United State</option>
                                        <option value="2">United Kingdom</option>
                                        <option value="3">London</option>
                                    </select>
                                </div>
                                <div className="col-4 px-2">
                                    <label htmlFor="state">State</label>
                                    <select className="inp_payment">
                                        <option disabled selected>Choose...</option>
                                        <option value="1">United State</option>
                                        <option value="2">United Kingdom</option>
                                        <option value="3">London</option>
                                    </select>
                                </div>
                                <div className="col-4 px-2">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="number" placeholder="Zip code" className="inp_payment" />
                                </div>
                            </div>
                        </form>
                        <div className="my-4">
                            <hr />
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Shipping address is the same as my billing address
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Save this information for next time
                            </label>
                        </div>
                        <div className="my-4">
                            <hr />
                        </div>
                        <div>
                            <h2 className="billing_head">Payment Type</h2>
                            <RadioGroup aria-label="payment" name="payment" value={value} onChange={handleChange}>
                                <FormControlLabel value="apple" control={<Radio />} label="Apple Pay" />
                                <FormControlLabel value="cc" control={<Radio />} label="Credit Card" />

                            </RadioGroup>

                        </div>
                        <form className="mt-4">
                            <div className="row mb-3">
                                <div className="col-6 px-2">
                                    <label htmlFor="holdername">Name on card</label>
                                    <input type="text" placeholder="Holder Full Name" className="inp_payment" />
                                    <p className="text-muted mb-0 small ml-3">Full name as displayed on card</p>
                                </div>
                                <div className="col-6 px-2">
                                    <label htmlFor="lastname">Credit card number</label>
                                    <input type="number" placeholder="Card number" className="inp_payment" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 px-2">
                                    <label htmlFor="holdername">Expiration</label>
                                    <input type="date" placeholder="Holder Full Name" className="inp_payment" />
                                </div>
                                <div className="col-6 px-2">
                                    <label htmlFor="lastname">CVV</label>
                                    <input type="number" placeholder="CVV number" className="inp_payment" />
                                </div>
                            </div>
                        </form>
                        <div className="my-4">
                            <hr />
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            size='large'
                            className="w-100"
                        >
                            Continue to checkout
                                </Button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-2 order-lg-2 order-md-2 order-sm-1 order-1">
                        <h2 className='billing_head'>Your Cart</h2>
                        <div className="payment_cart">
                            <div className="container">
                                <div className="row py-2">
                                    <div className="col-8">
                                        <p className="payment_item_name">Chickne burger</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="payment_item_price">$5.00</p>
                                    </div>
                                    <hr />

                                </div>
                            </div>
                            <div className="container">
                                <div className="row py-2">
                                    <div className="col-8">
                                        <p className="payment_item_name">Chickne burger</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="payment_item_price">$5.00</p>
                                    </div>
                                    <hr />

                                </div>
                            </div>
                            <div className="container">
                                <div className="row py-2">
                                    <div className="col-8">
                                        <p className="payment_item_name">Chickne burger</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="payment_item_price">$5.00</p>
                                    </div>
                                    <hr />

                                </div>
                            </div>
                            <div className="container">
                                <div className="row py-2">
                                    <div className="col-8">
                                        <p className="payment_item_name">Total</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="payment_item_price">$25.00</p>
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

export default Payment;