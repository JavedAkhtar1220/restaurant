import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const List = props => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-2">
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
                    <h2 className="res_name">{props.type}</h2>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="mb-0 small font-weight-bold">{props.name}</p>
                        </div>
                        <div>
                            <p className="mb-0 small">${props.price}</p>
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
        </div>
    )
}

export default List;