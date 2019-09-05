import { AppPageContext } from 'next'
import Nav from '../components/Nav'
// ______________________________________________________
//
type Props = {
  from: string
}
type Query = {
  from?: string
}
// ______________________________________________________
//
function Page(props: Props) {
  return (
    <div>
      <p>from: {props.from}</p>
      <Nav from={this.props.from} />
    </div>
  )
}
Page.getInitialProps = async ({
  query
}: AppPageContext<Query>): Promise<Props> => {
  return { from: query.from || 'unknown' }
}
// ______________________________________________________
//
export default Page
