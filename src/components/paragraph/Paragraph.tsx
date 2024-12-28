import { ParagraphComponentProps } from '../../typescript/types/components.types'
import './Paragraph.scss';

const Paragraph = (props: ParagraphComponentProps) => {
  return (
    <p className='paragraph' style={{
        color: props.color ? props.color : 'white'
    }}>{props.text}</p>
  )
}

export default Paragraph;