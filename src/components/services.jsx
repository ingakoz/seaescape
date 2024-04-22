import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Image } from "./image";

import { faShip, faAnchor, faAnchorCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';

library.add( faShip, faAnchor,faAnchorCircleCheck )

export const Services = (props) => {

  let content = {
    English: {
      block1: "What We Offer",
      block2: "We pride ourselves on curating exceptional experiences that cater to every maritime desire. Whether you're seeking a brief day of indulgence or an extended nautical adventure, our offerings are designed to exceed your expectations.",
      block3: "1-Day Trips: A Day of Luxury on the Open Sea",
      block4: "For those yearning for a quick escape, our 1-day trips provide the perfect dose of luxury and relaxation. Cruise along picturesque coastlines, explore secluded coves, and immerse yourself in the tranquility of the open sea. Our skippers will gladly take care of you and show you unexpected places around croatian islands.",
      block5: "Charters for 5 Days and More: Extended Nautical Bliss",
      block6: "For those who like longer journeys, we recommend charters of min. 5 days. Immerse yourself in the luxury of a private yacht as you freely chart your course. Discover the surrounding islands, surrounded by blue waters, and explore popular towns. Chartering a motorboat is the perfect way to have a perfect vacation.",
    },
    Polski: {
        block1: "Oferta",
        block2: "Jesteśmy dumni, że możemy zapewnić wyjątkowe doświadczenia, które zaspokoją każde morskie pragnienie. Niezależnie od tego, czy szukasz krótkiej wycieczki morskiej, czy dłuższego czarteru, nasza oferta została zaprojektowana tak, aby przekroczyć Twoje oczekiwania.",
        block3: "Wycieczki 1-dniowe: Dzień luksusu na otwartym morzu",
        block4: "Dla tych, którzy pragną szybkiej ucieczki, nasze jednodniowe wycieczki zapewniają idealną dawkę luksusu i relaksu. Rejsuj wzdłuż malowniczych wybrzeży, zwiedzaj zaciszne zatoczki i zanurz się w spokoju otwartego morza. Zapewniamy profesjonalną kadrę skipperów, którzy z przyjemnością zabiorą Was w zaskakujące zakątki chorwackich wysp.",
        block5: "Charter od 5 dni: Dłuższa morska przygoda",
        block6: "Dla tych, którzy lubią dłuższe podróże, polecamy czartery min. 5 dniowe. Zanurz się w luksusie prywatnego jachtu, swobodnie wyznaczając sobie kurs. Odkryj okoliczne wyspy, otoczone lazurową wodą i zwiedzaj popularne miasteczka. Czarter jachtu motorowodnego to idealny sposób na idealne wakacje. ",
      }
    }


  props.language === "Polski"
  ? (content = content.Polski)
  : (content = content.English);

  return (
    <div id='offer' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='title'>{content.block1}</h2>

          <h3 className='wstep'>{content.block2}</h3>
          <div className='box-wycieczka'>
          <h3 className='wycieczki'> <FontAwesomeIcon className='my_icon' icon={faAnchorCircleCheck}/>
          {content.block3}</h3>
          <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? <Fragment>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image largeImage={props.data[0].largeImage} smallImage={props.data[0].smallImage} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                <Image largeImage={props.data[10].largeImage} smallImage={props.data[10].smallImage} />
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
              <Image largeImage={props.data[3].largeImage} smallImage={props.data[3].smallImage} />
            </div>
            </Fragment>
              
              : 'Loading...'}
          </div>
        </div>
          
          <p className='main-content'>{content.block4}</p>
          </div>
          <div className='box-wycieczka'>
          <h3 className='wycieczki'> <FontAwesomeIcon className='my_icon' icon={faAnchorCircleCheck}/>
          {content.block5}</h3>
          <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? <Fragment>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image largeImage={props.data[11].largeImage} smallImage={props.data[11].smallImage} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                <Image largeImage={props.data[12].largeImage} smallImage={props.data[12].smallImage} />
              </div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
              <Image largeImage={props.data[13].largeImage} smallImage={props.data[13].smallImage} />
            </div>
            </Fragment>
              
              : 'Loading...'}
          </div>
        </div>
        
          <p className='main-content'>{content.block6}</p>
          </div>
          
          </div>
          </div>
      </div>
   
  )
}
