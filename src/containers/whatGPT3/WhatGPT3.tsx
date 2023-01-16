import "./whatGPT3.scss";
import {Feature} from "../../components";

const FeaturesInfo = [
    {
        title: "What is GPT-3",
        text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
    },
    {
        title: "Chatbots",
        text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought."
    },
    {
        title: "Knowledgebase",
        text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    },
    {
        title: "Education",
        text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
    },
]

const WhatGPT3 = () => {

    const [wgpt3, chatbots, knowledgebase, education] = FeaturesInfo;

    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title={wgpt3.title} text={wgpt3.text}/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title={chatbots.title} text={chatbots.text}/>
                <Feature title={knowledgebase.title} text={knowledgebase.text}/>
                <Feature title={education.title} text={education.text}/>
            </div>
        </div>
    )
};

export default WhatGPT3;
