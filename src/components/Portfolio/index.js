import React, { useState } from 'react';
import Modal from '../projectModal';

const Portfolio = ({ name }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([

        {
            name: 'WeatherDashboard',
            description: 'The overall goal is for the traveler to see the weather outlook for multiple cities so they may plan their trip accordingly.',
            github: "https://github.com/AnjinIsmail/weather-dashboard",
            deployed: "https://anjinismail.github.io/weather-dashboard/"
        },

        {
            name: 'WorkDaySchedule',
            description: 'The purpose of this project is to create an efficent daily planner for an employee with a busy schedule.',
            github: "https://github.com/AnjinIsmail/work-day",
            deployed: "https://anjinismail.github.io/work-day/"
        },
        {
            name: 'PasswordGenerator',
            description: 'This codes main purpose is to generate a password with a set of specific criterias upon clicking on the "Generate Password" button',
            github: "https://github.com/AnjinIsmail/Password-Generator",
            deployed: " https://anjinismail.github.io/Password-Generator/"
        },
        {
            name: ' Ocean-First',
            description: ' The main objective is to create a ocean cleanup app that retrieves ocean cleanup data for cities as well as weather forecast and further information regarding ocean polluation and ocean cleanup.',
            github: "https://github.com/Marti369/Ocean-First",
            deployed: "https://marti369.github.io/Ocean-First/"
        },
        {
            name: 'stuckInside',
            description: ' The purpose of this application is to provide users with a platform to share experiences and photos that may not make the cut for the filtered instagram feed. This platform is  designed around sharing simple unfiltered images from day to day life in the current world climate. The application offeres a secure account creation and login process, the ability change your profile picture and have it show up everywhere in the site. The page also provides users with the ability to make posts with captions and tags based on what they feel the post relates to. The users can also interact with posts made by otther users through commments and likes on the post. Once a user likes a post, they can also go to their liked posts page and they can see all the posts they liked for easy access to their favorite content',
            github: "https://github.com/treguv/stuckInside",
            deployed: "http://www.stuckinside.tech"
        },
        {
            name: 'TechBlog',
            description: 'Purpose of this application is for a developer to write about tech through a CMS style. The tech blogger can publish articles, blog posts and thoughts and opinions.',
            github: "https://github.com/AnjinIsmail/tech-blog",
            deployed: "https://whispering-chamber-05188.herokuapp.com/"
        },
        {
            name: 'SuperHeroSmash',
            description: 'A social/ entertainment application based around Super Heros. Vote for your favorite superhero in each matchup. The winner gets a vote added to their total and stays to battle the next opponent. When you are done in the Battleground, see how your choices are doing on the Leaderboard or head to the Discussion area to make your case!',
            github: "https://github.com/melissabarrerafarias/superherosmash",
            deployed: "https://superherosmash.herokuapp.com/"
        }

    ]);

    const toggleModal = (prj, i) => {
        setCurrentProject({ ...prj, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>

            {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject} />}
            <div className="flex-row">

                {projects.map((prj, i) => (
                    <img
                        src={require(`../../assets/small/${i}.png`).default}
                        alt={prj.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(prj, i)}
                        key={prj.name}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Portfolio;