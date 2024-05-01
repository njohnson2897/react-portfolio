export default function Project(props) {
    // props available here include all of projectData's properties and values
    return (
        <div>
            <p>{props.name}</p>
            <img
            alt={props.name}
            className="img-fluid"
            src={props.imgSrc}
            />
            <p>Description: {props.description}</p>
        </div>
    );
}