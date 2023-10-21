import React, { Component } from 'react';
import './Roadmap.scss';
import { Spring } from 'react-spring';

class Roadmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          date: '2023-10-01',
          title: 'Pyshco Chibis Mint',
          description: 'Our Genesis collection Release of the Psycho Chibis signifying the beginning of our dapp developement on Flare Networks, earlier you mint is better. 15% of mint proceeds is reverted to holders',
        },
        {
          id: 2,
          date: '2023-10-15',
          title: 'Psycho Gems Staking',
          description: 'Build and deploy Psycho Chibis soft staking for Pyshco Gems',
        },
        {
          id: 3,
          date: '2023-11-01',
          title: 'Wicked Warlocks',
          description: 'Deploy Wicked Warlocks, Warlocks can only be obtained by spending Pyshco Gems.',
        },
        {
          id: 4,
          date: '2023-12-15',
          title: 'In-House Market dapp',
          description: 'Build an In house marketplace, all transactions incur a fee of 7%, those fees will get dispersed to all Pyscho Chibis holders, to encourage in house buying and selling.',
        },
        {
          id: 5,
          date: '2024-01-15',
          title: 'Pyshco Animals',
          description: 'A mix of Characterized Animals that have all eaten the psycho gems and gone psycho',
        },
        {
          id: 6,
          date: '2024-01-15',
          title: 'Zombie run Blockchain game',
          description: 'A classic game of zombies where you run from hordes of zombies, built in react.js using 3D library Three.js to create immersive metaverse like game.',
        },
        // Add more events as needed
      ],
      visibleEvents: [], // Keep track of visible events
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { events, visibleEvents } = this.state;
    const newVisibleEvents = events.filter((event) => {
      const eventElement = document.getElementById(`event-${event.id}`);
      if (eventElement && eventElement.getBoundingClientRect().top < window.innerHeight - 100) {
        return true;
      }
      return false;
    });

    // Update the visible events to trigger animations
    this.setState({ visibleEvents: newVisibleEvents });
  };

  render() {
    const { events, visibleEvents } = this.state;

    return (
  
        <div className="roadmap">
        <h1 className="roadmap-title">Development Roadmap</h1>
        <div className="roadmap-container">
          <ul className="event-list">
            {events.map((event, index) => (
              <Spring
                key={event.id}
                from={{
                  opacity: 0,
                  transform: `translateX(${index % 2 === 0 ? '-100%' : '100%'})`, // Start off-screen
                }}
                to={{
                  opacity: visibleEvents.includes(event) ? 1 : 0,
                  transform: visibleEvents.includes(event) ? 'translateX(0)' : `translateX(0)`, // Adjust to your desired resting position
                }}
              >
                {(props) => (
                  <li
                    id={`event-${event.id}`}
                    className={`event ${visibleEvents.includes(event) ? 'event-appear' : ''}`}
                    style={props}
                  >
                    <div className="event-details">
                      <h2 className="event-title">{event.title}</h2>
                      <p className="event-description">{event.description}</p>
                    </div>
                  </li>
                )}
              </Spring>
            ))}
          </ul>
        </div>
      </div>
      

    );
  }
}

export default Roadmap;
