import "./brand.scss";
import {google, dropbox, shopify, slack, atlassian} from "./imports"

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img loading="lazy" src={google} alt="Google"/>
            </div>
            <div>
                <img loading="lazy" src={slack} alt="Slack"/>
            </div>
            <div>
                <img loading="lazy" src={atlassian} alt="Atlassian"/>
            </div>
            <div>
                <img loading="lazy" src={dropbox} alt="Dropbox"/>
            </div>
            <div>
                <img loading="lazy" src={shopify} alt="Shopify"/>
            </div>
        </div>
    )
};

export default Brand;
