import { useParams } from "react-router-dom";

export function Page() {
    const { id } = useParams();
    return (
        <div>
            <h1 className="my-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Wikipedia-Page: {id}</h1>
            <p className=" text-center text-rose-600 text-2xl">Output the content, that you pulled from the API, here</p>
        </div>
    );
}