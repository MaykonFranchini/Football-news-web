import { useEffect, useState } from 'react'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from "./components/Header"
import { Club, Sidebar } from "./components/Sidebar"
import { NewsBox } from "./components/NewsBox"
import { ClubProfile } from './components/ClubProfile'
import { SubscriptioModal, Inputs } from './components/SubsciptionModal'

import 'react-toastify/dist/ReactToastify.css';
import './global.css'
import  './App.module.css'



function App() {

  const [clubList, setClubList] = useState<Club[]>([]);
  const [selectedClub, setSelectedClub] = useState('');
  const [selectedClubProfile, setSelectedClubProfile] = useState({ name: '', logo_url: '', source_url:"", id:''});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sucsessSubscription = () => toast.success("Inscricao realizada com sucesso!");
  const errorSubscription = () => toast.error("Erro ao realizar inscricao. Tente novamente!");

  function onSubmit(data: Inputs) {
    const {email, first_name, last_name} = data;
    
    axios.post('https://football-news-api-production.up.railway.app/subscription', 
      {email, first_name, last_name, club_id: selectedClubProfile.id}
    ).then(function (response) {
      sucsessSubscription();
    })
    .catch(function (error) {
      errorSubscription();
    });
    

    
    setModalIsOpen(false);

    
  }

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
      source_url: clubProfile[0].source_url,
      id: clubProfile[0].id
    })

  }

  function returnToClubSelection() {
    setSelectedClub('')
    setSelectedClubProfile({ name: '', logo_url: '', source_url:"", id:''})
  }

  function handleOpenModal() {
    setModalIsOpen(true)
  }
  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <>
    <ToastContainer/>
      <Header/>
      <main>
        <img className='logoBackground' src={selectedClubProfile.logo_url} alt="" />
        {!selectedClub ? 
          <Sidebar 
            clubsList={clubList} 
            club={selectedClub} 
            onUpdateSelectedClub={updateSelectedClub} 
          /> : 
          <ClubProfile 
            openModal={handleOpenModal} 
            onReturnToClubList={returnToClubSelection} 
            logo_url={selectedClubProfile.logo_url} 
            name={selectedClubProfile.name} 
          />
        }
        <NewsBox club={selectedClub} />
        <SubscriptioModal isOpen={modalIsOpen} onRequestClose={closeModal} onSubmit={onSubmit}/>
      </main>
    </>
  )
}

export default App
