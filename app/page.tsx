import { ThemeProvider } from 'next-themes'
import Portfolio from '../components/portfolio'

export default function PortfolioComponent() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Portfolio />
    </ThemeProvider>
  )
}
