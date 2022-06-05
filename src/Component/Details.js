import React, {useEffect, useRef} from 'react'

function Details({songs, currentIndex, status, setStatus}) {

    const img = useRef()

    // useEffect(()=> {
    //     if(status) {
    //         img.current.animate([
    //             {transform: 'rotate(360deg)'}  
    //         ], {
    //             duration: 10000,
    //             iterations: Infinity
    //         }) 
    //     } else {
           
    //     }
    // }, [status])


  return (
    <div className='details'>
        <div className='details-img'>
            <img ref={img} src={songs[currentIndex].image} alt='' />
        </div>
        <h3 className='details-name'>{songs[currentIndex].name}</h3>
        <h4 className='details-singer'>{songs[currentIndex].singer}</h4>
    </div>
  )
}

export default Details