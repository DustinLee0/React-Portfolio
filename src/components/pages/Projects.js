import project1 from '../../Assets/Images/project1.jpeg'
import project2 from '../../Assets/Images/project2.jpeg'
import noteTaker from '../../Assets/Images/noteTaker.jpeg'
import techBlog from '../../Assets/Images/techBlog.jpeg'
import teamProfile from '../../Assets/Images/teamProfile.jpeg'
import weather from '../../Assets/Images/weather.jpeg'
import collectionPage from '../../Assets/Images/collections.jpeg'

import githubIcon from '../../Assets/Images/githubIcon.jpg';
import linkIcon from '../../Assets/Images/link.jpg';

export default function Projects() {
    let images = [
        {
            img: project1,
            github: 'https://github.com/DustinLee0/team-5-Minigames-site',
            deployed: 'https://jon-ledo.github.io/Collab-MiniGames-plusAPI/',
            alt: 'Image of the homepage of a minigames website',
            title: 'Mini Games Website'
        },
        {
            img: project2,
            github: 'https://github.com/DustinLee0/Project-2-Custom-PC-Build',
            deployed: 'https://custom-pc.herokuapp.com/',
            alt: 'Image of the homepage of a custom pc builder website',
            title: 'Custom PC Maker Site'
        },
        {
            img: techBlog,
            github: 'https://github.com/DustinLee0/Tech-Blog',
            deployed: 'https://cms-tech-blog-app.herokuapp.com/',
            alt: 'Image of a tech blog website homepage',
            title: 'The Tech Blog'
        },
        {
            img: noteTaker,
            github: 'https://github.com/DustinLee0/Note-Taker-Express',
            deployed: 'https://note-taker-express0.herokuapp.com/',
            alt: 'Image of a note taking application with notes saved',
            title: 'Note Taking App'
        },
        {
            img: weather,
            github: 'https://github.com/DustinLee0/Weather-Forecast',
            deployed: 'https://dustinlee0.github.io/Weather-Forecast/',
            alt: 'Image of a weather forecast site displaying forecast for Toronto',
            title: 'Weather Forecast Site'
        },
        {
            img: teamProfile,
            github: 'https://github.com/DustinLee0/Team-Profile-Generator',
            deployed: '',
            alt: 'Image of html page built with application displaying team members',
            title: 'Team Profile Generator App'
        },
        {
            img: collectionPage,
            github: 'https://github.com/DustinLee0/project-3-E-commerce',
            deployed: 'https://on-code-e-commerce.herokuapp.com/',
            alt: 'Image of collection page of e-commerce webpage',
            title: 'On Code E-Commerce Page'
        },
    ]

    return (
        <div>
            <h1 className='project-header'>My Projects</h1>
            <div className='project-container'>
                {images.map((img) => {
                    return (
                        <div className='project-card'>
                            <h2 className='img-title'>{img.title}</h2>
                            <img className='project-img' src={img.img} alt={img.alt} />
                            <div className='project-links'>
                                <p><a href={img.github} target='_blank' rel='noreferrer'><img src={githubIcon} /></a></p>
                                <p><a href={img.deployed ? img.deployed : '#'} target='_blank' rel='noreferrer'><img src={linkIcon} /></a></p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}