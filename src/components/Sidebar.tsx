import { useState } from 'react';
import styles from './Sidebar.module.css'

interface Club {
  id: string;
  name: string;
  source_url: string;
  logo_url: string;
  location: string;
}

interface ClubsProps {
  clubsList: Club[];
  club: string;
  onUpdateSelectedClub: (club: string) => void;
}

export function Sidebar({clubsList, club, onUpdateSelectedClub}:ClubsProps) {

  const [selectedLocation, setSelectedLocation] = useState('serie-a')

  const filteredClubList = clubsList.filter(club => club.location === selectedLocation)

  function updateSelectedClub(event: any) {
    const selectedClubName = event.target.alt
  
    onUpdateSelectedClub(selectedClubName)
  }

  function handleSelectLocation(event:React.MouseEvent<HTMLElement> | any) {
    const location = event.target.dataset.location 
    
    setSelectedLocation(location)
  }  

  return (
    <aside>
      {!club && 
        <div>
          <h1>Selecione seu clube</h1>

          <div className={styles.clubsList}>
            <nav>
              <a href="#" data-location='serie-a' onClick={handleSelectLocation}>Serie A</a>
              <a href="#" data-location='serie-b' onClick={handleSelectLocation}>Serie B</a>
              <a href="#" data-location='europa' onClick={handleSelectLocation}>Europa</a>
            </nav>
            <div className={styles.clubsBox}>
              {filteredClubList.map(club => <button onClick={updateSelectedClub} key={club.name}><img src={club.logo_url} alt={club.name}/></button>)}
            </div>
          </div>
        </div>
        
      }



    </aside>
  )
}