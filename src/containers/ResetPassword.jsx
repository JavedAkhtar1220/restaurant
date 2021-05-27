import React from 'react';
import MailIcon from '@material-ui/icons/Mail';

const ResetPassword = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="row mt-5 mb-5">
                <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h1 className="auth_head mt-4">New<span style={{ color: "#37a000" }}>Co</span></h1>
                            <div className="mt-5">
                                <h1 className="auth_subhead">Reset Password</h1>
                            </div>
                            <form action="" className="mt-5">
                                <div className="mb-4">
                                    <div className="position-relative">
                                        <MailIcon className="auth_icon" />
                                        <input className="inp_login" type="text" placeholder="Enter email" />
                                        <span className="border_bottom"></span>
                                    </div>
                                </div>
                                <button className="btn_login btn-primary">Send Link</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;