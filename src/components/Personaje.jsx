
function Personaje({ name, image, origin}) {
    return (
        <div className="text-center p-3" >
            <h3>{name}</h3>
            <img src={image} className="img-fluid rounded-pill" alt={name} />
            <p>Origen: {origin.name}</p>
        </div>
    )
}

export default Personaje