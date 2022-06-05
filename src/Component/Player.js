import React, {useState, useEffect, useRef} from 'react'
import Details from './Details'
import Control from './Control'

function Player({songs, currentIndex, nextIndex, setCurrentIndex}) {

    const [status, setStatus] = useState(false) //playing: true; notplaying: false
    const [loop, setLoop] = useState(false)
    const audio = useRef()

    useEffect(()=> {
        status ? audio.current.play() : audio.current.pause() 
    })

    useEffect(() => {
        if(!loop) {
            audio.current.onended = () => {
                setCurrentIndex(nextIndex)
               }
        } else {
            audio.current.onended = () => {
               audio.current.play()
               }
        }
      
    })

    
    
    const skipSong = (forward = true) => {
        forward ? setCurrentIndex(()=> {
            let current = currentIndex
            current++ 

            if(current > songs.length - 1) {
                current = 0
            }
            
            return current
        }) : setCurrentIndex(() => {
            let current = currentIndex
            current--

            if(current < 0) {
                current = songs.length - 1
            }
            
            return current
        })
    }

    return (
        <div className='player'>
            <audio src={songs[currentIndex].path} ref={audio}></audio>
            <p className='song-header'>
                <strong>Playing now:
                    </strong> {songs[currentIndex].name}
            </p>

            <Details 
            songs={songs} 
            currentIndex={currentIndex} 
            status = {status}
            setStatus = {setStatus}
            />

            <Control 
            status = {status}
            setStatus = {setStatus}
            skipSong = {skipSong}
            audio = {audio}
            loop = {loop}
            setLoop = {setLoop}
            />

            <p className='song-info'>
                <strong>Next up:
                    </strong> {songs[nextIndex].name}
                <strong> by
                    </strong> {songs[nextIndex].singer}
            </p>
        </div>
    )
    }

export default Player