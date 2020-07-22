# :calendar: GOOGLE CALENDAR :calendar:

## Description

Application displays events related to Google email.

By default, it displays events for the next 7 days grouped by day, but it is possible to select to display events for one day, the next 7 days or the next 30 days from today. If the next 30 days is selected, the events will be grouped by week.

It is possible to add new events and delete existing ones.

The application was created using: React JS, Redux, redux-saga, react-router-dom, Moment.js, SASS and Google Calendar API (v3).

## Preview

![Google-Calendar](https://user-images.githubusercontent.com/22341530/82998585-36ee7080-a008-11ea-90cf-8bfb41688cd5.gif)

## Instructions

To test the application you need to get `CLIENT_ID` and `API_KEY` which you then add in the `src/config/index.js`.  
Follow [this link](https://developers.google.com/identity/sign-in/web/sign-in) to get the `CLIENT_ID` and [this link](https://docs.simplecalendar.io/google-api-key/) to get the `API_KEY`.

After you have `CLIENT_ID` and `API_KEY`, go to `src/config` and rename `index-example.js` to `index.js`.  
When index file is renamed, replace `YOUR_GOOGLE_CLIENT_ID` and `YOUR_GOOGLE_API_KEY` with your keys.

The config file will look something like:

```javascript
export const gapi = window.gapi; // already defined
export const CLIENT_ID = '123-987abc654def.apps.googleusercontent.com'; // example data
export const API_KEY = 'qasdIJasdJKLasd'; // example data
export const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
]; // already defined
export const SCOPES = 'https://www.googleapis.com/auth/calendar.events'; // already defined
```

## Installation

1. Download or clone the project
2. Go into the project `cd google-calendar`
3. Run `npm install`
4. Run `npm start`
