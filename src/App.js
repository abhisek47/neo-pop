import logo from './logo.svg'
import './App.css'
import { Button, Typography } from '@cred/neopop-web/lib/components'
import { FontVariant } from '@cred/neopop-web/lib/primitives'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Typography {...FontVariant.HeadingBold20} fontSize='32' style={{margin: '2rem 0'}} >
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Button
          variant='primary'
          kind='elevated'
          size='big'
          colorMode='dark'
          onClick={() => {
            console.log("I'm clicked")
          }}
        >
          Learn React
        </Button>
      </header>
    </div>
  )
}

export default App
