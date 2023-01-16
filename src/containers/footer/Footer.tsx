import "./footer.scss";
import GPT3Logo from "../../assets/img/logo.svg"

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img loading="lazy" src={GPT3Logo} alt="Logo"/>
                    <p>Crechterwoord K12 182 DK Alkjjkcb, All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in Touch</h4>
                    <p>Crechterwoord K12 182 DK Alkjjkcb</p>
                    <p>085-132567</p>
                    <p>info@mayme.net</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>&#169; 2023 GPT3. All rights reserved.</p>
            </div>
        </div>
    )
};

export default Footer;
