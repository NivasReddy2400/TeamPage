import photo6 from './assets/photo6.png'
import photo5 from './assets/photo5.png'
import photo4 from './assets/photo4.png'
import photo3 from './assets/photo3.png'
import photo2 from './assets/photo2.png'
import photo1 from './assets/photo1.png'

const App = () => {
  return (
    <div className="relative w-1920 h-auto mx-auto bg-white shadow-cst rounded-lg">
      <div className="font-bold font-mono text-3xl absolute w-278 h-47 top-110 left-243">
        The creative crew
      </div>
      <div className="absolute w-44 h-7 top-110 left-736 uppercase font-semibold font-sans text-2xl">
        Who we are
      </div>
      <div className='absolute top-147 left-736 w-439 text-2xl font-thin'>
        We are team of creatively diverse. driven. innovative individuals
        working in various locations from the world.
      </div>
      <div className="absolute w-237 h-341 left-60 top-80">
        <figure>
          <img src={photo1} alt="" />
          <figcaption className="font-semibold">
            Bill Mahoney <br /> Product Owner
          </figcaption>
        </figure>
      </div>
      <div className="absolute w-237 h-341 left-571 top-429">
        <figure>
          <img src={photo2} alt="" />
          <figcaption className="font-semibold">
            Saba Cabrera <br /> Art Director
          </figcaption>
        </figure>
      </div>
      <div className="absolute w-237 h-341 left-902 top-330">
        <figure>
          <img src={photo3} alt="" />
          <figcaption className="font-semibold">
            Shae Le <br />
            Tech Lead
          </figcaption>
        </figure>
      </div>
      <div className="absolute w-237 h-341 left-241 top-845">
        <figure>
          <img src={photo4} alt="" />
          <figcaption className="font-semibold">
            Skylah Lu <br />
            UX Designer
          </figcaption>
        </figure>
      </div>
      <div className="absolute w-237 h-341 left-571 top-944">
        <figure>
          <img src={photo5} alt="" />
          <figcaption className="font-semibold">
            Griff Richards <br />
            Developer
          </figcaption>
        </figure>
      </div>
      <div className="absolute w-237 h-341 left-902 top-845">
        <figure>
          <img src={photo6} alt="" />
          <figcaption className="font-semibold">
            Stan John <br />
            Developer
          </figcaption>
        </figure>
      </div>
      <div className="absolute w-400 h-17 left-547 top-1448 ">
        created by NivasReddyP - devChallenges.io
      </div>
    </div>
  )
}

export default App