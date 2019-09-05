import React from 'react'
import { Queries } from 'next'
import Link, { LinkProps } from 'next/link'
import qs from 'query-string'
// ______________________________________________________
//
type Props<T, P extends keyof T> = {
  children?: React.ReactNode
  path: P
  query?: T[P]
} & Omit<LinkProps, 'href'>
// ______________________________________________________
//
function Cumponent<T extends Queries, P extends keyof T>(
  props: Props<T, P>
) {
  const href = props.query
    ? `${props.path}?${qs.stringify(props.query)}`
    : (props.path as string)
  return (
    <Link
      href={href}
      as={props.as}
      replace={props.replace}
      scroll={props.scroll}
      shallow={props.shallow}
      passHref={props.passHref}
      prefetch={props.prefetch}
    >
      {props.children}
    </Link>
  )
}
// ______________________________________________________
//
export default Cumponent
