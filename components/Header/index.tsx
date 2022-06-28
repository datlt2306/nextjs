import style from './Header.module.scss';
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className={style.menu}>
            <li><a href="" className={style.menu__link}>menu 1</a></li>
            <li><a href="" className={style.menu__link}>menu 2</a></li>
            <li><a href="" className={style.menu__link}>menu 3</a></li>
            <li><a href="" className={style.menu__link}>menu 4</a></li>
        </ul>
    </div>
  )
}

export default Header

