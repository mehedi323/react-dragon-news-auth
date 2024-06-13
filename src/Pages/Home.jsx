import BrekingNews from "./BrekingNews";
import Header from "./Sheard/Header/Header";
import LeftSideNav from "./Sheard/LeftSideNav/LeftSideNav";
import Navbar from "./Sheard/Navbar/Navbar";
import RightSideNav from "./Sheard/RightSideNav/RightSideNav";

 

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar> 
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h3 className="text-4xl">News comming soon....!</h3>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div> 
            </div>
        </div>
    );
};

export default Home;