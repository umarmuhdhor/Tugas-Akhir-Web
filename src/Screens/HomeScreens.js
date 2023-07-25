import React, { useEffect, useState } from 'react'
import { getProduct } from '../Services/Product';
import FlatList from 'flatlist-react/lib';
import {
    FaShoppingBag, FaTwitter, FaLinkedin,
    FaFacebook, FaInstagram, FaYoutube, FaMapMarked, FaPhone, FaEnvelope
} from 'react-icons/fa'
import { isEmptyArray } from 'formik';

const HomeScreens = () => {
    const [data, setData] = useState([]);

    const getAllProducts = async () => {
        try {
            const response = await getProduct();
            const beautyResponse = JSON.stringify(response.data, null, 2);
            setData(response.data);
        } catch (error) {
            console.log("error: ");
        }
    };

    useEffect(() => {
        if (data == isEmptyArray()) {
            getAllProducts();
        }
        console.log(data)
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
                                        <a className="nav-link active" href="/HomeScreen">Home</a>
                                    </li>
                                    <li className="nav-item me-3 fs-5">
                                        <a className="nav-link" href="/ProfileScreen">Profile</a>
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

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel" style={{ width: 250 }}>
                <div className="d-flex justify-content-center align-items-center p-3 rounded-4">
                    <div className="letter"><i className="fas fa-shopping-bag me-1"></i></div>
                    <div className="letter">J</div>
                    <div className="letter">W</div>
                    <div className="letter">m</div>
                    <div className="letter">a</div>
                    <div className="letter">r</div>
                    <div className="letter">s</div>
                    <div className="letter">o</div>
                    <div className="letter">n</div>
                </div>
                <div class="offcanvas-body">
                    <ul class="list-group">
                        <li class="list-group-item disabled p-4" aria-disabled="true">
                            <h4>Home</h4>
                        </li>
                        <li class="list-group-item p-4">
                            <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                                <nav class="nav nav-pills flex-column">
                                    <a class="nav-link" href="#item-1">Best Offer</a>
                                    <a class="nav-link" href="#item-2">Best Selling</a>
                                    <a class="nav-link" href="#item-3">Top 5 Monthly Best Shop</a>
                                    <a class="nav-link" href="#item-4">Limited Offer</a>
                                </nav>
                            </nav>
                        </li>
                    </ul>
                </div>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy"
                tabIndex="0">
                <div id="item-1"></div>
                <div id="carouselExampleAutoplaying" className="carousel slide mb-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img className="card-img" width="800" height="500" style={{ border: "none" }}
                                src="https://image.akurat.co/uploads/images/2023/02/big/img_63f43c1d46dde4-79043933-58127998.png" />
                            <div className="carousel-caption d-none d-md-block bg-white rounded-4 text-dark"
                                style={{ width: 300, margin: "auto", paddingBottom: 30 }}>
                                <p style={{ fontSize: 30 }}>iBox</p>
                                <p>Palembang</p>
                                <button type="button" className="btn btn-secondary">SHOP NOW !</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="card-img" width="800" height="500" style={{ border: "none" }}
                                src="https://www.malang-guidance.com/wp-content/uploads/2019/06/Store-Uniqlo-Malang-Guidance.jpg" />
                            <div className="carousel-caption d-none d-md-block bg-white rounded-4 text-dark"
                                style={{ width: 300, margin: "auto", paddingBottom: 30 }}>
                                <p style={{ fontSize: 30 }}>UNIQLO</p>
                                <p>Bandung</p>
                                <button type="button" className="btn btn-secondary">SHOP NOW !</button>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="card-img" width="800" height="500" style={{ border: "none" }}
                                src="https://www.herworld.co.id/gallery/teaser/image003_2820210320185852Qvqduj.jpg" />
                            <div className="carousel-caption d-none d-md-block bg-white rounded-4 text-dark"
                                style={{ width: 300, margin: "auto", paddingBottom: 30 }}>
                                <p style={{ fontSize: 30 }}>LEVI'S </p>
                                <p>Jakarta</p>
                                <button type="button" className="btn btn-secondary">SHOP NOW !</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container text-md-left mb-3 mt-3">
                    <div className="row text-md-left" style={{ paddingBottom: 30 }} id="item-2">
                        <h3>Penjualan Terlaris</h3>
                    </div>
                    <div className="row text-md-left">
                        <div className="col-auto mx-auto">

                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <div className="card p-4">
                                        <img src={data != isEmptyArray() ? data[6].image : "https://etrendipohsdnbhd.com/wp-content/uploads/2022/04/lifework-big-radog-short-sleeve-t-shirt-black-white-01.jpg"}
                                            className="img-fluid rounded-4" style={{ width: 220, height: 270 }} />
                                        <div className="card-body d-flex" style={{ justifyContent: "space-between" }}>
                                            <div className="d-flex" style={{ width: 120, height: 40 }}>
                                                {data != isEmptyArray() ? data[6].title : null}
                                            </div>
                                            <div className="justify-content-center" style={{ height: 40, paddingTop: 10 }}>
                                                <button href="#" className="btn btn-outline-dark btn-sm">$ {data != isEmptyArray() ? data[6].price : null}</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="card p-4">
                                        <img src={data != isEmptyArray() ? data[1].image : "https://etrendipohsdnbhd.com/wp-content/uploads/2022/04/lifework-big-radog-short-sleeve-t-shirt-black-white-01.jpg"}
                                            className="img-fluid rounded-4" style={{ width: 220, height: 270 }} />
                                        <div className="card-body d-flex" style={{ justifyContent: "space-between" }}>
                                            <div className="d-flex" style={{ width: 120, height: 40 }}>
                                                {data != isEmptyArray() ? data[1].title : null}
                                            </div>
                                            <div className="justify-content-center" style={{ height: 40, paddingTop: 10 }}>
                                                <button href="#" className="btn btn-outline-dark btn-sm">$ {data != isEmptyArray() ? data[1].price : null}</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="card p-4">
                                        <img src={data != isEmptyArray() ? data[3].image : "https://etrendipohsdnbhd.com/wp-content/uploads/2022/04/lifework-big-radog-short-sleeve-t-shirt-black-white-01.jpg"}
                                            className="img-fluid rounded-4" style={{ width: 220, height: 270 }} />
                                        <div className="card-body d-flex" style={{ justifyContent: "space-between" }}>
                                            <div className="d-flex" style={{ width: 120, height: 40 }}>
                                                {data != isEmptyArray() ? data[3].title : null}
                                            </div>
                                            <div className="justify-content-center" style={{ height: 40, paddingTop: 10 }}>
                                                <button href="#" className="btn btn-outline-dark btn-sm">$ {data != isEmptyArray() ? data[3].price : null}</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="card p-4">
                                        <img src={data != isEmptyArray() ? data[5].image : "https://etrendipohsdnbhd.com/wp-content/uploads/2022/04/lifework-big-radog-short-sleeve-t-shirt-black-white-01.jpg"}
                                            className="img-fluid rounded-4" style={{ width: 220, height: 270 }} />
                                        <div className="card-body d-flex" style={{ justifyContent: "space-between" }}>
                                            <div className="d-flex" style={{ width: 120, height: 40 }}>
                                                {data != isEmptyArray() ? data[5].title : null}
                                            </div>
                                            <div className="justify-content-center" style={{ height: 40, paddingTop: 10 }}>
                                                <button href="#" className="btn btn-outline-dark btn-sm">$ {data != isEmptyArray() ? data[5].price : null}</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="container text-md-left p-3" style={{ backgroundColor: "#808080" }}>

                        <div className="row text-center">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-white" id="item-3">
                                <h2>3 Toko Terlaris</h2>
                                <p>Berdasarkan Penjualan Bulan Kemarin</p>
                            </div>
                        </div>
                        <div className="d-flex mb-3 justify-content-center">
                            <div className="col-md-2 me-3 bg-white rounded-4 p-3">
                                <img src="https://vectorseek.com/wp-content/uploads/2021/01/Uniqlo-Logo-Vector.jpg"
                                    className="img-fluid rounded-4" style={{ width: 200, height: 180 }} />
                            </div>
                            <div className="col-md-2 me-3  bg-white rounded-4 p-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
                                    className="img-fluid rounded-4" style={{ width: 200, height: 180 }} />
                            </div>
                            <div className="col-md-2 me-3  bg-white rounded-4 p-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
                                    className="img-fluid rounded-4" style={{ width: 200, height: 180 }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mb-4">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="card-img" width="800" height="400" style={{ border: "none" }}
                                    src="https://marketplace.canva.com/EAFMGUpLzOM/1/0/1600w/canva-biru-minimalis-fashion-cuci-gudang-blog-banner-3HIyW0HCtSc.jpg" />
                                <title>Placeholder</title>

                                <div className="card-img-overlay" style={{ marginLeft: 100, marginTop: 80 }}>
                                    <div className="card-body text-dark col-lg-3 col-xl-4 bg-white p-4 rounded-4">
                                        <h4 className="card-title mb-3">Fred Perry Polo Shirt</h4>
                                        <p className="card-text">
                                            Fred Perry polo Made in Italy Import dan dijamin original 100%. Tersedia berbagai jenis ukuran dan type lainnya.
                                        </p>
                                        <button href="#" className="btn btn-outline-dark mt-3">Shop Now !</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="card-img" width="800" height="400" style={{ border: "none" }}
                                    src="https://marketplace.canva.com/EAFG02BQlbk/1/0/1600w/canva-biru-dan-hitam-sederhana-promo-spesial-pakaian-banner-landscape-NOitHLOtic8.jpg" />
                                <title>Placeholder</title>

                                <div className="card-img-overlay" style={{ marginLeft: 100, marginTop: 80 }}>
                                    <div className="card-body text-dark col-lg-3 col-xl-4 bg-white p-4 rounded-4">
                                        <h4 className="card-title mb-3">ADLV OverSized T-Shirt</h4>
                                        <p className="card-text">
                                            ADLV Oversized tee ready stock original imported from korea, Stok terbatas!!
                                        </p>
                                        <button href="#" className="btn btn-outline-dark mt-3">Shop Now !</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="card-img" width="800" height="400" style={{ border: "none" }}
                                    src="https://marketplace.canva.com/EAFG0xrCtgM/1/0/1600w/canva-hitam-sederhana-promo-spesial-pakaian-banner-landscape-n4bayTbCJi0.jpg" />
                                <title>Placeholder</title>

                                <div className="card-img-overlay" style={{ marginLeft: 100, marginTop: 80 }}>
                                    <div className="card-body text-dark col-lg-3 col-xl-4 bg-white p-4 rounded-4">
                                        <h4 className="card-title mb-3">LifeWork Oversize TShirt</h4>
                                        <p className="card-text">
                                            LifeWork T-Shirt Original import Korea. Ready stock dan barang siap untuk langsung dikirim.
                                        </p>
                                        <button href="#" className="btn btn-outline-dark mt-3">Shop Now !</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="card-img" width="800" height="400" style={{ border: "none" }}
                                    src="https://marketplace.canva.com/EAFCheBpGBc/2/0/1600w/canva-merah-sederhana-kaos-oblong-diskon-promo-facebook-ad-T-yC8n712kk.jpg" />
                                <title>Placeholder</title>

                                <div className="card-img-overlay" style={{ marginLeft: 100, marginTop: 80 }}>
                                    <div className="card-body text-dark col-lg-3 col-xl-4 bg-white p-4 rounded-4">
                                        <h4 className="card-title mb-3">Kenzo Oversized</h4>
                                        <p className="card-text">
                                            Kenzo Oversized T-Shirt. Barang ready dan siap kirim hari ini juga. Tersedia dalam berbagai variasi ukuran dan warna.
                                        </p>
                                        <button href="#" className="btn btn-outline-dark mt-3">Shop Now !</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div id="item-4"> </div>
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

export default HomeScreens

