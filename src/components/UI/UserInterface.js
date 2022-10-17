import '../../style/app.scss';
import HandDrawnSketches from '../../assets/images/handdrawn-sketches.JPG';
import InitialDigitals from '../../assets/images/initial digitals.png';
import DigitalIdeation from '../../assets/images/digital-ideation-sketches.png';
import FinalDesigns from '../../assets/images/final designs.png';
import WatchSketches from '../../assets/images/watch-sketches.png';
import FinalUI1 from '../../assets/images/final-homepage.png';
import FinalUI2 from '../../assets/images/final-goal.png';
import FinalUI3 from '../../assets/images/final-temp.png';
import FinalUI4 from '../../assets/images/final-battery.png';
import FinalUI5 from '../../assets/images/final-settings.png';
import FinalUI6 from '../../assets/images/final-watch.png';

const UserInterface = () => {
    return (
        <div className='user-interface'>
            <h2>CS6067: User Interface I</h2>
            <h4>Liz Tremblay</h4>
            <br/>
            <div className='project-description'>
                <h3>Smart Sip</h3>
                <p>A new way of hydrating.</p>
                <br/>
                <h4>Assumptions</h4>
                <div className='contents'>
                    <p>1. Smart water bottle app can connect with Apple products including watch and health app</p>
                    <p>2. Smart water bottle can read health statistics about user to calculate data on how much water they need to drink</p>
                    <p>3. Users can observe water drinking goals via Apple watch rings</p>
                    <p>4. Smart water bottle is battery powered and solar powered</p>
                    <p>5. Smart water bottle can measure water temp and maintain temp for long periods of time</p>
                </div>
                <br/>
                <h4>Design Requirements</h4>
                <div className='contents'>
                    <p>1. The user can observe their water drinking progress and goal through their phone app and Apple watch</p>
                    <p>2. The user can be reminded to drink water when they are fall off track to meet their goal</p>
                    <p>3. The user can see the temperature of their water</p>
                    <p>4. The user can see the charge of their water bottle and is reminded when battery is low</p>
                </div>
                <br/>
                <h4>Sketches</h4>
                <div className='contents'>
                    <div className='img-display'>
                        <p>1. Hand Drawn Sketches</p>
                        <img src={HandDrawnSketches} alt={'handdrawn-sketches'} width='400'></img>
                    </div>
                    <div className='img-display'>
                        <p>2. Initial Digital Sketches</p>
                        <img src={InitialDigitals} alt={'initial-digitals'} width='700'></img>
                    </div>
                    <div className='img-display'>
                        <p>3. Digital Ideation Sketches</p>
                        <img src={DigitalIdeation} alt={'digital-ideation'} width='700'></img>
                    </div>
                    <div className='img-display'>
                        <p>4. Final Sketches</p>
                        <img src={FinalDesigns} alt={'final-digitals'} width='700'></img>
                    </div>
                    <div className='img-display'>
                        <p>5. Watch Sketches</p>
                        <img src={WatchSketches} alt={'watch-sketches'} width='500'></img>
                    </div>
                </div>
                <br/>
                <h4>Development</h4>
                <div className='screen-descriptions'>
                    <img src={FinalUI1} alt={'final-sketches-1'} width='300'></img>
                    <p className='description'>
                        The homepage is the first page users interact with when they open the UI. 
                        The headerband stands out in black with the settings button in the top lefthand corner and battery percentage in the
                        right. Users can see their hydration ring from their Apple watch very prominently with the percentage of progress 
                        and a motivating message inside. The user is welcoming with a 'Welcome' message with the date below. Values for 
                        the current time, bottle's current temperature, water drank, and their target hyrdration goal are all shown with 
                        a icon indicator for a clean, sleek display. Target icon, settings icon, temperature icon, and battery are all clickable.
                        Clicking the icons will take you to their corresponding pages.
                    </p>
                </div>
                <div className='screen-descriptions'>
                    <img src={FinalUI2} alt={'final-sketches-2'} width='300'></img>
                    <p className='description'>
                        The target page maintains the same header, but has a back arrow button for users to return to the homepage. Users can see
                        a graph of their weekly goal-achieving. On the graph, the orange line with a star shows the user indicates their goal
                        for easy reading. Bars that are black are days that the user did not reach their goals. Blue bars indicate otherwise.
                        Their goals is in bold with smaller italic text below showing how far the user is from the goal.
                    </p>
                </div>
                <div className='screen-descriptions'>
                    <img src={FinalUI3} alt={'final-sketches-3'} width='300'></img>
                    <p className='description'>
                        The temperature page shows the temp of the bottle (and therein its liquids) in bold. Users can change the temp by using
                        the arrow buttons. Between the arrow buttons, users can still see the temp. Users can return to the homepage via 
                        back arrow button.
                    </p>
                </div>
                <div className='screen-descriptions'>
                    <img src={FinalUI4} alt={'final-sketches-4'} width='300'></img>
                    <p className='description'>
                        The user can click the battery icon at any time and be taken to the battery page. When clicking the back arrow, the user 
                        will be returned to whatever page they were on prior. The user can see the battery percentage in bold, and toggle different
                        functionalities for the bottle. Two toggle functions are controlled with on and off buttons. The user can put the bottle into 
                        low power mode to save battery charge. The user can also turn on solar power mode which allows the bottle to collect solar energy 
                        to charge the bottle.
                    </p>
                </div>
                <div className='screen-descriptions'>
                    <img src={FinalUI5} alt={'final-sketches-5'} width='300'></img>
                    <p className='description'>
                        The user can click the settings icon at any time and be taken to the settings page. When clicking the back arrow, the user 
                        will be returned to whatever page they were on prior. The user can change their preferences for temp units and time representation
                        if they so chose. For temperature units, the user can pick via dropdown between Celcius or Fereignheit. For time preferences, the
                        user can have the time representated in 12-hr or 24-hr format via dropdown as well. 
                    </p>
                </div>
                <div className='screen-descriptions'>
                    <img src={FinalUI6} alt={'final-sketches-6'} width='300'></img>
                    <p className='description'>
                        The watch faces for are a smaller representation of their bottle counterparts. However, the user can only access the temperature, goal,
                        and battery pages. Its primarily used to see their Apple ring, which is why it is the most prominent asset. Clicking on the icons on
                        the homepage will take you to their pages. Returning the homepage requires the user to click the circle button the side of the watch face.
                    </p>
                </div>
            </div>
            <br/>
            <h4>Demo Video</h4>
            <iframe width="520" height="440" title='demo'
                src='https://streamable.com/7opnp5' type="video/mp4">
            </iframe>
        </div>
    );
}
export default UserInterface;