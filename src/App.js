import {useState, useEffect} from 'react'
import Player from './Component/Player'

function App() {
  const songs = 
    [
    {
      name: "Hanh Phuc Moi",
      singer: "Do Nguyen Phuc",
      path: "./audio/hanhphucmoi.mp3",
      image: "./img/hanhphucmoi.jpg"
      },
      
      {
      name: "Khong Sao Ma Em Day Roi",
      singer: "Suni Ha Linh",
      path: "./audio/ksmedr.mp3",
      image: "./img/ksmedr.jpg"
      },

      {
      name: "Hom Nay Toi Buon",
      singer: "Phung Khanh Linh",
      path: "./audio/hntb.mp3",
      image: "./img/homnaytoibuon.jpg"
      },

      {
      name: "De Mi Noi Cho Ma Nghe",
      singer: "Hoang Thuy Linh",
      path: "./audio/dmncmn.mp3",
      image: "./img/dmncmn.png"
      },

      {
      name: "Angel Baby",
      singer: "Troye Sivan",
      path: "./audio/ab.mp3",
      image: "./img/angelbaby.jpg"
      },
      
      {
      name: "Your Name Engraved Herein",
      singer: "Crowd Lu",
      path: "./audio/vungkyuc.mp3",
      image: "./img/ctksttn.jpg"
      }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(0)

  useEffect(() => {
    setNextIndex(()=> {
      if(currentIndex + 1 > songs.length - 1) {
        return 0  
      } else {
        return currentIndex + 1
      }
    })
  }, [currentIndex])
  
 

  return (
    <>
    <div className='cover' style={{background: `url(${songs[currentIndex].image})`}}>
    <div className="App">
      <Player 
      songs = {songs}
      currentIndex = {currentIndex}
      setCurrentIndex = {setCurrentIndex} 
      nextIndex = {nextIndex}
      />
    </div>
    </div>
    </>
  )
}

export default App