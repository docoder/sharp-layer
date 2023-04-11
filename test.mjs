import { sharp } from 'sharp'
// Generate an image from text
sharp({
  text: {
    text: 'Hello, world!',
    width: 400, // max width
    height: 300 // max height
  }
}).toFile('text_bw.png').done()
