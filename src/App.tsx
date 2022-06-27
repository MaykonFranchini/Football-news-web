import { useEffect, useState } from 'react'

import { Header } from "./components/Header"
import { Club, Sidebar } from "./components/Sidebar"
import './global.css'
import  './App.module.css'
import { NewsBox } from "./components/NewsBox"
import { ClubProfile } from './components/ClubProfile'

function App() {

  const [clubList, setClubList] = useState<Club[]>([]);
  const [selectedClub, setSelectedClub] = useState('');
  const [selectedClubProfile, setSelectedClubProfile] = useState({ name: 'Flamengo', logo_url: "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/10/Flamengo-2018.svg", source_url:"https://ge.globo.com/futebol/times/flamengo/"});
  
  
  useEffect(() => {
   const getClubs = async() => {
    const response = await fetch('https://football-news-api-production.up.railway.app/clubs')
     const data = await response.json()
     
     setClubList(data.clubs)
   }

   getClubs()
  }, [])

  function updateSelectedClub(club: string) {
    setSelectedClub(club)

    const clubProfile = clubList.filter(team => team.name === club)
    
    setSelectedClubProfile({name: clubProfile[0].name,
      logo_url: clubProfile[0].logo_url,
      source_url: clubProfile[0].source_url
    })

  }

  function returnToClubSelection() {
    setSelectedClub('')
  }

  return (
    <>
      <Header/>
      <main>
        {!selectedClub ? <Sidebar clubsList={clubList} club={selectedClub} onUpdateSelectedClub={updateSelectedClub} /> : <ClubProfile onReturnToClubList={returnToClubSelection} logo_url={selectedClubProfile.logo_url} name={selectedClubProfile.name} />}
        <NewsBox club={selectedClub} />

      </main>
    </>
  )
}

export default App
