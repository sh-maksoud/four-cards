// Cards.jsx

import './Cards.css'; // Import grid styles
import CardsItems from '../CardsItems/CardsItems';
import SupervisorIcon from '../../assets/images/icon-supervisor.svg';
import TeamBuilderIcon from '../../assets/images/icon-team-builder.svg';
import KarmaIcon from '../../assets/images/icon-karma.svg';
import CalculatorIcon from '../../assets/images/icon-calculator.svg';

function Cards() {
    const ArrayOfObjects = [
        // { Status:{'card.show-after::after': 'opacity: 1;'}},
        { CardsHeader: 'Supervisor', CardsIcon: SupervisorIcon, CardsParagraph: 'Monitors activity to identify project roadblocks', className: 'supervisor' },
        { CardsHeader: 'Team Builder', CardsIcon: TeamBuilderIcon, CardsParagraph: 'Scans our talent network to create the optimal team for your project', className: 'team-builder' },
        { CardsHeader: 'Karma', CardsIcon: KarmaIcon, CardsParagraph: 'Correlates our data to ensure quality', className: 'karma' },
        { CardsHeader: 'Calculator', CardsIcon: CalculatorIcon, CardsParagraph: 'Uses data from past projects to provide better delivery estimates', className: 'calculator' }
    ];

    return (
        <div className='card-grid'>
            {ArrayOfObjects.map((item, index) => (
                <CardsItems
                    key={index}
                    Status={item.Status}
                    CardsHeader={item.CardsHeader}
                    CardsParagraph={item.CardsParagraph}
                    CardsIcon={item.CardsIcon}
                    className={item.className}
                />
            ))}
        </div>
    );
}

export default Cards;
