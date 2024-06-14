import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import leftsideimg1 from '../../../assets/1.png'
import leftsideimg2 from '../../../assets/2.png'
import leftsideimg3 from '../../../assets/3.png'
import moment from 'moment';
import { MdOutlineDateRange } from "react-icons/md";



const LeftSideNav = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    return (
        <div>
            <div className="space-y-3 mb-5">
                <h2 className="text-2xl font-bold">All Category</h2>
                {
                    categorys.map(category =>
                        <Link className="block font-bold" to={`/category/${category.id}`} key={category.id}>
                            {category.name}
                        </Link>)
                }
            </div>
            <div>
                <div className="space-y-3 mb-4">
                    <img src={leftsideimg1} alt="" />
                    <h1 className="font-bold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex items-center">
                        <span className="mr-4 font-bold">Sports</span> 
                        <MdOutlineDateRange></MdOutlineDateRange>
                        <p>{moment().format("dddd, MMMM D YYYY")}</p>
                    </div>
                </div>
                <div className="space-y-3 mb-4">
                    <img src={leftsideimg2} alt="" />
                    <h1 className="font-bold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex items-center">
                        <span className="mr-4 font-bold">Sports</span> 
                        <MdOutlineDateRange></MdOutlineDateRange>
                        <p>{moment().format("dddd, MMMM D YYYY")}</p>
                    </div>
                </div>
                <div className="space-y-3 mb-4">
                    <img src={leftsideimg3} alt="" />
                    <h1 className="font-bold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex items-center">
                        <span className="mr-4 font-bold">Sports</span> 
                        <MdOutlineDateRange></MdOutlineDateRange>
                        <p>{moment().format("dddd, MMMM D YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;