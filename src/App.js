import TaskNavbar from "./components/TaskNavbar";
import Carsoual from "./components/Carsoual";

import 'bootstrap/dist/css/bootstrap.min.css';
import  "./App.css"
import CardTask from "./components/CardTask";
import  "./App.css"


function  App() {
  return(
    <>
    
    <TaskNavbar/>
      
  
    <Carsoual/>

  
    

    <div class="row row-cols-4  g-4 p-6">
  <div class="col">
     <CardTask title="of indiffernce" price="50$" iamge="https://e3raf.org/book/wp-content/uploads/sites/3/2019/07/%D9%81%D9%86-%D8%A7%D9%84%D9%84%D8%A7%D9%85%D8%A8%D8%A7%D9%84%D8%A7%D8%A9.jpg" />
  </div>
  <div class="col">
     <CardTask title="Software" price="30$" iamge="https://images.routledge.com/common/jackets/originals/978149870/9781498705271.tif" />
  </div>
  <div class="col">
     <CardTask title="Language History" price="40$" iamge="https://pbs.twimg.com/media/Eqfp6RZWMAI6po7.jpg" />
  </div>
  <div class="col">
     <CardTask title="Baby Names" price="20$" iamge="https://prodimage.images-bn.com/pimages/9780306845246_p0_v2_s550x406.jpg" />
  </div>
  <div class="col">
     <CardTask title="Bacues you are GOD" price="50$" iamge="https://images-na.ssl-images-amazon.com/images/I/4157RSEzMRL._SX340_BO1,204,203,200_.jpg" />
  </div>
  <div class="col">
     <CardTask title="big History" price="35$" iamge="https://www.zakariyyabooks.com/wp-content/uploads/%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1-2-scaled.jpg" />
  </div>
  <div class="col">
     <CardTask title="Roget" price="30$" iamge="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555056047l/1604308._SX318_.jpg" />
  </div>
  <div class="col">
     <CardTask title="Shakespear" price="15$" iamge="https://images-na.ssl-images-amazon.com/images/I/51E-2QISwRL._SX348_BO1,204,203,200_.jpg" />
  </div>
  </div>
    
    </>
  )
}
 
export default App