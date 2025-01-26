import { useEffect, useState } from 'react';
import './Services.scss';
import { Service } from '../../typescript/interfaces/interface.types';
import { services } from '../../constants/data';
import SubHeader from '../sub-header/SubHeader';
import ThemeFont from '../theme-font/ThemeFont';
import UnderlineScissorImage from '../underline-scissor-img/UnderlineScissorImage';
import Paragraph from '../paragraph/Paragraph';

const Services = () => {

  const [filterServices, setFilterServies] = useState<Service[]>([])

  const filteringServices = (services: Service[]) => {
    const sliceServices = services.slice(0, 3);
    setFilterServies(sliceServices);
  }

  useEffect(() => {
    filteringServices(services);
  });

  return (
    <div className='services'>
      <div className="services-inner">
        <div className="service-box">
          <SubHeader
            text='Our'
          />
          <ThemeFont 
            text='Services'
            color='white'
          />
          <UnderlineScissorImage />
        </div>
        <div className="service-box">
          {
            filterServices.map((service) => {
              return (
                <div className="service-border-container" key={service.id}>
                  <div className="service">
                    <img className='service-img' alt="A barber shaving a customer's beard" height="350" src={service.image} width="250"/>
                    <div className="overlay">
                      <Paragraph 
                        text={service.serviceName}
                        color='white'
                      />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );

}

export default Services;