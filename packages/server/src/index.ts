import { random, sum } from '@proj/utils'
import * as http from 'http'

const server = http.createServer((_, response) => {
  const numbers = [...Array(2).keys()].map(() => random())
  const sumOf = sum(...numbers)

  response.end(
    `The sum of two random numbers (${numbers
      .map((n) => `\`${n}\``)
      .join(', ')}) is ${sumOf}.`
  )
})

const port = process.env.PORT || 3000

server.listen(port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server listening at http://localhost:${port}/.`)
  }
})
