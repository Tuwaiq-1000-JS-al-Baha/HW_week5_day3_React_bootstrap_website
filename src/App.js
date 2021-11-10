import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"

function App() {
  const carouselItems = [
    {
      title: "Flower 1",
      body: " i am flower 1",
      image:
        "https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Flower 2",
      body: " i am flower 2",
      image:
        "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Flower 3",
      body: " i am flower 3",
      image:
        "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ]

  return (
    <>
      <Navbar />
      <Carousel carouselItems={carouselItems} />
    </>
  )
}

export default App
