import { extendTheme } from '@chakra-ui/react'

const themeCinzel = extendTheme({
    fonts: {
      heading: 'Trajan',
      body: 'Trajan',
    },
    fontWeights: {
      bold: 700, // ou o valor específico para a fonte Trajan
    },
  });

export default themeCinzel