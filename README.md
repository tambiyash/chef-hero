# Notch Assignment
Take-away assignment for Notch

Implemented the output as per the problem statement.

#### BONUS POINTS - 
* Added column sorting.
* Added Storybook, rendered a few ui components due to time limit. Added support for Info and Knobs addons.
* Added Pagination with API.
* Additional filters can be easily added since Filters Multiselect is an individual generic component and can be utilised for different filters.
* Kept the code modular and followed the Component Container approach keeping smart and dumb components separate.
* Native implementation, without using any significant libraries like bootstrap, material-ui, etc.

#### Caveats -
* Created CRA with json-server to provide data. This was done because the API provided (http://api.interview.staging.foodieorders.com/v3/orders/search) could not be consumed in this app due to CORS issues. Hence I copied the response data from Postman and added it in db.json file.

* Due to lack of API endpoints to provide filtered data, I was unable to implement pagination and filtering together.
Instead of fetching all data on first load and providing pagination just with slicing arrays, I wanted the app to behave real-time i.e. to fetch paginated data from API. Hence I implemented two Routes, one for filters along with table, another with pagination.

* There was an issue with deploying the json-server and using with react-app. Hence, I couldn't deploy the app. It can be accessed locally though.

* Didn't spend too much time on UX, Design and Mobile-Friendly behaviour of the app.

### How to launch app- 

* Clone the repo locally.
* Run `yarn install`.
* Run `yarn run dev`.

STORYBOOK -
* Navigate to http://localhost:3000
* Run `npm run storybook`. Nvaigate to http://localhost:6006
