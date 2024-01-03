import React from 'react';
import TokenService from '../Auth/TokenService';
import Logout from '../../Admin/Login/logout';

const Navbar = () => {

    const isAuthenticated = TokenService.isAuthenticated();

  return (
    
    <>

    <div class="top-bar navbar navbar-expand-lg bord main-bg">
    <div class="container">
         <a class="logo icon-img-100" href="#">
            
            <h4 style={{fontWeight:900}}>Pazaryolu</h4>
            </a>  
         <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
         {isAuthenticated ? (
        
           <ul  class="navbar-nav">

            <li class="nav-item">
           <a href="/Home/Orderpage" class="nav-link float-right"><i class="fas fa-shopping-bag"></i> Siparişlerim</a>
           </li>
           <li class="nav-item">
           <a href="/Home/Cart" class="nav-link float-right"><i class="fas fa-shopping-cart"></i> Sepetim</a>
           </li>
          
           <Logout/>
           
            </ul> 
         ) : 
         
         <ul  class="navbar-nav">
         <li class="nav-item nav-login">
                   <a href="Home/DefaultLogin" class="nav-link float-right"><i class="fas fa-user"></i> Giriş Yap</a>
         </li>
    
        </ul> 
         
         }
      </div>
    </div>
</div>

    <nav class="navbar navbar-expand-lg bord main-bg navbar-main-menu">
    <div class="container">
    {/* <a class="logo icon-img-100" href="#">
                    <img src="/Light/assets/imgs/logo-dark.png" alt="logo"></img>
                </a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="icon-bar"><i class="fas fa-bars"></i></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
        
            <li class="nav-item">
                    <a class="nav-link" href="/Home"><span class="rolling-text">Ana Sayfa</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Home/Product"><span class="rolling-text">Çok Satanlar</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Home/Product?type=Apparel"><span class="rolling-text">Moda</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Home/Product?type=Electronics"><span class="rolling-text">Elektronik</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Home/Product?type=Accesuar"><span class="rolling-text">Ev & Aksesuar</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Home/Product?type=Apparel"><span class="rolling-text">Spor</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Home/Contact"><span class="rolling-text">İletişim</span></a>
                </li>  
            </ul>
        </div>


    </div>
</nav>


<nav class="navbar navbar-expand-lg bord main-bg navbar-hamburger-menu">
    <div class="container">
    <a class="logo icon-img-100" href="#">
                    <img src="/Light/assets/imgs/logo-dark.png" alt="logo"></img>
                </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="icon-bar"><i class="fas fa-bars"></i></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Home</span></a>
                    <div class="dropdown-menu mega-menu">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="clumn">
                                        <div class="title">
                                            <h6 class="sub-title ls1">Home Dark</h6>
                                        </div>
                                        <div class="links">
                                            <a class="dropdown-item" href="../dark/home-main.html">Main Home</a>
                                            <a class="dropdown-item" href="../dark/home-corporate.html">Corporate
                                                Business</a>
                                            <a class="dropdown-item" href="../dark/home-onepage.html">Home One page</a>
                                            <a class="dropdown-item" href="../dark/home-digital-agency.html">Digital
                                                Agency</a>
                                            <a class="dropdown-item" href="../dark/home-freelancer.html">Freelancer</a>
                                            <a class="dropdown-item" href="../dark/home-marketing-agency.html">Marketing
                                                Agency</a>
                                            <a class="dropdown-item" href="../dark/home-creative-agency.html">Creative
                                                Agency</a>
                                            <a class="dropdown-item" href="../dark/home-startup.html">Startup Bussines</a>
                                            <a class="dropdown-item" href="../dark/home-architecture.html">Architecture</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="clumn">
                                        <div class="title">
                                            <h6 class="sub-title ls1">Home /Light</h6>
                                        </div>
                                        <div class="links">
                                            <a class="dropdown-item" href="home-main.html">Main Home</a>
                                            <a class="dropdown-item" href="home-corporate.html">Corporate
                                                Business</a>
                                            <a class="dropdown-item" href="home-onepage.html">Home One page</a>
                                            <a class="dropdown-item" href="home-digital-agency.html">Digital
                                                Agency</a>
                                            <a class="dropdown-item" href="home-freelancer.html">Freelancer</a>
                                            <a class="dropdown-item" href="home-marketing-agency.html">Marketing
                                                Agency</a>
                                            <a class="dropdown-item" href="home-creative-agency.html">Creative
                                                Agency</a>
                                            <a class="dropdown-item" href="home-startup.html">Startup Bussines</a>
                                            <a class="dropdown-item" href="home-architecture.html">Architecture</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="clumn">
                                        <div class="title">
                                            <h6 class="sub-title ls1">Showcases</h6>
                                        </div>
                                        <div class="links">
                                            <a class="dropdown-item" href="../dark/showcase-parallax-slider.html">Parallax
                                                Slider</a>
                                            <a class="dropdown-item" href="../dark/showcase-frame-slider.html">Frame
                                                Slider</a>
                                            <a class="dropdown-item" href="../dark/showcase-circle-slider.html">Circle
                                                Slider</a>
                                            <a class="dropdown-item" href="../dark/showcase-carousel.html">Showcase
                                                Carousel</a>
                                            <a class="dropdown-item"
                                                href="../dark/showcase-interactive-center-horizontal.html">Interactive
                                                Links1</a>
                                            <a class="dropdown-item"
                                                href="../dark/showcase-interactive-center.html">Interactive Links2</a>
                                            <a class="dropdown-item" href="../dark/showcase-parallax.html">Vertical
                                                Parallax</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="clumn">
                                        <div class="title">
                                            <h6 class="sub-title ls1">Showcases /Light</h6>
                                        </div>
                                        <div class="links">
                                            <a class="dropdown-item" href="showcase-parallax-slider.html">Parallax
                                                Slider</a>
                                            <a class="dropdown-item" href="showcase-carousel.html">Showcase
                                                Carousel</a>
                                            <a class="dropdown-item"
                                                href="showcase-interactive-center-horizontal.html">Interactive
                                                Links1</a>
                                            <a class="dropdown-item"
                                                href="showcase-interactive-center.html">Interactive Links2</a>
                                            <a class="dropdown-item" href="showcase-parallax.html">Vertical
                                                Parallax</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Pages</span></a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="page-about.html">About</a>
                        <a class="dropdown-item" href="page-services.html">Services</a>
                        <a class="dropdown-item" href="page-team.html">Our Team</a>
                        <a class="dropdown-item" href="page-contact.html">Contact Us</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Portfolio</span></a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item">
                                <a href="#0">Classic Grid <i class="fas fa-angle-right icon-arrow"></i></a>
                                <ul class="dropdown-side">
                                    <li><a class="dropdown-item" href="portfolio-grid-2.html">Grid 2 Columns</a></li>
                                    <li><a class="dropdown-item" href="portfolio-grid-3.html">Grid 3 Columns</a></li>
                                    <li><a class="dropdown-item" href="portfolio-grid-4.html">Grid 4 Columns</a></li>
                                </ul>
                            </li>
                            <li class="dropdown-item">
                                <a href="#0">Masonry <i class="fas fa-angle-right icon-arrow"></i></a>
                                <ul class="dropdown-side">
                                    <li><a class="dropdown-item" href="portfolio-masonry-2.html">Masonry 2 Columns</a></li>
                                    <li><a class="dropdown-item" href="portfolio-masonry-3.html">Masonry 3 Columns</a>
                                    </li>
                                    <li><a class="dropdown-item" href="portfolio-masonry-4.html">Masonry 4 Columns</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="portfolio-metro.html">Portfolio Metro</a></li>
                            <li><a class="dropdown-item" href="portfolio-modern.html">Modern Grid</a></li>
                            <li><a class="dropdown-item" href="project-details1.html">Project Details 1</a></li>
                            <li><a class="dropdown-item" href="project-details2.html">Project Details 2</a></li>
                        </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Blogs</span></a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="blog-classic.html">Blog Standerd</a>
                        <a class="dropdown-item" href="blog-list.html">Blog List</a>
                        <a class="dropdown-item" href="blog-half-img.html">Image Out Frame</a>
                        <a class="dropdown-item" href="blog-details.html">Blog Details</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="true" aria-expanded="false"><span class="rolling-text">Shop</span></a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="shop-list.html">Shop List</a>
                        <a class="dropdown-item" href="shop-product.html">Single Product</a>
                        <a class="dropdown-item" href="shop-cart.html">Cart</a>
                        <a class="dropdown-item" href="shop-checkout.html">Checkout</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="page-contact.html"><span class="rolling-text">Contact</span></a>
                </li>
                <li class="nav-item nav-login">
                          <a href="#" class="nav-link float-right"><i class="fas fa-user"></i> Giriş Yap</a>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link float-right"><i class="fas fa-shopping-cart"></i> Sepetim</a>
                </li>
            </ul>
        </div>


    </div>
</nav>

</>
  );
};

export default Navbar;
