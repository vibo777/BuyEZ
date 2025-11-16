import React from 'react';
import { Link } from 'react-router-dom';

export default function Offers() {
  return (
    <div className="mt-0">
        <div className="offer-section">
            <div className="col-md-4">
                <div className="bg-light border rounded offer-card-bg-1">
                    <img src="https://velaflash.myshopify.com/cdn/shop/files/bannerg9_540x.jpg?v=1621089827" alt="offer1" />
                </div>
            </div>

            <div className="col-md-4">
                <div className="bg-light border rounded offer-card-bg-2">
                    <img src="https://velaflash.myshopify.com/cdn/shop/files/bannerg8_540x.jpg?v=1621089725" alt="offer1" />
                    <div className="text-b">
                        <div className="offer-text">
                            <h2 className='text-white'>Black friday</h2>
                            <h4 className='text-white'>Up to 50% Off</h4>
                            <Link to="/shop">
                                <button className='offer-cta'><strong>Shop Now</strong></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="bg-light border rounded offer-card-bg-3">
                    <img src="https://velaflash.myshopify.com/cdn/shop/files/bannerg10_540x.jpg?v=1621089847" alt="offer1" />
                </div>
            </div>
        </div>
    </div>

  )
}
