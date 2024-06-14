import { useLoaderData } from "react-router-dom";
import BrekingNews from "./BrekingNews";
import Header from "./Sheard/Header/Header";
import LeftSideNav from "./Sheard/LeftSideNav/LeftSideNav";
import Navbar from "./Sheard/Navbar/Navbar";
import RightSideNav from "./Sheard/RightSideNav/RightSideNav";
import DragonDetails from "./DragonDetails/DragonDetails";


const Home = () => {
    const users = useLoaderData([]);
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
                    <h3 className="text-2xl font-bold">Dragon News Home</h3> 
                    {
                        users.map(user => <DragonDetails key={user.id} user={user}></DragonDetails>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;