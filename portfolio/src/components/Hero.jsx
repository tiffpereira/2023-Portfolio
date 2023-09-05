import heroImg from '../assets/portfoliohero.jpg'
import logo from '../assets/Portfoliologo.png'


export default function Hero () {
    return (
        <div className='relative'>
            <img 
            className='w-screen h-screen'
            src={heroImg}
            alt = 'background image' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex flex-col items-center w-full'>
                <img 
                className='w-48'
                src={logo} />
                <h1 className='text-white font-bold'>
                Full-Stack Software Engineer | Data Analyst
                </h1>
            </div>
            
        </div>
    )
}