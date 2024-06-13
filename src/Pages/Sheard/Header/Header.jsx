 import logo from '../../../assets/logo.png'
 import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2 mt-6'>
            <img className='mx-auto' src={logo} alt="" />
            <h3 className='text-xl'>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;