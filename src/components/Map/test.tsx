import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
   it('should render without any masker ', () => {
      render(<Map />)
      expect(
         screen.getByRole('link', {
            name: /a js library for interactive maps/i
         })
      )
   })
   it('should render with the marker in correct place ', () => {
      const place = {
         id: '1',
         name: 'Petropolis',
         slug: 'petropolis',
         location: {
            latitude: 0,
            longitude: 0
         }
      }

      const placeTwo = {
         id: '2',
         name: 'Alvorada',
         slug: 'Alvorada',
         location: {
            latitude: 129,
            longitude: -50
         }
      }

      render(<Map places={[place, placeTwo]} />)

      expect(screen.getByTitle(/Petropolis/i)).toBeInTheDocument()
      expect(screen.getByTitle(/Alvorada/i)).toBeInTheDocument()
   })
})
