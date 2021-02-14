
import Clipboard from 'react-clipboard.js';
import toast from 'react-hot-toast';



export default function HowToCode(props) {
  const notify = () => toast.success('Copied to clipboard!')

  return (
    <p>
      <span>
        <span className="number">{props.number}.</span>
        {props.title}
      </span>
      <code>
        {props.children}
      </code>

      <Clipboard data-clipboard-text={props.copy} onSuccess={notify}>
        📋 Copy to clipboard
      </Clipboard>

    </p>
  )
}