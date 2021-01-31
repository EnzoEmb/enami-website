export default function HowToCode(props) {
  return (
    <p>
      <span>
        <span className="number">{props.number}.</span>
        {props.title}
      </span>
      <code>
        {props.children}
      </code>
      <button title="Copy to clipboard"><img src={"img/clipboard.svg"} alt="Copy to clipboard"/></button>
    </p>
  )
}