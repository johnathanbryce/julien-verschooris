import styles from './Layout.module.css';
// internal components

interface LayoutProps {
    children: any
}

function Layout({children}: LayoutProps) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default Layout