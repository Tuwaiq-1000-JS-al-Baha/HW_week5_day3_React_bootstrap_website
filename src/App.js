import Navbar from "./compontent/Navbar"
import Card from "./compontent/Card"
import Carousel from "./compontent/Carousel"

function App() {
  return (
    <div>
      <Navbar />
      <h2>SHOP NOW!</h2>

      <Carousel />

      <div class="row row-cols-4 g-4">
        <div class="col">
          <Card
            title="Lips"
            img="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_02.jpg"
            text="255"
          ></Card>
        </div>
        <div class="col">
          <Card
            title="Eaye"
            img="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_03.jpg"
            text="100"
          ></Card>
        </div>
        <div class="col">
          <Card
            title="Face"
            img="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_04.jpg"
            text="430"
          ></Card>
        </div>
        <div class="col">
          <Card
            title="Gift"
            img="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_07.jpg"
            text="FREE"
          ></Card>
        </div>
      </div>
    </div>
  )
}

export default App
