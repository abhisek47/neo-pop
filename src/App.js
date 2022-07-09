import './App.css'
import {
  Button,
  Row,
  Typography,
  ScoreMeter,
  VerticalSpacer
} from '@cred/neopop-web/lib/components'
import { FontVariant } from '@cred/neopop-web/lib/primitives'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Row className='v-center h-center'>
          <ScoreMeter
            colorConfig={{
              dotColor: '',
              indicatorColors: {
                decrement: '#FFB098',
                increment: '#5CDDBE',
                neutral: '#e2e2e2'
              },
              meterBorderColor: '#3D3D3D',
              meterStrokeBackground: '#0d0d0d',
              meterStrokeColor: {
                average: '#EDFE79',
                excellent: '#06C270',
                poor: '#F29947'
              },
              scoreColor: '#ffffff',
              scoreContainerBackground: '#161616',
              scoreContainerBorder: '#0d0d0d'
            }}
            colorMode='dark'
            lowerLimit={300}
            reading={770}
            scoreDesc='Good'
            type='average'
            upperLimit={900}
          />
          <VerticalSpacer n={14} />
          <ScoreMeter
            colorConfig={{
              dotColor: '#161616',
              indicatorColors: {
                decrement: '#FFB098',
                increment: '#5CDDBE',
                neutral: '#e2e2e2'
              },
              meterBorderColor: '#E0E0E0',
              meterStrokeBackground: 'transparent',
              meterStrokeColor: {
                average: '#EDFE79',
                excellent: '#06C270',
                poor: '#F29947'
              },
              scoreColor: '#0d0d0d',
              scoreContainerBackground: '#EFEFEF',
              scoreContainerBorder: '#FBFBFB'
            }}
            colorMode='light'
            lowerLimit={300}
            oldReading={620}
            reading={780}
            scoreDesc='Excellent'
            showIndicators
            type='excellent'
            upperLimit={900}
          />
        </Row>
        <Typography
          {...FontVariant.HeadingBold20}
          fontSize='32'
          style={{ margin: '2rem 0' }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Button
          variant='primary'
          kind='elevated'
          size='big'
          showArrow
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
