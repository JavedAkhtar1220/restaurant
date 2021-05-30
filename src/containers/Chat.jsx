import React from 'react';
import Header from '../components/Header';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import '../styles/chat.css';

const Chat = () => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "150px" }}>
                <h1 className="auth_head mt-4">New<span style={{ color: "#37a000" }}>Co</span></h1>
            </div>
            <div className="mt-5">
                <div className="container">
                    <div className="chat_container p-4">
                        <div className="d-flex justify-content-center">
                            <Avatar alt="Remy Sharp" src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" />
                            <h2 className="chat_username">Javed Akthar</h2>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex">
                                    <Avatar alt="Remy Sharp" src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" />
                                    <p className="chat_text ml-3">Hello NewCo Website here</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 ml-auto">
                                <div className="d-flex">
                                    <p className="chat_text mr-3">Hello NewCo Website here</p>
                                    <Avatar alt="Remy Sharp" src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex">
                                    <Avatar alt="Remy Sharp" src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" />
                                    <p className="chat_text ml-3">Hello NewCo Website here</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-6 ml-auto">
                                <div className="d-flex">
                                    <p className="chat_text mr-3">Hello NewCo Website here</p>
                                    <Avatar alt="Remy Sharp" src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="inp_send_message">
                            <input type="text" className="inp_message" placeholder="Type message" />
                            <div className="btn_send">
                                <SendIcon />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chat;