import styles from './styles/text-link.module.scss';

export default function TextLink({href, children}: {href: string, children: React.ReactNode}) {
  return (
    <a href={href} target="_blank" className={styles.link}>{children}</a>
  )
}
