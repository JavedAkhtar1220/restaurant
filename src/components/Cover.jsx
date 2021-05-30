import React, { useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import '../styles/cover.css';

const Cover = () => {

    const [dropdown, setDropdown] = useState('none');
    const [selectOption, setSelectOption] = useState(1);

    const showHideDropdown = () => {
        if (dropdown === 'none') {
            setDropdown('block');
        }
        else {
            setDropdown('none');
        }
    }

    const closePopup = () => {
        if (dropdown === 'block') {
            setDropdown('none');
        }
    }

    const handleChange = name => {
        if (name === 'now') {
            setSelectOption(1);
        }
        else {
            setSelectOption(2)
        }
        setDropdown('none');
    }

    return (
        <div className="main_container" onClick={closePopup}>
            <div className="container">
                <h2 className='cover_head'>Hungry? You're in the right place</h2>
                <div className="row mt-5">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 mb-lg-0 mb-md-3 mb-sm-3 mb-3">
                                <div className="position-relative">
                                    <LocationOnIcon className="delivery_icon" />
                                    <GpsFixedIcon className="gps_icon" />
                                    <input className="inp_delivery" type="text" placeholder="Enter delivery address" />
                                    <span className="border_bottom"></span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 ">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-12  mb-lg-0 mb-md-0 mb-sm-3 mb-3">
                                        <div className="position-relative">
                                            <button className="btn_select" onClick={showHideDropdown}>
                                                {selectOption === 1 ?
                                                    <>
                                                        <ScheduleIcon className="mr-2" />
                                            Deliver now
                                        </> : <>
                                                        <DateRangeIcon className="mr-2" />
                                                Schedule for later
                                        </>}

                                                {dropdown === 'none' ? <ExpandMoreIcon className="mx-2" /> : <ExpandLessIcon className="mx-2" />}

                                            </button>
                                            <div className="dropdown_menu" style={{ display: dropdown }}>
                                                <div className="dropdown_option" onClick={() => handleChange('now')}>
                                                    <div className="container">
                                                        <div className="row" >
                                                            <div className="col-3">
                                                                <ScheduleIcon />
                                                            </div>
                                                            <div className="col-9">
                                                                <p className="mb-0 mx-2 small">Deliver now</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Divider />
                                                <div className="dropdown_option" onClick={() => handleChange('later')}>
                                                    <div className="container">
                                                        <div name className="row">
                                                            <div className="col-3">
                                                                <DateRangeIcon />
                                                            </div>
                                                            <div className="col-9">
                                                                <p className="mb-0 mx-2 small">Schedule for later</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                        <button className="btn_findfood small w-100 h-auto">
                                            Find Food
                                        </button>
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

export default Cover;