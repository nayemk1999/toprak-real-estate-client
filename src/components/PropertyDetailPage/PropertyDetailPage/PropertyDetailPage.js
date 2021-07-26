import React from 'react';
import "./PropertyDetailPage.css"
import Header from '../../Home/Header/Header/Header';
import PropertyDetail from '../PropertyDetail/PropertyDetail';

const PropertyDetailPage = () => {
    return (
        <div>
            <Header/>
            <div className="container row mx-auto propertyDetailPage">

                <div className="col-md-7">
                    <PropertyDetail />
                </div>
                <div className=" col-md-4">
                    <p className="ml-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo totam similique. Sed, aut! Voluptate, mollitia porro dolorum voluptatum culpa omnis itaque corrupti veniam aliquam sunt voluptatem atque ullam magni.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PropertyDetailPage;