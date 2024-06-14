import { CiShare2 } from "react-icons/ci";
import { FaEye, FaShapes } from "react-icons/fa6";


const DragonDetails = ({ user }) => {
    const {  author, details, image_url, rating, total_view, thumbnail_url,  title } = user;
    return (
        <div className="">
            <div className="flex justify-between items-center bg-gray-100 p-2 mt-10">
                <div className="flex items-center gap-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={image_url} />

                        </div>
                    </div>
                    <div>
                        <h2>{author.name}</h2>
                        <h2>{author.published_date}</h2>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span><FaShapes></FaShapes></span>
                    <span><CiShare2></CiShare2></span>
                </div>
            </div>
            <div className="card p-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                <p>{details}</p>
                <div className="flex justify-between items-center border-y-2 border-gray-200 p-4 mt-4">
                    <div className="rating ">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 mr-4" />
                        <h2>{rating.number}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <span><FaEye></FaEye></span>
                        <h2>{total_view}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragonDetails;