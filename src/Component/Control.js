import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward, faRedo } from '@fortawesome/free-solid-svg-icons'

function Control({ status, setStatus, skipSong, loop, setLoop }) {

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(!active)
    }

  return (
    <div className='control'>
        <button className='back-btn' onClick={() => {
            skipSong(false);
            setStatus(true)
        } 
        }>
            <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className='play-btn' onClick={() => setStatus(!status)}>
            <FontAwesomeIcon icon={status ? faPause : faPlay} />
        </button>
        <button className='next-btn' onClick={() =>  {
            skipSong()
            setStatus(true)
        }   
        }>
            <FontAwesomeIcon icon={faForward} />
        </button>

        <button className={active ? 'active' : 'loop-btn' } onClick={() =>  {
            setLoop(!loop)
            handleActive()

        }
        }>
            <FontAwesomeIcon icon={faRedo} />
        </button>
    </div>
  )
}

export default Control