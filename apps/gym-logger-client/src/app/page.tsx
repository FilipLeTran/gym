import styles from './page.module.scss';
import WorkoutSplit from './components/WorkoutSplit/';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WorkoutSplit />
      </main>
    </div>
  );
}
