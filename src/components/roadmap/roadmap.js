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
          title: 'Project Inception',
          description: 'Project idea brainstorming and planning.',
        },
        {
          id: 2,
          date: '2023-10-15',
          title: 'Design Prototyping',
          description: 'Creating wireframes and design prototypes.',
        },
        {
          id: 3,
          date: '2023-11-01',
          title: 'Development Begins',
          description: 'Start coding the application features.',
        },
        {
          id: 4,
          date: '2023-12-15',
          title: 'Testing and QA',
          description: 'Thoroughly test and debug the application.',
        },
        {
          id: 5,
          date: '2024-01-15',
          title: 'Product Launch',
          description: 'Release the product to the market.',
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
