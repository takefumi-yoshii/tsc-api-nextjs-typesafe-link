export const config = {
  baseDir: '.',
  srcDir: './src',
  distDir: './src/types/next/dist',
  getInitialPropsContextTypeName: 'GetInitialPropsContext',
  pagesContextsTypeName: 'PagesContexts',
  queriesTypeName: 'Queries'
}
export type Config = typeof config
