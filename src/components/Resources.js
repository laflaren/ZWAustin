

function Resources(props) {
  return (
    <div className="Resources">

       <h1> Resources </h1>

      <ul className="resourcelist"> 
        {props.tools.map((tool, i) => 
        <li key={i}> {tool} </li>)}
      </ul>
    </div>
  );
}

export default Resources;
