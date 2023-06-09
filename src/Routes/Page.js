import './Page.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';


export function Page() {

    //const { id } = useParams();
    //article with ID passed in the URL
    //const urlHTML = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${id}&exintro=1&origin=*`;
    
    //random article
    const urlHTML = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&generator=random&grnnamespace=0&exintro=1&format=json&origin=*`;
    var articleTextHTML ='';

    const [wikitext, setWikitext] = useState('');
    const [summarizedtext, setSummarizedtext] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFetchData = async () => {
        const responseHTML = await fetch(urlHTML);
        const dataHTML = await responseHTML.json();
        const pagesHTML = dataHTML.query.pages;
        const pageIdHTML = Object.keys(pagesHTML)[0];

        articleTextHTML = pagesHTML[pageIdHTML];

        setWikitext(articleTextHTML);
    }

    //ab hier KI
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const summarizeText = async () => {
        setLoading(true);
        if (typeof(wikitext.extract) !== 'undefined' && wikitext.extract != null) {
            openai.createCompletion({
                model: "text-davinci-003",
                prompt: generatePrompt(wikitext.extract),
                temperature: 0.6,
                max_tokens: 100,
                })
                .then((res) => {
                if (res.status === 200) {
                    setLoading(false);
                    setSummarizedtext(res?.data?.choices[0]?.text);
                }
                })
                .catch((err) => {
                console.log(err, "An error occured");
                });
        }
    };

    function generatePrompt(text) {
        return `Reduce the following text into a single sentence. Try not to exceed 15 words: ${text}.`;
    }

    useEffect(() => {
        handleFetchData();
    }, [])

    useEffect(() => {
        summarizeText();
    }, [wikitext])

    return (
        wikitext &&     
        <div>
            <h1 className="my-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Wikipedia-Page:<br/> <u>{wikitext.title}</u></h1>
            <p className=" text-center text-gray-600 text-xl mb-3">This is the intro of a random wikipedia article</p>
            <div className="articleIntro px-3 pt-4 mx-10 m-4 border-4 border-indigo-600 border-radius-4 rounded-lg" dangerouslySetInnerHTML={{__html: wikitext.extract}}/>

            {loading ? "loading text ..." : "Summarized Text"}
            
            <div className="summarized_text">
              <div>{summarizedtext}</div>
            </div>
        </div>
    );
}