import profilePic from '../../Assets/Images/profilePic.jpg'

export default function Home() {
    return (
        <section className="home-card">
            <div className='main'>
                <div className='home-item'>
                    <img src={profilePic} className="personal-pic" alt="Personal portrait of portfolio owner" />
                </div>
                <div className="quote">
                    <p>Rule 4: Compare yourself to who you were yesterday, not who someone else is today.</p>
                    <p>Peterson, Jordan B. 12 Rules For Life</p>
                </div>
            </div>
        </section>
    )
}