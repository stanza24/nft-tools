export function parseInfo(str: string) {
  const [email, password, token] = str.split(':')
  return { email, password, token }
}
