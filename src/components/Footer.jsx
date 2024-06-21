import { footerLinks } from "../constants"


const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <div>
                <p className='font-semibold text-gray '>
                   More ways to shop : 
                   <span className="underline text-blue cursor-pointer">
                   {''} Find an Apple shop near you {''}
                   </span>
                   or
                   <span className="underline text-blue cursor-pointer">
                   {''} other retailer  {''}
                   </span>
                   near you.
                </p>
                <p className='font-semibold text-gray '>
                    or call 0701729985
                </p>
                <div className='bg-neutral-700 my-5 h-[1px] w-full'/>
                <div className='flex md:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray '>
                    All rights reserved @Apple Inc.2024
                </p>
                <div className="flex">
                 {footerLinks.map((link)=>(
                    <p className='font-semibold text-gray  cursor-pointer mx-2'>
                        {link} 
                    </p>
                 ))}
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer