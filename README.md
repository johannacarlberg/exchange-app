# Exchange App

This repo contains an exchange application that polls live currency rates and converts

## Quick start

```
npm install
```
```
npm start
```

To view the local environment, visit: 
```
http://localhost:8080/
```

## Testing  

To run the unit tests
```
npm run test
```
I am using Jest snapshot testing to test rendering

https://facebook.github.io/jest/docs/en/snapshot-testing.html

To update the snapshot run
```
npm run test -- -u
```
This will update all snapshots so be mindful if you have more than one failing test due to snapshots.

## CSS
https://www.styled-components.com/

This project is set up with styled components for modularised CSS. 

## Deployments

A deployment will be triggered upon merging into master. This is setup with CircleCI.  

*Link:* [http://exchange-apps.herokuapp.com/](http://exchange-apps.herokuapp.com/)



### Next Steps
- Breaking out the reducers and actions per component
- Error handling
- Input validation
- Error logs
- Acceptance Tests
- Accessibility Tests
- Set up code coverage report
