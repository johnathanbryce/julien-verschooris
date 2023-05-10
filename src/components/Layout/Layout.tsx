import styles from './Layout.module.css';
// internal components

interface LayoutProps {
    children: any
}

function Layout({children}: LayoutProps) {
  return (
    <div className={styles.container}>
        <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout