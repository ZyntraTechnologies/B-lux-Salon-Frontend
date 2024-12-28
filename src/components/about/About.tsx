import Paragraph from '../paragraph/Paragraph';
import ThemeFont from '../theme-font/ThemeFont';
import './About.scss';
import scissorImg from '../../assets/svgs/scissor.svg';
import SubHeader from '../sub-header/SubHeader';

const About = () => {

  return (
    <div className='about-section'>
      <div className="about-inner">
        <div className="about-box">
          <SubHeader 
            text='About'
          />
          <ThemeFont 
            text='B’Lux Saloon'
          />
          <img src={scissorImg} alt="old school scissor image" className='scissorImg'/>
        </div>
        <div className="about-box">
            <Paragraph 
              text='“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec quam ac tortor elementum cursus. Sed orci elit, elementum sed ornare non, euismod id sapien. Fusce sodales venenatis mattis. Quisque eget urna mollis, facilisis metus ac, faucibus mi. In aliquam massa et erat consequat rhoncus. ”'
              color='white'
            />
        </div>
      </div>
    </div>
  );

}

export default About;
