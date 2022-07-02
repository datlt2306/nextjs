import Link from 'next/link';
import style from './header.module.scss';
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className={style.menu}>
            <li><Link href="/" className={style.menu__link}>menu 1</Link></li>
            <li><Link href="/products" className={style.menu__link}>menu 2</Link></li>
            <li><Link href="/about" className={style.menu__link}>menu 3</Link></li>
        </ul>
    </div>
  )
}

export default Header

