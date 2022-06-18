import styles from './ClubProfile.module.css'

export function ClubProfile({club}:any) {
  return (
    <aside className={styles.clubProfileContainer}>
      <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=570&q=80" />
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src={club.logo_url} alt={club.name} />
        </div>
        <strong>{club.name}</strong>
      </div>
    </aside>
  )
}