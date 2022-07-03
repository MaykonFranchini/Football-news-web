import { ArrowUUpLeft } from 'phosphor-react';
import styles from './ClubProfile.module.css';

interface ProfileProps {
  name: string;
  logo_url: string;
  onReturnToClubList: ()=> void;
}



export function ClubProfile({ logo_url, name, onReturnToClubList }:ProfileProps) {
  return (
    <aside className={styles.clubProfileContainer}>
      <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=80" />
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src={logo_url} alt={name} />
        </div>
        <strong>{name}</strong>
      </div>
      <div className={styles.returnButtomWrapper}>
        <button className={styles.return} onClick={onReturnToClubList}> <ArrowUUpLeft size={32} weight="bold" /></button>
      </div>
      <div className={styles.newsletterSubBtn}>
      <button>Subscribe</button>
      </div>
      
    </aside>
  )
}
