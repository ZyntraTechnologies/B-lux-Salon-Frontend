import { ThemeFontComponentProps } from "../../typescript/types/components.types";
import './ThemeFont.scss';

const ThemeFont = (props: ThemeFontComponentProps) => {

  return (
    <h2 className="theme-font" style={{
        color: props.color ? props.color : 'white',
        fontSize: props.size
    }}>{props.text}</h2>
  );

}

export default ThemeFont;
