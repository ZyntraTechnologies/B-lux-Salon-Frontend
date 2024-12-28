import './SubHeader.scss';
import { SubHeaderComponentProps } from '../../typescript/types/components.types';

const SubHeader = (props: SubHeaderComponentProps) => {

  return (
    <h3 className='sub-header'>{props.text}</h3>
  );

}

export default SubHeader;
