import { Carousel } from "react-bootstrap"
function Carousels() {
  return (
    <Carousel style={{ width: "40rem" }} className="mx-auto">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://occ-0-3868-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd9bGAiDgElfVCbkaGL6SbmVxLWQBFqqh7nD-_abvcpfghyMewcFXrW4k9j4zZ8x5o99UkGxicEjDOrD4KbuxmN5T4BUBPIP9gizhlJLQLvlCf8WMr2Wq9kPIc9F.jpg?r=c75"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Released in the Past Year</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://occ-0-3868-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYMS5YGLiwN5aMiaIiAi_4TH5pNkVW1idwdOgi5N4szStG0NCfqxktClaE8yz8znFeOlkfwXQo1z2jjQYa9Ld_Wen_PCg1hnmJGrFPoOjLvqURizsQhPb9fG5JBF.jpg?r=eac"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Violent Movies</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://occ-0-3868-2773.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaJEnv2-Q3-Vujg3ddcDXXd-1qp6DCWpQpJL4Bxn9-NH5GZExqJGM5sRBDccaKlsaOPq3BvTfFeEPnowftq-5amxNus.jpg?r=cd9"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Action Movies</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels
