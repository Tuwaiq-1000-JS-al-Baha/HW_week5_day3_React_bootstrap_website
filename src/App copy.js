import Navbar from "./Navbar"
import Card from "./Card"
import helooo from "./Helooo"

function App() {
  return (
    <>
      <Navbar />
      <h1> hello</h1>
      <div class="row row-cols-4 g-4">
        <div class="col">
          <Card
            image="https://www.rd.com/wp-content/uploads/2019/11/shutterstock_1313340755-e1573242844948.jpg"
            title="suaaad"
            text="hhhhhhhhhhhhhhhhhhhhhh"
          />
        </div>
        <Card
          image="https://www.rd.com/wp-content/uploads/2019/11/shutterstock_1313340755-e1573242844948.jpg"
          text="heloo i am text"
          title="asdfghjkl"
        />
        <Card
          image="https://www.rd.com/wp-content/uploads/2019/11/shutterstock_1313340755-e1573242844948.jpg"
          text="arwa"
          title="asdfghjkjhgfdsasd"
        />
        <Card
          image="https://www.rd.com/wp-content/uploads/2019/11/shutterstock_1313340755-e1573242844948.jpg"
          text="asdfghhgfds"
          title="sdfghjhgfdsa"
        />
      </div>




    </>
  )
}

export default App
