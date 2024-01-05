# City Explorer API

Welcome to the City Explorer API! This is a Node.js application that interacts with the Geoapify Places API to provide information about various city attractions. It's like a tour guide for your city exploration journey.

## Features

The City Explorer API has several endpoints that return information about different types of places:

- `/api/supermarkets`: Returns a list of supermarkets within a specified bounding box.
- `/api/entertainment`: Returns a list of entertainment locations within a specified bounding box.
- `/api/parks`: Returns a list of parks within a specified bounding box.
- `/api/restaurants`: Returns a list of restaurants within a specified bounding box.
- `/api/feedback`: Takes an email and a comment and stores it in memory.

## Getting Started

To get started with the City Explorer API, follow these steps:

1. Install Node.js 20.x. You can download it from [here](https://nodejs.org).
2. Register for a free API key from Geoapify. You can register [here](https://myprojects.geoapify.com/login).
3. Clone this repository.
4. Install the dependencies by running `npm install`.
5. Start the server by running `npm start`.

Now, you can make requests to `http://localhost:3000/api` to use the API.

## Testing

The City Explorer API uses Jest for testing. To run the tests, follow these steps:

1. Install the dependencies by running `npm install`.
2. Run the tests by running `npm test`.

## Contributing

Contributions are welcome! If you have a feature request, bug report, or proposal, please open an issue on this repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.