import React from 'react'
import { AppPageContext } from 'next'
import Nav from '../../components/Nav'
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
class Page extends React.Component<Props> {
  static async getInitialProps({
    query
  }: AppPageContext<Query>): Promise<Props> {
    return { from: query.from || 'unknown' }
  }
  render() {
    return (
      <div>
        <p>from: {this.props.from}</p>
        <Nav from={this.props.from} />
      </div>
    )
  }
}
// ______________________________________________________
//
export default Page
