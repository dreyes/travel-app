# Travel App Project

## Overview
This project requires you to create an asynchronous web app that uses multiple Web APIs and user data to dynamically update the UI. 

## Server
The app is running on an express server `server.js`. The server contains key information about the APIs in use.

## APIs
Four APIs are being used in the process.
1. Geonames API: This API receives a location name as an input and returns data about the city's geolocation, specifically the longitude and latitude. 
2. Weatherbit API: This API receives the geolocation (latitude and longitude) of a city and returns weather data for that location. This API is used to collect current data for near future trips, and weather forecast data for trips later than 10 days. 
3. Pixapay API: This API receives a location name as an input and returns an image of that location. If there's no image data for the location, image data is collected for the country of that location.
4. REST Countries API: This API receives a country name as an input and returns data about the country.

## Extras
- Multiple trips can be added or removed.
- Start date and end date for each trip are collected and trip total is calculated.
- Trips can be printed or exported to PDF.
- Flight info, notes and lodging information can be added.
- Country information added by REST Countries API.
- Icons added for weather data.
- Current weather and weather forecast collected.
- Responsive design.