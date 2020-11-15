import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../../assets/images/cover.png';

const Header = () => {
  return (
    <section className='container d-flex align-items-center justify-content-center' style={{backgroundImage: `url(${cover})`, height: "50vh", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div>
        <h1>FIND YOUR HOUSE RENT</h1>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Search...' />
            <Link to="#">
              <button className='btn btn-dark'>Find Now</button>
            </Link>
        </div>
      </div>
    </section>
    // <section className='d-flex align-items-center text-center' style={{ backgroundImage: `url(${cover})`, height: "50vh", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
    //   <div className='container'>
    //     <h1>FIND YOUR HOUSE RENT</h1>
    //     <div className='input-group col-md-6 my-5 mx-auto d-flex justify-content-center'>
    //       <input type='text' className='form-control' placeholder='Search...' />
    //       <div className='input-group-append'>
    //         <Link to="#">
    //           <button className='btn btn-dark'>Find Now</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Header;
