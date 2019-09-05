import Link from './Link'
// ______________________________________________________
//
type Props = {
  from: string
}
// ______________________________________________________
//
function Component(props: Props) {
  return (
    <nav>
      <ul>
        <li>
          <Link path="/" query={{ from: props.from }}>
            <a>to "/"</a>
          </Link>
        </li>
        <li>
          <Link path="/about/" query={{ from: props.from }}>
            <a>to "/about/"</a>
          </Link>
        </li>
        <li>
          <Link path="/howto/" query={{ from: props.from }}>
            <a>to "/howto/"</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

// ______________________________________________________
//
export default Component
