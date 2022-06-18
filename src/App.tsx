import { useEffect, useState } from 'react'

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import  './App.module.css'
import { NewsBox } from "./components/NewsBox"
import { ClubProfile } from './components/ClubProfile'
import { Club } from './components/Sidebar'

import { clubs } from './clubsList'
function App() {

  // const [clubList, setClubList] = useState([]);
  const [selectedClub, setSelectedClub] = useState('');
  const [selectedClubProfile, setSelectedClubProfile] = useState({ name: 'Flamengo', logo_url: "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/10/Flamengo-2018.svg"});

  // useEffect(() => {
  //  const getClubs = async() => {
  //    const response = await fetch('http://localhost:3333/clubs')
  //    const data = await response.json()
  //    console.log(data)
  //    setClubList(data)
  //  }

  //  getClubs()
  // }, [])



  function updateSelectedClub(club: string) {
    setSelectedClub(club)

    const clubProfile = clubs.filter(team => team.name === club)


    setSelectedClubProfile({name: clubProfile[0].name,
      logo_url: clubProfile[0].logo_url
    })

  }

  return (
    <>
      <Header/>
      <main>
        {!selectedClub ? <Sidebar clubsList={clubs} club={selectedClub} onUpdateSelectedClub={updateSelectedClub} /> : <ClubProfile logo_url={selectedClubProfile.logo_url} name={selectedClubProfile.name} />}
        <NewsBox club={selectedClub}/>

      </main>
    </>
  )
}

export default App
