
export const openWeatherKey: string = 'bb481abe6d37c9527b03cf0575897349';
export const base_weather_api_url: string = 'https://api.openweathermap.org/data/2.5/weather?';

const cityUrl: string = `${base_weather_api_url}q=${cityName}/${openWeatherKey}`

