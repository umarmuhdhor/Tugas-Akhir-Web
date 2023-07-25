import React, { useEffect, useState } from 'react'
import FlatList from 'flatlist-react'
import { getProduct } from '../Services/Product';
import { isEmptyArray, replace } from 'formik';
import { AiFillStar } from 'react-icons/ai'
import {
    FaShoppingBag, FaTwitter, FaLinkedin,
    FaFacebook, FaInstagram, FaYoutube, FaMapMarked, FaPhone, FaEnvelope
} from 'react-icons/fa'
import ReactModal from 'react-modal';

import '../App.css'

const ProductScreen = () => {
    const [data, setData] = useState([]);
    const [dataAwal, setDataAwal] = useState(1);
    const [dataAkhir, setDataAkhir] = useState(6);


    const getAllProducts = async () => {
        try {
            const response = await getProduct();
            const beautyResponse = JSON.stringify(response.data, null, 2);
            setData(response.data);
        } catch (error) {
            console.log("error: ");
        }
    };

    const setLengthFormik = (a, b) => {
        setDataAwal(a)
        setDataAkhir(b)
    }

    useEffect(() => {
        if (data == isEmptyArray()) {
            getAllProducts();
        } else {
            console.log(data)
        }
    }, [data]);

    return (
        <div className="p-3 m-0 border-0 bd-example m-0 border-0">
            <div className="container justify-content-center align-items-center min-vh-10 mb-4" style={{ width: 1000 }}>
                <div className="d-flex border rounded-5 p-3 bg-white shadow">
                    <button className="btn me-3 text-secondary" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <div className="mennu"></div>
                        <div className="mennu"></div>
                        <div className="mennu"></div>
                    </button>
                    <div className="d-flex justify-content-center align-items-center p-3 rounded-4">
                        <div className="letter"><FaShoppingBag className="fas me-1" /></div>
                        <div className="letter">J</div>
                        <div className="letter">W</div>
                        <div className="letter">m</div>
                        <div className="letter">a</div>
                        <div className="letter">r</div>
                        <div className="letter">s</div>
                        <div className="letter">o</div>
                        <div className="letter">n</div>
                    </div>
                    <nav className=" navbar-expand-lg bg-white d-flex">
                        <div className="container-fluid d-flex">
                            <div className="collapse navbar-collapse d-flex" id="navbarTogglerDemo02">
                                <ul className="navbar navbar-nav mb-0 mb-lg-0">
                                    <li className="nav-item me-3 fs-5">
                                    <a className="nav-link" href="/HomeScreen">Home</a>
                                    </li>
                                    <li className="nav-item me-3 fs-5">
                                        <a className="nav-link" href="/ProfileScreen">Profile</a>
                                    </li>
                                    <li className="nav-item me-3 fs-5">
                                        <a className="nav-link active" href="/ProductScreen">Product</a>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <a className="nav-link" href="/ContactScreen">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
                style={{width : 250}}>
                <div className="offcanvas-header d-flex">
                    <div className="featured-image d-flex">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/776/1000/desktop-wallpaper-finding-nemo-shark.jpg"
                            className="border border-primary rounded-circle" style={{width:50,height:50}}/>
                        <h6 style={{marginLeft:10,marginTop:15}}>Umar Muhdhor</h6>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group">
                        <li className="list-group-item disabled p-4" aria-disabled="true">Filter</li>
                        <li className="list-group-item p-4">
                            <small>
                                <div className=" d-flex justify-content-between">
                                    <p>Kategori 1</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>Kategori 2</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>Kategori 3</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>Kategori 4</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Kategori 5</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                            </small>
                        </li>
                        <li className="list-group-item p-4">
                            <small>
                                <div className="d-flex justify-content-between">

                                    <p>Harga</p>
                                    <a className="" data-bs-toggle="collapse" href="#multiCollapseExample1" aria-expanded="true"
                                        aria-controls="multiCollapseExample1"><span aria-hidden="true"></span> tekan </a>
                                </div>
                            </small>
                            <div className="multi-collapse collapse show" id="multiCollapseExample1">
                                <div className="card card-body">
                                    <input type="range" className="form-range" min="0" max="10" id="customRange2" />
                                    <small>
                                        <div className=" d-flex justify-content-between" id="harga">

                                            <p>$ 0</p>
                                            <p>$ 100.000</p>

                                        </div>
                                    </small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container d-flex min-vh-10 justify-content-center" style={{ width: 1200 }}>
                <div className="col-auto p-3 " style={{ width: 800 }}>
                    <div className="row text-md-left" style={{ marginBottom: 20 }}>
                        <h3>Product</h3>
                    </div>
                    {
                        !data ?
                            null
                            :
                            < FlatList
                                list={data}
                                limit={`${dataAwal},${dataAkhir}`}
                                renderItem={(item) =>
                                    <div key={item.id} className="row text-md-left" style={{ marginBottom: 50 }}>
                                        <div className="featured-image col-auto">
                                            <img src={item.image}
                                                className="img-fluid rounded-4" style={{ width: 200, height: 180 }} />
                                        </div>
                                        <div className="col-lg-7 fs-6">
                                            <h5>{item.title}</h5>
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                    <AiFillStar style={{ color: "#EDD146" }} />
                                                </li>
                                                <li className="list-inline-item">
                                                    <p>{item.rating.rate} | {item.rating.count}</p>
                                                </li>
                                            </ul>
                                            <small>
                                                <label htmlFor="kat">Kategori</label>
                                                <p className="text-secondary" id="kat">{item.category}</p>
                                                {/* <label for="des">Deskripsi</label>
                                                <p className="text-secondary" id="des">Fred Perry polo Made in Italy Import dan dijamin original
                                                    100%. Tersedia berbagai jenis ukuran dan type lainnya.</p> */}
                                            </small>
                                            <button type="button" className="btn btn-outline-dark">${item.price}</button>
                                        </div>
                                        <div className="row">
                                            <hr className="mb-2 mt-4" />
                                        </div>
                                    </div >
                                }
                            />
                    }
                    <div className="row mt-4 mb-3">
                        <ul className="pagination justify-content-center">
                            <li className="page-item" aria-current="page">
                                <a className="page-link"
                                    onClick={() => setLengthFormik(1, 6)}>1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link"
                                    onClick={() => setLengthFormik(7, 12)}>2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link"
                                    onClick={() => setLengthFormik(13, 18)} >3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-white pt-5 pb-2">
                <div className="container text-md-left">
                    <div className="row text-md-left">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h2 className="mb-4 font-weight-bold text-warning">JWmarson</h2>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="font-weight-bold mb-4">Company</h5>
                            <small>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>About</a>
                                </p>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>Terms of Use</a>
                                </p>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>Privacy Policy</a>
                                </p>
                            </small>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="font-weight-bold mb-4">Product</h5>
                            <small>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>Trending</a>
                                </p>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>Local Brand</a>
                                </p>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>New Brand</a>
                                </p>
                            </small>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="font-weight-bold mb-4">Contact Support</h5>
                            <small>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>
                                        <FaPhone className="fas" style={{ marginRight: 3 }} />
                                        0788898882888
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>
                                        <FaMapMarked className="fas" style={{ marginRight: 3 }} />
                                        Jl.Kuto Kecik Tj Simuara
                                    </a>
                                </p>
                                <p>
                                    <a href="#" className="text-secondary" style={{ textDecoration: "none" }}>
                                        <FaEnvelope className="fas" style={{ marginRight: 3 }} />
                                        JWmarson@corsec.co.id
                                    </a>
                                </p>
                            </small>
                        </div>
                        <hr className="mb-4 mt-4" />
                        <div className="col-auto mx-auto align-items-center text-secondary">
                            <p>
                                Copyright © 2023 JWmarson Corp. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="btn-floating btn-sm text-white" style={{ fontSize: 23, color: "white" }}>
                                    <FaFacebook className="fab" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="btn-floating btn-sm text-white" style={{ fontSize: 23, color: "white" }}>
                                    <FaInstagram className="fab" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="btn-floating btn-sm text-white" style={{ fontSize: 23, color: "white" }}>
                                    <FaTwitter className="fab" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="btn-floating btn-sm text-white" style={{ fontSize: 23, color: "white" }}>
                                    <FaLinkedin className="fab" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="btn-floating btn-sm text-white" style={{ fontSize: 23, color: "white" }}>
                                    <FaYoutube className="fab" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>


    )
}

export default ProductScreen