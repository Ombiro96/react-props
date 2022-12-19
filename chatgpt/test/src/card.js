export default function Card(props){
    // console.log(props)
    // const contactOne="0704156418"
    // const firstName="Clifford"
    // const email="bakutarb@gmail.com"
    return(
        <div className="card">
        <img src={props.image} className="card--image" alt="card"/>
        <div className="card--stats">
            <span>*</span>
            <span>5.0</span>
            <span className="gray">(6) - </span>
            <span className="gray">Kenya</span>
        </div>
        <p>Name: <span className="bold">{props.name}</span></p>
        <p>Contact: <span className="bold">{props.phone}</span></p>
        <p>Email: <span className="bold">{props.email}</span></p>
        </div>
    )
}