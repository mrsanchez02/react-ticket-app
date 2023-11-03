export const getLasts = async () => {
  const response = await fetch(import.meta.env.VITE_API_SERVER)

  const data = await response.json()
  console.log(data)
  return data.lastTickets
}