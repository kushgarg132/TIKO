# Tiko Railway Reservation System

The Tiko Railway Reservation System is a project aimed at simplifying and automating the process of booking and managing railway tickets. It provides a user-friendly interface for passengers to search for trains, view seat availability, make reservations, and manage their bookings. The system also includes an administrative module for managing train schedules, fares, and other related data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- User authentication and authorization
- Train search and seat availability
- Ticket booking
- Ticket confirmation and e-ticket generation
- Passenger management
- Train schedule management
- Fare calculation and management
- Reporting and analytics

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/kushgarg132/TIKO.git
   ```

2. Navigate to the project directory:

   ```shell
   cd tiko
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Set up the database:

   - Create a new database in MongoDb.
   - Create a .env file inside tiko folder and add PORT (Eg. 80) , CONNECTION_URL (MongoDb connection URL) , JWT_SECRET (can be anything)

6. Start the application:

   ```shell
   npm start
   ```

7. Access the application at `http://localhost:3000`.

## Usage

1. Register a new user account or log in to an existing account.
2. Use the search feature to find trains based on your desired origin and destination, along with the desired date of travel.
3. View the available trains and their respective seat availability.
4. Select a train and proceed to book tickets.
5. Enter passenger details and make the payment.
6. Once the booking is successful, you will receive a confirmation along with an e-ticket.
7. The administrative module can be accessed by authorized personnel to manage train schedules, fares, and generate reports.

## Contributing

Contributions to the Tiko Railway Reservation System project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the project's code of conduct.

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push the branch to your fork: `git push origin my-new-feature`.
5. Submit a pull request.
