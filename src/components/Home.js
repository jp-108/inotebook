import Notes from './Notes';
import AddNotes from './AddNotes';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Home() {

  return (
    <div className='container'   data-aos="zoom-in"
    data-aos-offset="10"
    data-aos-delay="10"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-center">
      <AddNotes />     
      <Notes />

    </div>
  )
}

export default Home
