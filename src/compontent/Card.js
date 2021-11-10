function Card(props) {
  console.log(props)
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${props.title}</h5>
        <p class="card-text">${props.text}</p>
        <a href="#" class="btn btn-primary">
          Add{" "}
        </a>
      </div>
    </div>
  )
}

export default Card
