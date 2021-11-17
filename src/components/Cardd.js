import { Cardd } from "/react-bootstrap"

function Cardd(props) {
  console.log(props)

  return (
    <div class="card">
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}
export default Cardd
