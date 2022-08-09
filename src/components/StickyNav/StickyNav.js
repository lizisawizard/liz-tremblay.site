import '../../style/app.scss';
import fuppy from '../../assets/fuppy-uwu.svg';
import Instagram from '../../assets/icons/Instagram.js';
import Github from '../../assets/icons/Github.js';
import Button from '../Button/Button';

const StickyNav = () => {

    const scrollToSection = (scrollValue) => {
        window.scrollTo({
            top: scrollValue,
            left: scrollValue,
            behavior: 'smooth'
          });
    }

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
                    <h2 className='stickyNav--tab edu' onClick={() => scrollToSection(0)}>EDU</h2>
                    <h2 className='stickyNav--tab projects' onClick={() => scrollToSection(560)}>PROJECTS</h2>
                    <h2 className='stickyNav--tab roles' onClick={() => scrollToSection(2000)}>ROLES</h2>
                </div>
                <span className='stickyNav--resume'>
                    <a href='../../assets/Liz_Tremblay_Resume_2022.docx.zip' download><Button>Download Resume</Button></a>
                </span>
            </div>
        </div>
    );
}
export default StickyNav;