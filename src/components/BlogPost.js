import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            visible: false,
            userId: "",
            title: "",
            body: "",
            url: "https://jsonplaceholder.typicode.com",
        };
    }

    handleButton = (userId) => {
        alert(userId);
    };

    handleTambahPost = () => {
        this.setState({
            visible: true,
        });
    };

    handleUser = (e) => {
        this.setState({
            userId: e.target.value,
        })
        console.log(this.state.userId);
    };

    handleTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
        console.log(this.state.title);
    };

    handleBody = (e) => {
        this.setState({
            body: e.target.value,
        });
        console.log(this.state.body);
    };

    handleSubmit = () => {
        if (
            this.state.userId !== "" &&
            this.state.title !== "" &&
            !this.state.body !== ""
        ) {
            axios({
                method: "post",
                url: this.state.url + "/add",
                headers: {
                    accept: "*/*",
                },
                data: {
                    userId: this.state.userId,
                    title: this.state.title,
                    body: this.state.body,
                },
            })
                .then((data) => {
                    alert("Post telah ditambahkan!");
                    window.location.reload();
                })
                .catch((error) => {
                    alert("Post gagal ditambahkan!");
                });
        } else {
            alert("Semua kolom wajib diisi!");
        }
    };

    componenDidMount() {
        axios({
            method: "get",
            url: this.state.url + "/posts",
            header: {
                accept: "*//*",
            }
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    post: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>Blog Post</h1>
                    </center>
                    <center>
                        <button onClick={this.handleTambahPost}>Tambah Post</button>
                    </center>

                    <Modal
                        title="Tambah Postingan"
                        centered
                        visible={this.state.visible}
                        onOk={this.handleSubmit}
                        onCancel={() => this.setState({ visible: false })}
                        width={500}>

                        <div style={{ textAlign: "center" }}>
                            <p> UserID :</p> {""}
                            <input type="text" placeholder="userID" onChange={this.handleUser} />
                            <br />

                            <p> Title :</p> {""}
                            <input type="text" placeholder="title" onChange={this.handleTitle} />
                            <br />

                            <p> Content :</p> {""}
                            <input type="text" placeholder="body" onChange={this.handleBody} />
                            <br />
                        </div>
                    </Modal>

                    {this.state.post.map((results, index) => {
                        return (
                            <div className="card" key={results.userId}>
                                <div className="card-body">
                                    <h5 className="card-title">UserID : {results.userId}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Title : {results.title}
                                    </h6>
                                    <p className="card-text">Content : {results.body}</p>
                                </div>
                                <button className="button" onClick={() => this.handleButton(results.userId)}>
                                    {""}
                                    skuy posting lagi!
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}