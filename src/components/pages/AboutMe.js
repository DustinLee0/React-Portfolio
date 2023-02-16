import profilePic from '../../Assets/Images/profilePic.jpg'

export default function AboutMe() {
    return (
        <div className='about-card'>
            <div className='home-item'>
                <img src={profilePic} className="personal-pic" alt="Personal portrait of portfolio owner" />
            </div>
            <div>
                <p className='about-me'>Hey there! My name is Dustin Lee and I am currently enrolled in a Coding Bootcamp offered by the University of Toronto learning to be a full stack Web Developer. This is my first project working with react. I went to school for medicine but found out that it was not the right path for me, because of this I switched my focus to web development as I have always been interested in the field but never fully committed to it.</p>
                <p className='about-me'>Learning to build applications from scratch was a challenge but it was intriguing to observe how all the files compile together to create a fully functioning website/application in which there are client side interactions, server side interactions and also API's to handle interactions between the front and back end.</p>
                <p className='about-me'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae necessitatibus fugit sequi accusantium molestias porro fuga quia expedita modi, perferendis laudantium, voluptatem placeat earum aperiam optio fugiat ea provident consequuntur.</p>
            </div>
        </div>
    )
}