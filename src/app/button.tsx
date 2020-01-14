import React, {FC, useMemo} from "react"
import classNames from "classnames"

import {useAsyncState} from "../async/context"
import Loader from "../async/loader"
import Fade from "./fade"
import Link from "./link"

import classes from "./button.module.scss"

type HTMLButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "color" | "size" | "prefix"
>

export type ButtonProps = HTMLButtonProps & {
  className?: string
  color?: "green" | "gray" | "red" | "transparent"
  size?: "md" | "sm"
  prefix?: FC<React.SVGProps<SVGSVGElement>>
  to?: string
}

function withFragment(): FC {
  return ({children}) => <>{children}</>
}

function withLink(to: string): FC {
  return ({children}) => <Link to={to}>{children}</Link>
}

const Button: FC<ButtonProps> = props => {
  const {className, color, size, prefix, type = "button", to, ...buttonProps} = props
  const Prefix = prefix || null
  const loading = useAsyncState()
  const Container = useMemo(() => (to ? withLink(to) : withFragment()), [to])

  return (
    <Container>
      <button
        type={type}
        {...buttonProps}
        className={classNames(
          classes.button,
          classes[color || "green"],
          classes[size || "md"],
          props.className,
        )}
      >
        {Prefix && (
          <Fade watch={loading} onTrue={<Loader />} onFalse={<Prefix className={classes.icon} />} />
        )}
        {props.children}
      </button>
    </Container>
  )
}

export default Button
