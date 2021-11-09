import Navbaritme from "./components/Navbaritem"
import Carditem from "./components/Carditme"
import Carouselitem from "./components/Carouselitem"

function App() {
  return (
    <>
      <Navbaritme />
      <div className="row row-cols-4">
        <div class="col">
          <Carditem
            body="watch big foot famliy 2020 online translated most recent 2019 cartoo movies"
            title="Bigfoot Family"
            image="https://mo.arbcinema.com/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D8%A7%D8%B3%D8%B1%D8%A9-%D8%A7%D9%84%D9%82%D8%AF%D9%85-%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1-2020-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg"
          />
        </div>
        <div class="col">
          <Carditem
            body="watch SuperMan 2020 online translated most recent 2019 cartoo movies"
            title="SuperMan"
            image="https://mo.arbcinema.com/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D8%B3%D9%88%D8%A8%D8%B1%D9%85%D8%A7%D9%86-%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84-2020-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg"
          />
        </div>
        <div class="col">
          <Carditem
            body="watch Cranston Academy 2020 online translated most recent 2019 cartoo movies"
            title="Cranston Academy"
            image="https://mo.arbcinema.com/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D9%88%D8%AD%D9%88%D8%B4-2020-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg"
          />
        </div>
        <div class="col">
          <Carditem
            body="watch Trolls world tour 2020 online translated most recent 2019 cartoo movies"
            title="Trolls world tour"
            image="https://mo.arbcinema.com/wp-content/uploads/%D9%81%D9%8A%D9%84%D9%85-%D8%B1%D8%AD%D9%84%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%84%D8%B2-%D8%AD%D9%88%D9%84-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-2019-%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85.jpg"
          />
        </div>
      </div>
      <Carouselitem />
    </>
  )
}

export default App
