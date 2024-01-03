import React from 'react';



const Footer = () => {


  return (
    <footer class="main-bg" style={{marginTop:180}}>
    <div class="footer-container">
        <div class="container pb-80 pt-80 ontop">
            <div class="row">
                <div class="col-lg-3">
                    <div class="colum md-mb50">
                        <div class="tit mb-20">
                            <h6>Address</h6>
                        </div>
                        <div class="text">
                            <p>Turkey</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <div class="colum md-mb50">
                        <div class="tit mb-20">
                            <h6>Say Hello</h6>
                        </div>
                        <div class="text">
                            <p class="mb-10">
                                <a href="#0">kamil.can@ogr.dpu.edu.tr</a>
                            </p>
                            <h5>
                                <a href="#">+1 840 841 25 69</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 md-mb50">
                    <div class="tit mb-20">
                        <h6>Social</h6>
                    </div>
                    <ul class="rest social-text">
                        <li>
                            <a href="#0">Facebook</a>
                        </li>
                        <li>
                            <a href="#0">Twitter</a>
                        </li>
                        <li>
                            <a href="#0">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#0">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <div class="tit mb-20">
                        <h6>Newsletter</h6>
                    </div>
                    <div class="subscribe">
                        <form action="contact.php">
                            <div class="form-group rest">
                                <input type="email" placeholder="Type Your Email"></input>
                                <button type="submit">
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;


