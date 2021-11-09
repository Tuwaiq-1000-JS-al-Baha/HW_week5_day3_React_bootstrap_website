import Navbaar from "./components/Navbaar"
import Carouselss from "./components/Carouselss"
import CardItem from "./components/CardItem"

function App() {
  return (
    <>
      {" "}
      <Navbaar />
      <Carouselss className="d-block w-50 " />
      <div className="row mx-5 ">
        <div className="col-md-4 my-4">
          <CardItem
            Img="https://images.pexels.com/photos/2748535/pexels-photo-2748535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            Title={`French Press`}
            Text={
              <ul>
                <li>Bring water to a boil and set it aside</li>
                <li>Pour little hot water in an empty French press and rinse it. ...</li>
                <li>
                  Pour 3 tablespoon of ground coffee into the French press and add little water to wet the coffee
                  grounds for 30 seconds.
                </li>
              </ul>
            }
          />
        </div>
        <div className="col-md-4 my-4">
          <CardItem
            Img="https://images.pexels.com/photos/7790320/pexels-photo-7790320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            Title={`CHEMEX`}
            Text={
              <ul>
                <li>
                  Get into the grind. Select your favorite whole bean coffee you want to enjoy and grind it to medium
                  coarse ground
                </li>

                <li>Filter up</li>
                <li>The scoop</li>
                <li>Let it bloom</li>
                <li>First pour</li>
                <li>Brew on</li>
                <li>Toss the filter </li>
                <li>Enjoy the perfect cup</li>
              </ul>
            }
          />
        </div>
        <div className="col-md-4 my-4">
          <CardItem
            Img="https://images.pexels.com/photos/8211266/pexels-photo-8211266.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            Title={`v60`}
            Text={
              <ul>
                <li>Fold your paper filter along the seam and into a cone.</li>

                <li>Rinse the filter by pouring hot water through it and into the cup (then tip out the excess)</li>
                <li>Place your coffee in the cone and gently shake flat.</li>
                <li>Put your V60 and cup (or jug) on the scale</li>
                <li>Start the timer</li>
                <li>After 30 seconds pour in 100g of water</li>
              </ul>
            }
          />
        </div>
      </div>
    </>
  )
}

export default App
