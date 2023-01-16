import "./blog.scss";
import {Article} from "../../components";
import {blog01, blog02, blog03, blog04, blog05} from "./imports";

const [article1, article2, article3, article4, article5] = [
    {
        imgUrl: blog01,
        date: "Sep 26, 2023",
        title: "GPT-3 and Open  AI is the future. Let us explore how it is?"
    },
    {
        imgUrl: blog02,
        date: "Sep 26, 2023",
        title: "GPT-3 and Open  AI is the future. Let us explore how it is?"
    },
    {
        imgUrl: blog03,
        date: "Sep 26, 2023",
        title: "GPT-3 and Open  AI is the future. Let us explore how it is?"
    },
    {
        imgUrl: blog04,
        date: "Sep 26, 2023",
        title: "GPT-3 and Open  AI is the future. Let us explore how it is?"
    },
    {
        imgUrl: blog05,
        date: "Sep 26, 2023",
        title: "GPT-3 and Open  AI is the future. Let us explore how it is?"
    },
]

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={article1.imgUrl} date={article1.date} title={article1.title}/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={article2.imgUrl} date={article2.date} title={article2.title}/>
                    <Article imgUrl={article3.imgUrl} date={article3.date} title={article3.title}/>
                    <Article imgUrl={article4.imgUrl} date={article4.date} title={article4.title}/>
                    <Article imgUrl={article5.imgUrl} date={article5.date} title={article5.title}/>
                </div>
            </div>
        </div>
    )
};

export default Blog;
