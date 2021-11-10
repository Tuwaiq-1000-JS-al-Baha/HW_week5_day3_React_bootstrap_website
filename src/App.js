import Card from "./component/Card"
import Carousel from "./component/Carousel"
import NavbarItem from "./component/NavbarItem"
import "./App.css"

function App() {
  const carouselItem = [
    {
      image: "https://images.pexels.com/photos/6712064/pexels-photo-6712064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "time to chang your way",
      body: "discount for all clothes",
    },

    {
      image: "https://images.pexels.com/photos/6816055/pexels-photo-6816055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "the way you look is the way you get luck",
      body: "herryUP befor the end of our discount",
    },

    {
      image: "https://images.pexels.com/photos/6712134/pexels-photo-6712134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "happy women wears better !!",
      body: "discount untel 50% !!",
    },
  ]
  return (
    <>
      <NavbarItem />
      <br />

        <Carousel carouselItems={carouselItem} />
        <br />
        <br />
        <div class="row row-cols-4 g-4">
        <div class="col">
          <Card
            title="Brown SKIRT "
            image="https://1.bp.blogspot.com/-eN5lyOx5ftY/WDIYGcr77mI/AAAAAAAAHCQ/fRhMutOapHsy1lzznGHJ0IgLSEHV2xd8ACLcB/s1600/IMG_6592.JPG"
            text="women new colliction , you can find all outfit by clickin here !! "
          />
        </div>
        <div class="col">
          <Card
            title="CLASSY JACIT"
            image="https://i.pinimg.com/originals/a3/9b/e4/a39be4372f97d5b0ac3a122c53e17c89.jpg"
            text="women new colliction , you can find THE HOT brown skirt & long boot HERE!! "
          />
        </div>
        <div class="col">
          <Card
            title="dark blue skirt"
            image="https://i.pinimg.com/originals/e3/17/38/e317388a6a0721fcdc2676f4456fa1da.jpg"
            text="women new colliction , you can find THIS BROWN BAG AND HEELS here !! "
          />
        </div>
        <div class="col">
          <Card
            title=" brown jackit "
            image="https://th.bing.com/th/id/R.deb2218f45b4cf198e12d0b32546f2d5?rik=tPqeO9zQgtWNKA&riu=http%3a%2f%2ffarm3.staticflickr.com%2f2815%2f11056840983_f4f291cea1_o.jpg&ehk=BqeT%2f%2bwMsLY3V4NFaq%2bTcZUAq3BQPl3j7YO3LVNSPr8%3d&risl=&pid=ImgRaw&r=0"
            text="women new colliction , you can find THIS CUTE bag here !! "
          />
        </div>
      </div>
    </>
  )
}

export default App
