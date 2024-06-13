import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter  } from "react-icons/fa6";
import qzone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="space-y-3 mb-5">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>
            <div className="mb-5">
                <h2 className="text-2xl font-bold">Find us on</h2> 
                <a className="flex items-center text-xl border-2 p-4 rounded-t-lg" href="">
                    <FaFacebook className="mr-2"></FaFacebook>
                    Facebook
                </a>
                <a className="flex items-center text-xl border-x-2 p-4 " href="">
                    <FaTwitter className="mr-2"></FaTwitter>
                    Twitter
                </a>
                <a className="flex items-center text-xl border-2 p-4 rounded-b-lg" href="">
                    <FaInstagram className="mr-2"></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="space-y-3 mb-5 p-2 bg-gray-100">
                <h2 className="text-2xl font-bold">Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;