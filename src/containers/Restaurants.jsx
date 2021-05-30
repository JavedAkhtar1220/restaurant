import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Header from '../components/Header';
import Checkbox from '@material-ui/core/Checkbox';
import List from '../components/List';
import '../styles/restaurants.css';

const Restaurants = () => {

    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    return (
        <div>
            <Header />
            <div style={{ marginTop: '150px', overflowX: 'hidden' }}>
                <h1 className="auth_head">Popular Restaurants</h1>
                <div className="row mt-5">
                    <div className="col-4">
                        <div className="container">
                            <div className="filter_container">
                                <div>
                                    <p className="mb-2 font-weight-bold small">SORT BY</p>
                                    <select className="inp_sort">
                                        <option selected disabled>Sort by</option>
                                        <option value="1">Category</option>
                                        <option value="1">Rating</option>
                                        <option value="1">Name</option>
                                    </select>
                                </div>
                                <p className="mb-2 mt-3 font-weight-bold small">CATEGORIES</p>
                                <div className="mb-3 category_container">
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Primary"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Burgers"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Pizza"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Bakery"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Bakery"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Bakery"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2 mt-3 font-weight-bold small">RATING</p>
                                    <select className="inp_sort">
                                        <option selected disabled>Sort by</option>
                                        <option value="1">Category</option>
                                        <option value="1">Rating</option>
                                        <option value="1">Name</option>
                                    </select>
                                </div>
                                <p className="mb-2 mt-3 font-weight-bold small">SEARCH BY RESTAURANT NAME</p>
                                <div className="mb-3 res_name_container">
                                    <input type="search" className="inp_search_res" placeholder="Enter restaurant name" />
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Restaurant 1"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Restaurant 2"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Restaurant 3"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Restaurant 4"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Restaurant 5"
                                        />
                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                />
                                            }
                                            label="Restaurant 6"
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-secondary form-control">
                                        Filter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="container">
                            <div className="row">
                                <List type="Burger" name="Best Burgers" price="5.00" />
                                <List type="Burger" name="Best Burgers" price="8.00" />
                                <List type="Pizza" name="Crazy Pizza" price="23.00" />
                                <List type="Pizza" name="Touchable Pizza" price="60.00" />
                                {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-2">
                                    <div className="restaurants_list border shadow">
                                        <div className="img_container">
                                            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="asdad" className="res_img" />
                                            <div className="rating">
                                                <div className="container">
                                                    <p className="mb-0"><StarBorderIcon /> 5.0/5</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container mt-3 mb-4">
                                            <h2 className="res_name">McDonalds</h2>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <p className="mb-0 small font-weight-bold">Best Burgers</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 small">$5.00</p>
                                                </div>
                                            </div>
                                            <div className="my-2">
                                                <p className="mb-0 small text-muted">Open Time 12:30 pm to 1:30 pm</p>
                                                <p className="mb-0 small text-muted">Delivery Time 30 Min</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="btn btn-secondary">Order now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurants;