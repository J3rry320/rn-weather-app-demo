declare namespace Weatherapp {
  type Maybe<t> = t | null;
  interface IWeatherReducers {
    readonly weatherResults: Maybe<WeatherResults>;
    readonly weatherResultsLoading: Maybe<boolean>;
    readonly weatherResultsError: Maybe<Error>;
  }

  interface IAppState {
    weatherResults: IWeatherReducers;
  }
  export interface Coord {
    lon: number;
    lat: number;
  }

  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  }

  export interface Wind {
    speed: number;
    deg: number;
  }

  export interface Clouds {
    all: number;
  }

  export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  export interface WeatherResults {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
}
