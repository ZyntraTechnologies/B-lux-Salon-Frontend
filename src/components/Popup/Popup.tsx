import { PopupPropsComponentProps } from '../../typescript/types/components.types';
import './Popup.scss';

const Popup = (props: PopupPropsComponentProps) => {

  return (
    <div onClick={props.handlePopup} className="popup-bg">
        <div className="popup-content">
            <h2 className="header">This Feature is not available yet.</h2>
        </div>
    </div>
  );

}

export default Popup;
