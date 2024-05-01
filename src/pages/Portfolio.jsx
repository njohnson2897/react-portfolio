export default function Portfolio() {
    return (
        <div>
            <h1>My Projects:</h1>
            <ul className="list-group">
            {props.projects.map((project) => (
        <li className="list-group-item" key={project.id}>
          <img
            alt={project.title}
            className="img-fluid"
            src={project.images.original.url}
          />
        </li>
      ))}
    </ul>
            
            
        
        </div>
    )
}