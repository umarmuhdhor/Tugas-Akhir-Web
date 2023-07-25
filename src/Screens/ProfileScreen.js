import React, { useEffect, useState } from 'react'
import {
    FaShoppingBag, FaTwitter, FaLinkedin,
    FaFacebook, FaInstagram, FaYoutube, FaMapMarked, FaPhone, FaEnvelope
} from 'react-icons/fa'
import { getOneUser, getUser } from '../Services/Product'
import StorageKey from '../Constant/StorageKey'

const ProfileScreen = () => {
    const [idProfile, setIdProfile] = useState()
    const [profile, setProfile] = useState()

    const getProfileUser = async () => {
        try {
            const response = await getOneUser(idProfile);
            const beautyResponse = JSON.stringify(response.data, null, 2);
            console.log(beautyResponse)
            setProfile(response.data)
            console.log(profile)
            // console.log(profile.data)
        } catch (error) {
            console.log("error: get");
        }
    }


    const cekUsername = async () => {
        try {
            const response = await getUser();
            // console.log(response.data.length)
            const username = localStorage.getItem(StorageKey.USERNAME)
            // console.log(username)
            const password = localStorage.getItem(StorageKey.PASSWORD)
            // console.log(response.data[1].username)

            for (let a = 0; a < response.data.length; a++) {
                if (response.data[a].username == username) {
                    setIdProfile((a + 1))
                    // console.log(a)
                    break;
                }
            }

        } catch (error) {
            console.log("error: cekuesername");
        }
        console.log("selesai")
    }

    useEffect(() => {
        {
            idProfile ? getProfileUser() : cekUsername()
        }
    }, [idProfile])

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
                                        <a className="nav-link active" href="/ProfileScreen">Profile</a>
                                    </li>
                                    <li className="nav-item me-3 fs-5">
                                        <a className="nav-link" href="/ProductScreen">Product</a>
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
                style={{ width: 250 }}>
                <div className="offcanvas-header d-flex">
                    <div className="featured-image d-flex">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/776/1000/desktop-wallpaper-finding-nemo-shark.jpg"
                            className="border border-primary rounded-circle" style={{ width: 50, height: 50 }} />
                        <h6 style={{ marginLeft: 10, marginTop: 15 }}>Umar Muhdhor</h6>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="list-group">
                        <li className="list-group-item disabled p-4" aria-disabled="true">Daftar</li>
                        <li className="list-group-item p-4">
                            <small>
                                <div className=" d-flex justify-content-between">
                                    <p>Toko 1</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>Toko 2</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>Toko 3</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className=" d-flex justify-content-between">
                                    <p>Toko 4</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Toko 5</p>
                                    <span aria-hidden="true">&rsaquo;</span>
                                </div>
                            </small>
                        </li>
                        <li className="list-group-item p-4">
                            <small>
                                <div className="d-flex justify-content-between">

                                    <p>Tambah Toko</p>
                                    <a href="" className="text-secondary">
                                        <i className="far fa-plus-square"></i>
                                    </a>
                                </div>
                            </small>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center min-vh-10 mb-4" style={{ width: 1000 }}>
                <div className="d-flex border rounded-5 p-3 bg-white shadow">
                    <div className="col-md-6 rounded-4 justify-content-center p-3" style={{ width: 300 }}>
                        <div className="row text-center">
                            <div className="featured-image">
                                <img src="https://e1.pxfuel.com/desktop-wallpaper/776/1000/desktop-wallpaper-finding-nemo-shark.jpg"
                                    className="border border-primary rounded-circle" style={{ width: 250, height: 250 }} />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <h3>Hello !!</h3>
                            <h4>Toko Pakaian Umar</h4>
                            <div className="container">
                                <div className="row p-3 text-md-left">
                                    <button className="text-secondary mb-3" style={{
                                        borderTop: "none",
                                        borderBottom: "none",
                                        borderRightColor: "none",
                                        textAlign: "left",
                                        paddingLeft: 30
                                    }}>
                                        <i className="far fa-user-circle"></i>
                                        My Info
                                    </button>
                                    <button className="text-secondary mb-3" style={{
                                        borderTop: "none",
                                        borderBottom: "none",
                                        borderRightColor: "none",
                                        textAlign: "left",
                                        paddingLeft: 30
                                    }}>
                                        <i className="far fa-calendar-alt"></i>
                                        Product
                                    </button>
                                    <button className="text-secondary mb-3" style={{
                                        borderTop: "none",
                                        borderBottom: "none",
                                        borderRightColor: "none",
                                        textAlign: "left",
                                        paddingLeft: 30
                                    }}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        profile ?
                            <div className="d-flex p-3">
                                <div className=" row align-items-center ">
                                    <div className="header-text mb-4">
                                        <h3>My Info</h3>
                                        <h5 className="text-secondary">Contact Details</h5>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg fs-6"
                                            id="exampleInputEmail1"
                                            readOnly={true}
                                            value={profile.name.firstname + " " + profile.name.lastname} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                                        <input type="email"
                                            className="form-control form-control-lg fs-6"
                                            id="exampleInputEmail2"
                                            readOnly={true}
                                            value={profile.email} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail3" className="form-label">Telephone Number</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg fs-6"
                                            id="exampleInputEmail3"
                                            value={profile.phone}
                                            readOnly={true} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg fs-6"
                                            id="exampleInputPassword1"
                                            value={profile.password}
                                            readOnly={true}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword2" className="form-label">Alamat Toko</label>
                                        <input
                                            type="text"
                                            aria-readonly="true"
                                            className="form-control form-control-lg fs-6"
                                            id="exampleInputPassword2"
                                            readOnly={true}
                                            value={profile.address.city +", "+ profile.address.street +", no."+ profile.address.number}
                                        />
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }
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

export default ProfileScreen