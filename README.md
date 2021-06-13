# Notch Assignment
Take-away assignment for Notch

* Created CRA with json-server to provide data. This was done because the API provided (http://api.interview.staging.foodieorders.com/v3/orders/search) could not be consumed in this app due to CORS issues. Hence I copied the response data from Postman and added it in db.json file.

* Due to lack of API endpoints to provide filtered data, I was unable to implement pagination and filtering together.
Instead of fetching all data on first load and providing pagination just with slicing arrays, I wanted the app to behave real-time i.e. to fetch paginated data from API. Hence I implemented two Routes, one for filters along with table, another with pagination.

* I implemented the app natively, without using any significant libraries especially for ui.

* There was an issue with deploying the json-server and using with react-app. Hence, I couldn't deploy the app. It can be accessed locally though.

* I have implemented storybook for some ui components. It has support for Info and Knob addons.

* Tried to add column sorting, there is some issue which I can figure out.

### How to launch app- 

* Clone the repo locally.
* Run `yarn install`.
* Run `yarn run dev`.
* Navigate to http://localhost:3000
* Run `npm run storybook`. Nvaigate to http://localhost:6006
