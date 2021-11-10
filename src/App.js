import Navbar from "./component/Navbar"
import Card from "./component/Card"
import CarouselOfItem from"./component/CarouselOfItem"


function App() {
  return (
   <>  
   
   <Navbar /> 
   <br />
   <h1> WELCOME TO WINTER COLLICTION !! </h1>
   <div class="row row-cols-4 g-4">
        <div class="col">
   <Card
    title="Brown Wool Hat & Jacit" 
   image = "https://i.pinimg.com/originals/91/a2/ea/91a2ea11964da728745b941ca1cb5635.jpg"
   text = "women new colliction , you can find all outfit by clickin here !! "
   />
   </div>
   <div class="col">
   <Card 
   title="CLASSY JACIT"
   image = "https://thumbs.dreamstime.com/b/%E8%BA%AB%E7%9D%80%E4%BC%98%E9%9B%85%E6%9C%8D%E8%A3%85%E5%9C%A8%E5%9F%8E%E5%B8%82%E8%A1%8C%E8%B5%B0%E7%9A%84%E6%80%A7%E6%84%9F%E7%BE%8E%E5%A5%B3-165337018.jpg"
   text = "women new colliction , you can find THE HOT RED BAG & SHOES HERE!! "
    />
   </div>
   <div class="col">
   <Card
    title="DRESS MADE OF WOOL"
     image = "https://ziva-club.ru/wp-content/uploads/2020/10/%D0%BF%D0%BB%D0%B0%D1%82%D1%8C%D0%B5-2-531x1024.jpg"
     text = "women new colliction , you can find THIS LONG BOOTS here !! "
     />
   </div>
   <div class="col">
   <Card 
   title="WHITE JEANS "
   image = "https://th.bing.com/th/id/R.8b10259c39cd37e745aec02694c68552?rik=aTtB8DJcE%2fFAdA&riu=http%3a%2f%2fveja-du.de%2fwp-content%2fuploads%2f2016%2f12%2fcosy-winter-outfits-beanie-boots-18-von-19.jpg&ehk=NqSGpKexmhu1KXMaQ7h9cY4LNEop4IhNkFqzDwYdWIU%3d&risl=&pid=ImgRaw&r=0" 
   text = "women new colliction , you can find THIS CUTE WOOL HAT here !! " 
    />
   </div>
   
<CarouselOfItem />

</div>
    </>
  )
}

export default App