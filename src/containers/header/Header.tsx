import "./header.scss";
import People from "../../assets/img/people.png";
import AI from "../../assets/img/ai.png";

const Header = () => {
    return (
        <header className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow
                    asked of.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address "/>
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img loading="lazy" src={People} alt="People"/>
                    <p>1,600 people requested access a visit in last 24 hours.</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img loading="lazy" src={AI} alt="AI"/>
            </div>
        </header>
    )
};

export default Header;
