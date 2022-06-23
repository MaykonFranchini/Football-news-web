import styles from './NewsBox.module.css'
import { Divide, Newspaper, SoccerBall, SpeakerNone } from 'phosphor-react'
import { useEffect, useState } from 'react'

interface News {
  title: string;
  link: string;
  img_url: string;
}
interface NewsBoxProps {
  club?: string
}

export function NewsBox({ club }:NewsBoxProps) {
  const [news, setNews] = useState<News[]>([]);
  

  useEffect(()=> {
    
    const url = `https://football-news-api-production.up.railway.app/latestsnews/${club}`
    const getNews = async() => {
      const response = await fetch(url)
      const {data} = await response.json()
            
      setNews(data)
    }
  
    getNews() 
  },[club])


  console.log(news);
  
  return (

    <div>
        {!club &&  
          <div className={styles.newsBox}>
            <Newspaper size={48} />
            <p>Selecione seu clube para ter acesso as ultimas noticias</p>
          </div>
        }

        <div className={styles.newsWrapper}>
          {news.length <= 0 && club && <div className={styles.loading}><span ><SoccerBall size={32} /><strong>{club}</strong><SoccerBall size={32} /></span></div>}
          
            {news.map(article => {
                return (
                  <div className={styles.newsCard} key={article.title}>
                     <img src={article.img_url} />
                     <a href={article.link}><p>{article.title}</p></a>
                  </div>
                )
              }
             )
            }
          
        </div>
    </div>
  )
}