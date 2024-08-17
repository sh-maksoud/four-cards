// CardsItems.jsx

import PropTypes from 'prop-types';
import './CardsItems.css';

function CardsItem({ CardsHeader, CardsParagraph, CardsIcon, className }) {
    return (
        <div className={`card ${className}`}>
            <h3>{CardsHeader}</h3>
            <p>{CardsParagraph}</p>
            <img src={CardsIcon} alt={`${CardsHeader} icon`} />
            {
            className === 'card show-after' ? <div className='card-after'></div> : ''
            
        }
        </div>
        
        
    );
}

CardsItem.propTypes = {
    CardsHeader: PropTypes.string.isRequired,
    CardsParagraph: PropTypes.string.isRequired,
    CardsIcon: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default CardsItem;
