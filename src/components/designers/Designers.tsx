import SubHeader from '../sub-header/SubHeader';
import ThemeFont from '../theme-font/ThemeFont';
import './Designers.scss';
import Paragraph from '../paragraph/Paragraph';
import { designers } from '../../constants/data';
import bottomLine from '../../assets/svgs/line.svg';
import { useEffect, useState } from 'react';
import { Designer } from '../../typescript/interfaces/interface.types';
import UnderlineScissorImage from '../underline-scissor-img/UnderlineScissorImage';

const Designers = () => {

  const [designersList, setDesignersList] = useState<Designer[]>([]);

  const sliceDesigners = (designers: Designer[]) => {
    const sliceData = designers.slice(0, 3);
    setDesignersList(sliceData);
  }

  useEffect(() => {
    sliceDesigners(designers);
  }, []);
    
  return (
    <div className='our-designers'>
      <div className="our-designers-inner">
        <div className="designers-box">
          <SubHeader 
            text='Our'
          />
          <ThemeFont 
            text='Designers'
            color='white'
          />
          <UnderlineScissorImage />
        </div>
        <div className="designers-box">
          <div className="border-conatiner">
            <div className="designers-container">
              {
                designersList.map((designer) => {
                  return (
                    <div className="designer">
                      <img src={designer.image} alt="designer-image" className='designer-image'/>
                      <div className="designer-bottom">
                        <Paragraph 
                          color='white'
                          text={designer.role}
                        />
                        <img src={bottomLine} alt="bottom-line" className="bottom-line" />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Designers;
