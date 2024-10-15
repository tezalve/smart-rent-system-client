import React from 'react';

const Benefits = () => {
    return (
        <div className=''>

            <div className="pt-5 d-flex justify-content-around">
                <h1>Why Use This Website?</h1>
            </div>

            <div className='px-5 d-flex justify-content-around'>
                <ul className='p-2'>
                    <h4>For Tenants</h4>
                    <ul>
                        <h5>Easy Search and Filtering</h5>
                        <li>
                            <p>Tenants can easily search for rental properties by applying filters such as location, price, property type, number of bedrooms, and amenities.</p>
                        </li>
                        <h5>Verified Listings</h5>
                        <li>
                            <p>All properties on the platform are verified, ensuring that the listings are genuine and accurately described.</p>
                        </li>
                        <h5>Secure Online Payments</h5>
                        <li>
                            <p>The platform integrates secure payment options (e.g., bKash).</p>
                        </li>
                        <h5>Transparent Fees and Terms</h5>
                        <li>
                            <p>The platform ensures that all rental terms, fees, and agreements are clearly outlined.</p>
                        </li>
                    </ul>
                </ul>
                <ul className='p-2'>
                    <h4>For Landlords</h4>
                    <ul>
                        <h5>Hassle-Free Property Management</h5>
                        <li>
                            <p> Landlords can list properties, manage tenant applications, and oversee payments from a single dashboard.</p>
                        </li>
                    </ul>
                    <ul>
                        <h5>Automated Rent Collection</h5>
                        <li>
                            <p>The system automatically collects rent payments and transfers them to the landlord’s bank account.</p>
                        </li>
                    </ul>
                    <ul>
                        <h5>Reduced Vacancy Rates</h5>
                        <li>
                            <p>With a large pool of prospective tenants using the platform, landlords can fill vacancies quickly.</p>
                        </li>
                    </ul>
                </ul>
                <ul className='p-2'>
                    <h4>For Both Tenants and Landlords</h4>
                    <ul>
                        <h5>Localized Support for Dhaka</h5>
                        <li>
                            <p>The platform is tailored for Dhaka’s rental market, offering support in Bengali and integrating local payment options.</p>
                        </li>
                    </ul>
                </ul>
            </div>

        </div>
    );
};

export default Benefits;