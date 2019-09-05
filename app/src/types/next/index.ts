import { NextPageContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
// ______________________________________________________
//
type A1<T> = T extends (a1: infer I) => any ? I : never
declare module 'next' {
  // NextPageContext 型の強化版。
  // 規定済みの query プロパティを Ommit で落としつつ
  // Generics T で注入可能なものとしている。
  // T extends ParsedUrlQuery でプロパティを抑止しつつ、
  // Generics T が与えらていないアノテーションでは never に倒れる。
  // これにより Query が不要なページへの遷移 <Link> タグに
  // query 付与を試みると、コンパイルエラーを得られる。
  type AppPageContext<
    T extends ParsedUrlQuery = never
  > = Omit<NextPageContext, 'query'> & { query: T }
  // Page Component から、getInitialProps の
  // 引数 Context 型を抽出する型
  type GetInitialPropsContext<
    T extends { getInitialProps?: unknown }
  > = A1<T['getInitialProps']>
}
