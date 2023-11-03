export const getLasts = async () => {
  const response = await fetch('http://localhost:8080/api/last-tickets')
  const data = await response.json()
  console.log(data)
  return data.lastTickets
}