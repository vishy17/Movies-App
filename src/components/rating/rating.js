import React from 'react';
import "./rating.css"
class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let ratingStars = [
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="star"/>,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="star"/>,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="star"/>,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="star"/>,
            <img src="https://img.icons8.com/color/28/000000/star--v1.png" alt="star"/>                        
        ];
        for(let i = 0; i < this.props.rating; i++) {
            ratingStars[i] = <img src="https://img.icons8.com/fluent/28/000000/star.png" alt="filledstar" />
        }
        return(
            <div className="rating">
               {ratingStars}
            </div>
        )
    }
}

export default Rating;
