import { chipImg, frameImg, frameVideo } from "../utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { animateWithGsap } from "../utils/animations"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
    const videoRef = useRef();

    useGSAP(()=>{
        gsap.from('#chip',{
            scrollTrigger:{
                trigger:'#chip',
                start:'10% bottom',
                },
                opacity:0,
                scale:2,
                duration:2,
                ease:'power2.inOut',
                 });

                 animateWithGsap('.g_fadeIn',{y:0, opacity:1, ease:'power2.inOut',duration:1});         
    },[])
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
         <div id='chip' className='flex-center w-full my-20'>
            <img src={chipImg} alt='chip' width={180} height={180}/>
         </div>
         <div className='flex flex-col items-center'>
             <h2 className='hiw-title'>
                A17 Pro Chip 
                <br/> A monster win for gaming.
             </h2>
             <p className='hiw-subtitle'>
               It's here the. The biggest redesign in the history of apple GPUs
             </p>
         </div>
         <div className="mt-10 md:mt-20 mb-14 ">
          <div className="relative h-full flex-center">
              <div className="overflow-hidden">
                 <img
                   src={frameImg}
                   alt='frame'
                   className='bg-transparent'
                 />
              </div>
              <div className='hiw-video'>
                   <video
                    className='pointer-events-none'
                    playsInline 
                    preload="none"
                    autoPlay
                    muted
                    ref={videoRef}
                   >
                    <source
                     src={frameVideo}
                     type='video/mp4'
                    />
                   </video>
                 </div>
          </div>
          <p className='text-gray font-semibold text-center mt-3 text-4xl'> Honkai: Star Rail</p>
          <div className='hiw-text-container mt-10'>
                   <div className=' flex flex-1 justify-center flex-col'>
                     <p className="hiw-text g_fadeIn">
                      A17 pro is an entirely new class of iPhone chip
                     that delivers our {''}
                      <span className='text-white'>
                        best graphic performance by far.
                     </span>
                     </p>
                     
                     <div className='flex-1 flex-center'>
                     <p className="feature-text g_fadeIn">
                      Mobile  {''}
                      <span className='text-white'>
                        games will look and feel so immersive 
                     </span>,
                     with detailed environments and characters.
                     </p>
                     </div>
                     </div>

                     <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                       <p className='text-5xl md:text-4xl font-semibold text-gray'>New</p>
                       <p className='hiw-bigtext'>Pro class GPUs</p>
                       <p className='hiw-text'>6 cores</p>
                     </div>
                 </div>
         </div>
      </div>
    </section>
  )
}

export default HowItWorks