import React, {FC} from "react"
import {useTranslation} from "react-i18next"
import classNames from "classnames"

import Link from "./link"

import classes from "./nav.module.scss"

const Nav: FC = () => {
  const {t} = useTranslation()

  return (
    <nav className={classes.nav}>
      <header className={classes.logo}>
        <img src="/images/logo.svg" alt="" />
      </header>

      <Link className={classNames(classes.item, {[classes.active]: true})} to="/screens">
        <span className={classes.itemIcon}>
          <img src="#" alt="" />
        </span>
        <span className={classes.itemText}>{t("screens")}</span>
        <span className={classes.itemCount}>1</span>
      </Link>

      <Link className={classes.item} to="/playlists">
        <span className={classes.itemIcon}>
          <img src="#" alt="" />
        </span>
        <span className={classes.itemText}>{t("playlists")}</span>
      </Link>

      <Link className={classes.subitem} to="/playlist/1">
        <span className={classes.itemText}>
          <span className={classes.itemPill} />
          Playlist exemple
        </span>
      </Link>

      <Link className={classes.item} to="/plannings">
        <span className={classes.itemIcon}>
          <img src="#" alt="" />
        </span>
        <span className={classes.itemText}>{t("plannings")}</span>
      </Link>

      <Link className={classes.subitem} to="/plannings/1">
        <span className={classes.itemText}>
          <span className={classes.itemPill} />
          Planning exemple
        </span>
      </Link>
    </nav>
  )
}

export default Nav
