export function parseInfo(str) {
  const [email, password, token] = str.split(':')
  return { email, password, token }
}
