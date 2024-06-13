import Marquee from "react-fast-marquee";

const BrekingNews = () => {
    return (
        <div className="flex items-center">
            <button className="btn btn-secondary">Breking News</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text......!!!
            </Marquee>
            <Marquee>
                I can be a React component, multiple React components, or just some text......!!!
            </Marquee>
            
        </div>
    );
};

export default BrekingNews;