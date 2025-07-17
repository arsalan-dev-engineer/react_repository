import styles from './MainLayout.module.css';

// MainLayout.jsx
export default function MainLayout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      {children}
    </div>
  );
}
