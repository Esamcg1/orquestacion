# Node.js Reservation API

This project is a simple reservation API built with Node.js, Express, and Sequelize. It allows users to create reservations and interact with a database using a repository pattern.

## Project Structure

```
nodejs-reservation-api
├── src
│   ├── controllers
│   │   └── reservationController.js
│   ├── models
│   │   └── reservation.js
│   ├── repositories
│   │   └── reservationRepository.js
│   ├── routes
│   │   └── reservationRoutes.js
│   ├── services
│   │   └── reservationService.js
│   └── app.js
├── config
│   └── database.js
├── migrations
├── seeders
├── .env
├── package.json
├── README.md
└── sequelize-config.json
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nodejs-reservation-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in the `.env` file. You can use the following template:
   ```
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   ```

### Running the Application

To start the application, run:
```
npm start
```

The server will start on the specified port (default is 3000).

### API Endpoints

- `POST /reservations`: Create a new reservation.

### Database Migrations

To create the necessary database tables, run:
```
npx sequelize-cli db:migrate
```

### Seeders

To populate the database with initial data, run:
```
npx sequelize-cli db:seed:all
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.