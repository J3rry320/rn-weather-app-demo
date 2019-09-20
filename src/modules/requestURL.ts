export function API_SEARCH_WEATHER(cityName: string) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=4a9a2cbc418ca3ab94f2df06b5ef537a`;
}
