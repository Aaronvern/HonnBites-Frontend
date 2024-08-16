import hero from '../assets/hero.jpg'

//If the hero image doesn't work, use this link instead : "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/l-intro-1645057933.jpg"

export default function Hero() {
  return (
    <div>
        
        <img src={hero} className='w-full max-h-[600px] object-cover'></img>    

    </div>
  )
}
