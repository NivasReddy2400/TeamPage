import photo6 from './assets/photo6.png'
import photo5 from './assets/photo5.png'
import photo4 from './assets/photo4.png'
import photo3 from './assets/photo3.png'
import photo2 from './assets/photo2.png'
import photo1 from './assets/photo1.png'

const App = () => {
  return (
    <div className="relative w-1920 h-auto mx-auto bg-white shadow-cst rounded-lg">
      <div className="absolute w-237 h-341 left-60 top-80">
        <img src={photo1} />
      </div>
      <div className="absolute w-237 h-341 left-571 top-429">
        <img src={photo2} />
      </div>
      <div className="absolute w-237 h-341 left-902 top-330">
        <img src={photo3} />
      </div>
      <div className="absolute w-237 h-341 left-241 top-845">
        <img src={photo4} />
      </div>
      <div className="absolute w-237 h-341 left-571 top-944">
        <img src={photo5} />
      </div>
      <div className="absolute w-237 h-341 left-902 top-845">
        <figure src={photo6} className="absolute w-335 h-449 left-865 top-796"></figure>
      </div>
      <div className="absolute w-400 h-17 left-547 top-1448 ">
        created by NivasReddyP - devChallenges.io
      </div>
    </div>
  )
}

export default App