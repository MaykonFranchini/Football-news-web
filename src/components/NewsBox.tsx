import styles from './NewsBox.module.css'

import { Newspaper } from 'phosphor-react'

export function NewsBox({club}:any) {
  
  return (

        <div>
        {!club &&  
          <div className={styles.newsBox}>
            <Newspaper size={48} />
            <p>Selecione seu clube para ter acesso as ultimas noticias</p>
          </div>
        }

        <div>{club}</div>
        </div>
  )
}