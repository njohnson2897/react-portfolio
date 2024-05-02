export default function Project(props) {
    // props available here include all of projectData's properties and values
    return (
        <div>
            <p>{props.data.name}</p>
            <img
            alt={props.data.name}
            className="img-fluid"
            src={props.data.imgSrc}
            />
            <p>Description: {props.data.description}</p>
        </div>
    );
}