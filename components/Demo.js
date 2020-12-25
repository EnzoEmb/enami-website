import DemoContent from './DemoContent';
export default function Demo(props){
    return(
        
      <article className="demo">
      <div className="container">
        <aside>
          <h2 className="demo-title">{props.title}</h2>
          <p>{props.summary}</p>
        </aside>
        <DemoContent />
      </div>
    </article>
    )
}