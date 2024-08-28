
import React from "react";
import "./ReviewPage.css";

const ReviewPage: React.FC = () => {
  return (
    <div className="review-page">
      {/* Main rating summary section */}
      <div className="rating-summary">
        <h2>Property Ratings and Reviews</h2>
        <div className="overall-rating">
          <div className="rating-value">4.88</div>
        </div>
        <div className="ratings-detail">
          <div className="rating-item">
            <span role="img" aria-label="Excellent" style={{ fontSize: "1.5em" }}>😄</span>
            <div className="bar1" style={{ width: "95%" }}></div> {/* Updated width for 85% rating */}
            <span className="rating-score">85%</span>
          </div>
          <div className="rating-item">
            <span role="img" aria-label="Good" style={{ fontSize: "1.5em" }}>😊</span>
            <div className="bar2" style={{ width: "50%" }}></div> {/* Updated width for 8% rating */}
            <span className="rating-score">60%</span>
          </div>
          <div className="rating-item">
            <span role="img" aria-label="Average" style={{ fontSize: "1.5em" }}>😐</span>
            <div className="bar3" style={{ width: "25%" }}></div> {/* Updated width for 4% rating */}
            <span className="rating-score">40%</span>
          </div>
          <div className="rating-item">
            <span role="img" aria-label="Poor" style={{ fontSize: "1.5em" }}>😕</span>
            <div className="bar4" style={{ width: "15%" }}></div> {/* Updated width for 2% rating */}
            <span className="rating-score">20%</span>
          </div>
          <div className="rating-item">
            <span role="img" aria-label="Terrible" style={{ fontSize: "1.5em" }}>😭</span>
            <div className="bar5" style={{ width: "5%" }}></div> {/* Updated width for 1% rating */}
            <span className="rating-score">10%</span>
          </div>
        </div>
      </div>

      {/* Reviews list section */}
      <div className="reviews-list">
        <h3>Reviews <span className="review-count">951</span></h3>
    

        {/* Example of a review item */}
        <div className="review-item">
          <div className="review-header">
            <span className="review-author">Julia, Berlin</span>
            <span className="review-date">Jul 29</span>
          </div>
          <div className="review-stars">★★★★☆</div>
          
          <p>
           We absolutely love our new home! The spacious living areas and modern kitchen are perfect for our family gatherings.
           The neighborhood is friendly and quiet, and the schools nearby are excellent. Highly recommend this property!
          </p>
        </div>

        <div className="review-item">
          <div className="review-header">
            <span className="review-author">Kim, Frankfurt</span>
            <span className="review-date">Aug 25</span>
          </div>
          <div className="review-stars">★★★☆☆</div>
          <p>
          We’ve been renting this property for six months, and it’s been a fantastic experience. The house is in great condition, and the landlord has been very attentive to any maintenance requests. 
          The location is convenient, and the rent is very reasonable for the area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
