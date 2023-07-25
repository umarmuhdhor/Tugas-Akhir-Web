import React from 'react'
import {
    FaShoppingBag, FaTwitter, FaLinkedin,
    FaFacebook, FaInstagram, FaYoutube, FaMapMarked, FaPhone, FaEnvelope, FaWhatsapp
} from 'react-icons/fa'

const ContactScreen = () => {
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
                                        <a className="nav-link" href="/ProductScreen">Product</a>
                                    </li>
                                    <li className="nav-item fs-5">
                                        <a className="nav-link active" href="/ContactScreen">Contact</a>
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
                    <div className="container">
                        <div className="row p-3 text-md-left">
                            <button className="text-secondary mb-3" style={{
                                border: "none",
                                textAlign: "left",
                                paddingLeft: 30
                            }}>
                                <i className="	fas fa-envelope-open-text"></i>
                                My Order
                            </button>
                            <button className="text-secondary mb-3" style={{
                                border: "none",
                                textAlign: "left",
                                paddingLeft: 30
                            }}>
                                <i className="far fa-heart"></i>
                                Wish List
                            </button>
                            <button className="text-secondary mb-3" style={{
                                border: "none",
                                textAlign: "left",
                                paddingLeft: 30
                            }}>
                                <i className="far fa-user-circle"></i>
                                My Info
                            </button>
                            <button className="text-secondary mb-3" style={{
                                border: "none",
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

            <div className="container justify-content-center d-flex min-vh-10" style={{ width: 1200 }}>
                <div className="col-auto p-3 " style={{ width: 800 }}>
                    <div className="row text-md-left mb-4">
                        <div className=" d-flex justify-content-between">
                            <h3>Contact</h3>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-secondary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <hr className="mb-4 mt-4" />
                    <div className="d-flex row text-md-left">
                        <div className="featured-image col-auto">
                            <img src="https://vectorseek.com/wp-content/uploads/2021/01/Uniqlo-Logo-Vector.jpg"
                                className="img-fluid rounded-4" style={{ width: 200 }} />
                        </div>
                        <div className="col-lg-7 fs-6">
                            <h5 className="mb-3">Uniqlo</h5>
                            <small>
                                <p className="text-secondary mb-1" id="kat">Lokasi : Palembang</p>
                                <p className="text-secondary" id="des">Operasional : 10.00 - 22.00 WIB</p>
                            </small>
                            <button type="button" className="btn btn-outline-success align-items-center">
                                <FaWhatsapp className="fab" /> Whatsapp
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <hr className="mb-4 mt-4" />
                    </div>
                    <div className="d-flex row text-md-left">
                        <div className="featured-image col-auto">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
                                className="img-fluid rounded-4" style={{ width: 200 }} />
                        </div>
                        <div className="col-lg-7 fs-6">
                            <h5 className="mb-3">Adidas</h5>
                            <small>
                                <p className="text-secondary mb-1" id="kat">Lokasi : Bandung</p>
                                <p className="text-secondary" id="des">Operasional : 09.00 - 18.00 WIB</p>
                            </small>
                            <button type="button" className="btn btn-outline-success align-items-center">
                                <FaWhatsapp className="fab" /> Whatsapp
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <hr className="mb-4 mt-4" />
                    </div>
                    <div className="d-flex row text-md-left">
                        <div className="featured-image col-auto">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
                                className="img-fluid rounded-4" style={{ width: 200 }} />
                        </div>
                        <div className="col-lg-7 fs-6">
                            <h5 className="mb-3">H&M</h5>
                            <small>
                                <p className="text-secondary mb-1" id="kat">Lokasi : Jakarta</p>
                                <p className="text-secondary" id="des">Operasional : 08.00 - 16.00 WIB</p>
                            </small>
                            <button type="button" className="btn btn-outline-success align-items-center">
                                <FaWhatsapp className="fab" /> Whatsapp
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <hr className="mb-4 mt-4" />
                    </div>
                    <div className="d-flex row text-md-left">
                        <div className="featured-image col-auto">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/412/small/nike-logo-black-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
                                className="img-fluid rounded-4" style={{ width: 200 }} />
                        </div>
                        <div className="col-lg-7 fs-6">
                            <h5 className="mb-3">NIKE</h5>
                            <small>
                                <p className="text-secondary mb-1" id="kat">Lokasi : Tanggerang</p>
                                <p className="text-secondary" id="des">Operasional : 09.00 - 19.00 WIB</p>
                            </small>
                            <button type="button" className="btn btn-outline-success align-items-center">
                                <FaWhatsapp className="fab" /> Whatsapp
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <hr className="mb-4 mt-4" />
                    </div>
                    <div className="row">
                        <nav className="d-flex justify-content-center">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
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
export default ContactScreen