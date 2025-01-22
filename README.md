To create a proper README guide for your project, you can follow the structure below. This will help users understand the purpose, setup, and functionality of your project.

# Applications Report System

## Overview

The Applications Report System is a web application built to report system failures and manage system statuses. It allows users to report on the status of various systems and provides an admin interface to manage users, regions, zones, and positions.

## Features

- **User Authentication**: Users can log in to report system statuses.
- **System Reporting**: Users can report systems as down or operational.
- **Admin Panel**: Admins can manage users, regions, zones, and positions.
- **Region Selection**: Users can select regions, and only the systems available in those regions can be updated.
- **Data Management**: Uses MongoDB and Prisma for data management.
- **UI Components**: Utilizes shadcn UI for a consistent and modern user interface.

## Technologies Used

- **Frontend**: Next.js
- **State Management**: Zustand
- **Database**: MongoDB
- **ORM**: Prisma
- **UI Library**: shadcn UI

## Folder Structure

```
applications-report-system/
├── components/          # Reusable UI components
├── pages/               # Next.js pages
│   ├── api/             # API routes
│   ├── admin/           # Admin pages
│   ├── auth/            # Authentication pages
│   └── index.js         # Home page
├── prisma/              # Prisma schema and migrations
├── stores/              # Zustand stores for state management
├── styles/              # Global styles
├── utils/               # Utility functions
├── .env.local           # Environment variables
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Prisma CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mungaben/applications-report-system.git
   cd applications-report-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```
   DATABASE_URL="your_mongodb_connection_string"
   ```

4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- **User Login**: Users can log in to report system statuses.
- **Admin Panel**: Admins can manage users, regions, zones, and positions.
- **System Reporting**: Users can select a region and report the status of available systems.

## API Endpoints

- **POST /api/report**: Submit a system status report.
- **GET /api/systems**: Retrieve system data.
- **POST /api/admin/users**: Admin endpoint to manage users.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Next.js for the framework.
- MongoDB for the database.
- Prisma for ORM.
- shadcn UI for the UI components.

---

This README provides a comprehensive guide to setting up and using the Applications Report System.
