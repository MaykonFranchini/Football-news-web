import { useState } from 'react'

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'
import  './App.module.css'
import { NewsBox } from "./components/NewsBox"
import { ClubProfile } from './components/ClubProfile'


function App() {
  const clubs = [
    {
      "id": "6dade238-b918-4047-a8e6-ee9707ea6b25",
      "name": "América-MG",
      "source_url": "https://ge.globo.com/futebol/times/america-mg/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/02/28/America-MG-VERDE-fev2019-01.svg",
      "location": "serie-a"
    },
    {
      "id": "f0657084-2532-4fa0-85b9-0d56ac66d332",
      "name": "Athletico-PR",
      "source_url": "https://ge.globo.com/pr/futebol/times/athletico-pr/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/09/Athletico-PR.svg",
      "location": "serie-a"
    },
    {
      "id": "22b807a5-b56b-47d8-a8d4-986262df73b1",
      "name": "Atlético-GO",
      "source_url": "https://ge.globo.com/go/futebol/times/atletico-go/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2020/07/02/atletico-go-2020.svg",
      "location": "serie-a"
    },
    {
      "id": "6ef3008a-13f3-491d-8956-e837dac1d417",
      "name": "Atlético-MG",
      "source_url": "https://ge.globo.com/futebol/times/atletico-mg/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/10/atletico-mg.svg",
      "location": "serie-a"
    },
    {
      "id": "ef47833c-e127-4513-883c-f67078fdc36c",
      "name": "Avaí",
      "source_url": "https://ge.globo.com/sc/futebol/times/avai/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/09/04/avai-futebol-clube.svg",
      "location": "serie-a"
    },
    {
      "id": "88829633-781c-4adf-90bd-06d6eacedfa0",
      "name": "Bahia",
      "source_url": "https://ge.globo.com/ba/futebol/times/bahia/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/bahia.svg",
      "location": "serie-b"
    },
    {
      "id": "d9cfe35a-414e-41ae-bafe-6b261134c1e3",
      "name": "Botafogo",
      "source_url": "https://ge.globo.com/futebol/times/botafogo/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/02/04/botafogo-svg.svg",
      "location": "serie-a"
    },
    {
      "id": "b42df05f-2c34-44f2-94a5-06ac7b609199",
      "name": "Bragantino",
      "source_url": "https://ge.globo.com/sp/vale-do-paraiba-regiao/futebol/times/bragantino/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/06/28/bragantino.svg",
      "location": "serie-a"
    },
    {
      "id": "28013ccf-04eb-4dd4-8a52-78f2c6ac9a87",
      "name": "Brusque",
      "source_url": "https://ge.globo.com/sc/futebol/times/brusque/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2020/09/06/brusque.svg",
      "location": "serie-b"
    },
    {
      "id": "12361400-cf9e-4d38-b458-2b57865fe710",
      "name": "CRB",
      "source_url": "https://ge.globo.com/al/futebol/times/crb/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/crb.svg",
      "location": "serie-b"
    },
    {
      "id": "44e352d4-a797-4bc2-9f02-54bf36b8eb78",
      "name": "CSA",
      "source_url": "https://ge.globo.com/al/futebol/times/csa/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/csa.svg",
      "location": "serie-b"
    },
    {
      "id": "659edbf9-645d-4da2-a673-b47537438411",
      "name": "Ceará",
      "source_url": "https://ge.globo.com/ce/futebol/times/ceara/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/10/10/ceara.svg",
      "location": "serie-a"
    },
    {
      "id": "7a08b3cf-a1ed-4762-be2f-7ac500c0a797",
      "name": "Chapecoense",
      "source_url": "https://ge.globo.com/sc/futebol/times/chapecoense/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/06/21/CHAPECOENSE-2018.svg",
      "location": "serie-b"
    },
    {
      "id": "885851d2-0d7f-4e0d-b02c-bda7b6910f0f",
      "name": "Chelsea",
      "source_url": "https://ge.globo.com/futebol/futebol-internacional/futebol-ingles/times/chelsea/",
      "logo_url": "https://s.glbimg.com/es/sde/f/equipes/2018/03/11/chelsea.svg",
      "location": "europa"
    },
    {
      "id": "20f92f99-c594-486e-819e-ecadcfd9e427",
      "name": "Corinthians",
      "source_url": "https://ge.globo.com/futebol/times/corinthians/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians.svg",
      "location": "serie-a"
    },
    {
      "id": "cc8411eb-4f7b-4e48-8c3a-9aac0790b03f",
      "name": "Coritiba",
      "source_url": "https://ge.globo.com/pr/futebol/times/coritiba/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/coritiba.svg",
      "location": "serie-a"
    },
    {
      "id": "608a5b86-4722-4eca-932d-af8da709550a",
      "name": "Criciúma",
      "source_url": "https://ge.globo.com/sc/futebol/times/criciuma/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/criciuma.svg",
      "location": "serie-b"
    },
    {
      "id": "6714bbae-6017-4261-a4d9-74d448a38a59",
      "name": "Cruzeiro",
      "source_url": "https://ge.globo.com/futebol/times/cruzeiro/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/02/13/cruzeiro_2021.svg",
      "location": "serie-b"
    },
    {
      "id": "8711aab6-f2aa-408f-af24-3b7e6f0fda1e",
      "name": "Cuiabá",
      "source_url": "https://ge.globo.com/mt/futebol/times/cuiaba/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/12/26/Cuiaba_EC.svg",
      "location": "serie-a"
    },
    {
      "id": "d8524026-7ee9-4cda-a6c8-2bb9cdb7459c",
      "name": "Flamengo",
      "source_url": "https://ge.globo.com/futebol/times/flamengo/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/10/Flamengo-2018.svg",
      "location": "serie-a"
    },
    {
      "id": "d537bd80-9d2b-4ca1-9d02-28f3c8fe2de8",
      "name": "Fluminense",
      "source_url": "https://ge.globo.com/futebol/times/fluminense/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/fluminense.svg",
      "location": "serie-a"
    },
    {
      "id": "b157b5a7-6497-4768-a681-566b117f507d",
      "name": "Fortaleza",
      "source_url": "https://ge.globo.com/ce/futebol/times/fortaleza/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/09/19/Fortaleza_2021_1.svg",
      "location": "serie-a"
    },
    {
      "id": "00528320-3e93-4b5a-8dc7-7fd88e23b02d",
      "name": "Goiás",
      "source_url": "https://ge.globo.com/go/futebol/times/goias/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/03/01/GOIAS-2021.svg",
      "location": "serie-a"
    },
    {
      "id": "ee327222-de93-4ee4-9f32-112bc5bdd6d1",
      "name": "Grêmio",
      "source_url": "https://ge.globo.com/rs/futebol/times/gremio/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/gremio.svg",
      "location": "serie-b"
    },
    {
      "id": "37c9194b-e1c6-4da0-a89e-c8091ef70c53",
      "name": "Guarani",
      "source_url": "https://ge.globo.com/sp/campinas-e-regiao/futebol/times/guarani/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/guarani.svg",
      "location": "serie-b"
    },
    {
      "id": "2dd5e6eb-dd04-4327-b971-1384f64e5d03",
      "name": "Internacional",
      "source_url": "https://ge.globo.com/rs/futebol/times/internacional/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/internacional.svg",
      "location": "serie-a"
    },
    {
      "id": "085e6a79-62f1-46d1-abef-f39bf51edd35",
      "name": "Ituano",
      "source_url": "https://ge.globo.com/sp/tem-esporte/futebol/times/ituano/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/01/08/Ituano_Futebol_Clube.svg",
      "location": "serie-b"
    },
    {
      "id": "d3a55880-1423-4245-8695-74c842bbf43b",
      "name": "Juventude",
      "source_url": "https://ge.globo.com/rs/futebol/times/juventude/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/04/29/Juventude-2021-01.svg",
      "location": "serie-a"
    },
    {
      "id": "02fe5509-f025-4ac9-be4b-ed327f5333b4",
      "name": "Londrina",
      "source_url": "https://ge.globo.com/pr/futebol/times/londrina/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/londrina.svg",
      "location": "serie-b"
    },
    {
      "id": "46b23c58-1bb8-491b-9c15-678d877fe025",
      "name": "Novorizontino",
      "source_url": "https://ge.globo.com/sp/tem-esporte/futebol/times/novorizontino/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/01/08/Novohorizontino.svg",
      "location": "serie-b"
    },
    {
      "id": "eae63bff-9a9c-4c33-b7d0-1a96486656da",
      "name": "Náutico",
      "source_url": "https://ge.globo.com/pe/futebol/times/nautico/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/01/03/Nautico.svg",
      "location": "serie-b"
    },
    {
      "id": "0ecb1ff6-1dd2-49ce-875c-cd907c3e59ca",
      "name": "Operário-PR",
      "source_url": "https://ge.globo.com/pr/futebol/times/operario-pr/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/12/27/Operário-PR.svg",
      "location": "serie-b"
    },
    {
      "id": "ea7b54a8-71e9-4bda-824a-375451c778c9",
      "name": "Palmeiras",
      "source_url": "https://ge.globo.com/futebol/times/palmeiras/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/07/06/Palmeiras.svg",
      "location": "serie-a"
    },
    {
      "id": "61f1a9dc-5b8f-4af9-8804-70b3437f801f",
      "name": "Ponte Preta",
      "source_url": "https://ge.globo.com/sp/campinas-e-regiao/futebol/times/ponte-preta/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/03/17/ponte-preta.svg",
      "location": "serie-b"
    },
    {
      "id": "bb070851-1075-4999-a33e-61238bea0af1",
      "name": "Sampaio Corrêa",
      "source_url": "https://ge.globo.com/ma/futebol/times/sampaio-correa/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/sampaio-correa.svg",
      "location": "serie-b"
    },
    {
      "id": "8a578de2-5ca8-48a9-ad11-7d88af646610",
      "name": "Santos",
      "source_url": "https://ge.globo.com/sp/santos-e-regiao/futebol/times/santos/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/santos.svg",
      "location": "serie-b"
    },
    {
      "id": "7dab6456-53b0-4bf2-84fc-26b4f07daa53",
      "name": "Sport",
      "source_url": "https://ge.globo.com/pe/futebol/times/sport/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sport.svg",
      "location": "serie-b"
    },
    {
      "id": "2f676006-67e2-453c-95c1-d3bda6585268",
      "name": "São Paulo",
      "source_url": "https://ge.globo.com/futebol/times/sao-paulo/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg",
      "location": "serie-a"
    },
    {
      "id": "f080cd4b-ab4b-4c78-9b69-8f0f2e5b99d6",
      "name": "Tombense",
      "source_url": "https://ge.globo.com/mg/zona-da-mata-centro-oeste/futebol/times/tombense/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2019/01/21/Tombense.svg",
      "location": "serie-b"
    },
    {
      "id": "9b9bb830-6570-4cc0-ae27-839f544cd182",
      "name": "Vasco",
      "source_url": "https://ge.globo.com/futebol/times/vasco/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/09/04/vasco_SVG.svg",
      "location": "serie-b"
    },
    {
      "id": "8c5c86b9-75dd-45c9-9ac2-b7d2c8631949",
      "name": "Vila Nova",
      "source_url": "https://ge.globo.com/go/futebol/times/vila-nova/",
      "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2021/04/07/vilanova.svg",
      "location": "serie-b"
    }
  ]
  const [selectedClub, setSelectedClub] = useState('');

  function updateSelectedClub(club: string) {
    setSelectedClub(club)
  }
  const clubMock = {
    "id": "d8524026-7ee9-4cda-a6c8-2bb9cdb7459c",
    "name": "Flamengo",
    "source_url": "https://ge.globo.com/futebol/times/flamengo/",
    "logo_url": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/10/Flamengo-2018.svg",
    "location": "Brasil"
  }
  return (
    <>
      <Header/>
      <main>
        {!selectedClub ? <Sidebar clubsList={clubs} club={selectedClub} onUpdateSelectedClub={updateSelectedClub}/> : <ClubProfile club={clubMock} />}
        <NewsBox club={selectedClub}/>
        
      </main>
    </>
  )
}

export default App
