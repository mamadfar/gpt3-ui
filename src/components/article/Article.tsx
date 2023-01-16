import {FC} from "react";
import "./article.scss";

const Article: FC<{ imgUrl: string, date: string, title: string }> = ({imgUrl, date, title}) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img loading="lazy" src={imgUrl} alt="Blog"/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
};

export default Article;
