import NavbarItem from "./Component/NavbarItem"
import Carousel from "./Component/Carousel"
import Cards from "./Component/Cards"
// import Cards from "./component/cards"
function App() {
  const CarouselItems = [
    {
      title: "book1",
      body: "book1",
      Image: "https://osm.etsi.org/wikipub/images/thumb/d/db/Books.jpg/1200px-Books.jpg ",
    },
    {
      title: "book2",
      body: "book2",
      Image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg ",
    },
    {
      title: "book3",
      body: "book3",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/English-English_dictionaries_and_thesaurus_books.JPG ",
    },
  ]
  return (
    <>
      <NavbarItem />
      <Carousel CarouselItems={CarouselItems} />
      <Cards />
    </>
  )
}

export default App
