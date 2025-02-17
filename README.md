# College Analytical Suite (CAS)

The **College Analytical Suite (CAS)** is a dynamic platform designed to provide valuable insights into various aspects of college operations. It integrates data from different departments, providing an interactive dashboard for faculty, principal, HODs, and students.

## Features

- **Student Data Analysis**: Visualizations of student performance, including attendance, grades, and overall academic trends.
- **Financial Dashboard**: Displays the college’s financial health and key metrics.
- **Placement Data**: Provides detailed information on student placement, industry trends, and more.
- **Faculty Profiles**: Detailed faculty data including performance metrics and personal information.
- **Admin Panel**: Role-based access control for managing users and data.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL / MariaDB
- **Data Visualization**: D3.js, Power BI (for analytical insights)
- **Cloud**: IBM Cloud for data storage and processing
- **Authentication**: JWT (JSON Web Token)

## Getting Started

### Prerequisites

- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **MySQL**: Ensure you have MySQL running on your system or use a cloud-based database.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sabale302/CAS.git
   cd CAS
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:

- Create a new database in MySQL (e.g., eduvision_db).
- Add your database credentials to the .env file.
4. Start the development server:
     ```bash
     npm start
     ```
  
The app should now be running at http://localhost:3000.

### Contributing
Feel free to fork this repository and submit pull requests. Please ensure that your contributions adhere to the existing coding style and are accompanied by proper documentation.

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new pull request.

