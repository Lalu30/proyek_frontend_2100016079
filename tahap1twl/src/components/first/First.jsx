import React from 'react'
import {motion, useScroll, useTransform} from "framer-motion"
import profilepicture from "../../assets/logouad.png"
import "./first.css"

const First = () => {
    const{scrollYProgress} = useScroll()
    const right=useTransform(scrollYProgress, [0,1],[0,800])
     const left=useTransform(scrollYProgress, [0,1],[0,-800])
  return (
    <section className="first" id='home'>
        <div className="containerFirst">
            <div className="firstText">
            <motion.h1 
            initial={{x: 1800}}
            animate={{
                x: 0,
                transition:{
                    duration: 0.8,
                    delay: 2
                }
            }}
            style={{x: right}}
            className='textFilled'>Tekweb Lanjut</motion.h1>
            <motion.h1 
            initial={{x: 1800}}
            animate={{
                x: 0,
                transition:{
                    duration: 0.8,
                    delay: 2
                }
            }}
            style={{x: right}}
            className='textOutline'
            >
                Tekweb Lanjut
            </motion.h1>
            </div>
            <div className="secondText">
            <motion.h1 
            initial={{x: -1800}}
            animate={{
                x: 0,
                transition:{
                    duration: 0.8,
                    delay: 2
                }
            }}
            style={{x: left}}
            className='textFilled'
            >
                universitas ahmad dahlan
                </motion.h1>
            <motion.h1 
            initial={{x: -1800}}
            animate={{
                x: 0,
                transition:{
                    duration: 0.8,
                    delay: 2
                }
            }}
            style={{x: left}}
            className='textOutline'
            >
                universitas ahmad dahlan
            </motion.h1>
            </div>
            <div className="firstpage">
                <motion.img 
                initial={{y: 200, opacity: 1}}
                animate={{
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 2.1,
                    }
                }}
                className='firstPicture' src={profilepicture} alt="" />
            </div>
        </div>
    </section>
  )
}

export default First