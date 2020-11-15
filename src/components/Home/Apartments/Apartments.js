import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Apartments = ({ product }) => {
    return (
        <div className="col-md-4 mt-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.apartment_name}</h5>
                    <p className="card-text text-muted mb-1"><FontAwesomeIcon className="mr-1"icon={faMapMarker} />{product.address}</p>
                    <div className="mt-2 d-flex justify-content-between">
                        <span className="card-link text-muted"><FontAwesomeIcon className="mr-1"icon={faBed} />{product.no_bedrooms} Bedrooms</span>
                        <span className="card-link text-muted"><FontAwesomeIcon className="mr-1"icon={faBath} />{product.no_bathroom} Bathrooms</span>
                    </div>
                    <div className="mt-3 d-flex justify-content-between">
                        <h3 className="card-link text-info">${product.price}</h3>
                        <Link to="#" className="card-link btn btn-info">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apartments;