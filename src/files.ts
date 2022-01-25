import fs from 'fs';

export function read(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8' , (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.split('\n'))
      }
    })
  })
}

export function write(path: string, content: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
