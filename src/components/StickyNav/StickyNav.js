import '../../style/app.scss';
import fuppy from '../../assets/fuppy-uwu.svg';
import Instagram from '../../assets/icons/Instagram.js';
import Github from '../../assets/icons/Github.js';

const StickyNav = () => {

    // const 

    return (
        <div className='stickyNav'>
            <div className='stickyNav--content'>
                <img src={fuppy} alt='fuppy uwu'/>
                <div className='stickyNav--title'>
                    <div>
                        <h3 className='stickyNav--title-secondary'>Designer, developer, and champion of</h3>
                        <div className='vertical-line'/>
                        <span className='stickyNav--name'>
                            <h1 className='stickyNav--name-L'>L</h1><h1 className='stickyNav--name-I'>I</h1><h1 className='stickyNav--name-Z'>Z</h1><h1>TREMBLAY</h1>
                        </span>
                        <div className='vertical-line'/>
                        <h3 className='stickyNav--title-secondary' style={{ fontStyle: 'italic' }}>light mode ✨</h3>
                    </div>
                </div>
                <div className='stickyNav--icons'>
                    <a href='https://github.com/lizisawizard'><span className='icons'><Github/></span></a>
                    <a href='https://www.instagram.com/lizisawizard/'><span className='icons'><Instagram/></span></a>
                </div>
                <div>
                    <h2 className='stickyNav--tab edu'>EDU</h2>
                    <h2 className='stickyNav--tab projects'>PROJECTS</h2>
                    <h2 className='stickyNav--tab roles'>ROLES</h2>
                </div>
                <span className='stickyNav--resume'><p style={{ fontSize: '24px' }}>Download my resume <a href='https://drive.google.com/file/d/1xVBYRMqFdERNyitzriM7u5FtuAJIZ7u9/preview' download>here</a>.</p></span>
            </div>
        </div>
    );
}
export default StickyNav;