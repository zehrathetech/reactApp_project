import logo from './logo.svg';
import './Navbar.css'
function Navbar(){
    return(

        <div className = 'Design'>
            <div className='sub1'>
                <img src={logo} className="app-logo" alt="logo" height='50px' width='50px'/>
                <p><i><b>React JS</b></i></p>
            </div>

            <div className='sub2'>
                <input type="search"></input>
                <button><i>SEARCH</i></button>
            </div>
        </div>




    )
}

export default Navbar;



