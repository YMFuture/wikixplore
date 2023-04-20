import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Page.css';

export function Page() {

    const { id } = useParams();
    //article with ID passed in the URL
    //const urlHTML = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${id}&exintro=1&origin=*`;
    
    //random article
    const urlHTML = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&generator=random&grnnamespace=0&exintro=1&format=json&origin=*`;
    var articleTextHTML ='';

    const [text, setText] = useState();

    const handleFetchData = async () => {
        const responseHTML = await fetch(urlHTML);
        const dataHTML = await responseHTML.json();
        const pagesHTML = dataHTML.query.pages;
        const pageIdHTML = Object.keys(pagesHTML)[0];

        articleTextHTML = pagesHTML[pageIdHTML];

        setText(articleTextHTML);
    }

    console.log("text", text);

    useEffect(() => {
        handleFetchData()
    }, [])

    return (
        text && 
        <div>
            <h1 className="my-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Wikipedia-Page:<br/> <u>{text.title}</u></h1>
            <p className=" text-center text-gray-600 text-xl mb-3">This is the intro of a random wikipedia article</p>
            <div className="articleIntro px-3 pt-4 mx-10 m-4 border-4 border-indigo-600 border-radius-4 rounded-lg" dangerouslySetInnerHTML={{__html: text.extract}}/>
        </div>
    );
}