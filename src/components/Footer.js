import React from 'react';

const Footer = () => {
    return (

        <footer className="footer">
            <div class="footer-left">
                <img src="src/img/logotext.png" alt="" class="logo-text"/>
                <p class="footer-company-name">Bengal &copy; 2021</p>
            </div>
            <div class="footer-center">
                    <i class="fa fa-envelope"></i>
                    <p><a class="text-mail" href="mailto:bengal.dcp@gmail.com">bengal.dcp@gmail.com</a></p>
                
            </div>
            <div class="footer-right">
                <div className="ligne1">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                </div>
                <div className="ligne2">
                    <i class="fab fa-tiktok"></i>
                    <i class="fab fa-facebook-f"></i>
                </div>
            </div>
        
        </footer>
    );
};

export default Footer;