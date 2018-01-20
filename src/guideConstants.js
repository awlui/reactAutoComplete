const cities = [
  'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa'
]

const initialState = {
      currentInput: '',
      dirty: false,
      suggestedCities: [],
      currentIndex: undefined,
      displayList: true
    }

export {
  cities as CITIES,
  initialState
}