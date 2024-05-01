export default function Project(props) {
    return (
        <div>
            <p>{props.name}</p>
            <img
            alt={props.name}
            className="img-fluid"
            src={props.imgSrc}
            />
        </div>
    );
}