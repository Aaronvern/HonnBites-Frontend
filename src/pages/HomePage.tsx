import landingpageFood1 from "../assets/landingpageFood1.mp4"
import downloadApp from "../assets/appstore-playstore.png"
export default function HomePage() {
  return (
    <div className=" flex flex-col gap-12" >
        <div className="bg-white rounded-lg py-8 flex flex-col shadow-lg text-center gap-5 -mt-20 ">
            <h1 className=" text-5xl font-bold tracking-tight text-orange-500">
            Konkan Taste Express
            </h1>
            <span className="text-xl font-semibold">Savor the Coast: Dive into Authentic Konkan Flavors with Every Order</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <video
                autoPlay={true}
                muted={true}
                loop={true}
                className="your-class-name">
                    <source src={landingpageFood1} type="video/mp4"></source>
            </video>
            <div className="flex flex-col justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">Crave It? Grab It!</span>
                <span className="font-mono">Download the HONNBITES app today and explore the rich and authentic flavors of Konkan cuisine! Experience delicious dishes prepared with love and tradition, from aromatic seafood to spicy curries and sweet treats. Discover the essence of Konkan food right at your fingertips and satisfy your cravings with every bite.
                Taste the tradition and passion—download now!</span>
                <div className="flex justify-center">
                    <a href="https://youtu.be/xvFZjo5PgG0" target="_blank"><img src={downloadApp} className="w-9/12 md:w-1/2 mx-auto" alt="Download App" /></a>
                </div>   
            </div>
        </div>    
    </div>
  )
}
