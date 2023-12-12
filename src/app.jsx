/* eslint-disable perfectionist/sort-imports */
import 'src/global.css'

import ThemeProvider from 'src/theme'
import Router from 'src/routes/sections'


export default function App () {
  return (
    <ThemeProvider>
        <Router />
    </ThemeProvider>
  )
}
