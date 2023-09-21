import { MdEmail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Skills() {
    return (
      <div className='mt-6 pb-20 pt-2'>
          <div className='flex flex-col items-center my-16 pb-2'>
              <h5 className='tracking-wide text-gray-700'>Get In Touch</h5>
              <h1 className='text-3xl font-bold mt-1 md:text-5xl md:mt-3'>Contact Me</h1>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex flex-row text-lg bg-gray-100 p-8 rounded-full border-gray-300 border-2'>
                <MdEmail className='w-6 h-6 mr-1'/>
                <a href='mailto:tiffanympereira@gmail.com' className="text-black hover:text-gray-400 hover:border-gray-400 border-b-2 border-transparent mr-6">
                    tiffanympereira@gmail.com
                </a>
                
                <AiFillLinkedin className='w-6 h-6 mr-1' />
                <a href='https://www.linkedin.com/in/tiffanympereira/' target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-400 hover:border-gray-400 border-b-2 border-transparent mr-6">
                    LinkedIn
                </a>
            </div>
        </div>
    </div>
    )}



