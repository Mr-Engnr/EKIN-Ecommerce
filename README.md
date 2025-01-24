# EKIN - Step Into Greatness

EKIN is a modern e-commerce application designed to deliver a seamless and responsive shopping experience. This project leverages the latest web technologies, providing dynamic, user-friendly interfaces and robust backend features.

## Features

- **User-Friendly Interfaces**: React.js-based dynamic pages with reusable components.
- **Modern Styling**: Fully responsive design using Tailwind CSS.
- **State Management**: Efficient data handling with Redux Toolkit.
- **Secure Authentication**: Integrated user authentication system.
- **Database Integration**: MongoDB for data storage and retrieval.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Redux Toolkit
- **Backend**: Node.js, Express.js, MongoDB
- **Other Tools**: Razorpay for payment processing

## Folder Structure

### Backend

- `controllers/`: API logic for various features like authentication and cart management.
- `models/`: MongoDB schema definitions.
- `routes/`: API endpoint definitions.
- `db.env`: Environment configuration (not included in the repository).

### Frontend

- `src/components/`: Reusable React components (e.g., `Navbar`, `ProductList`).
- `src/pages/`: React pages (e.g., `Home`, `ProductOverview`).
- `src/assets/`: Images and static files.
- `src/features/`: Redux slices for state management.

## Environment Variables

Ensure you have a `.env` file in the backend directory with the following variables:

MONGO_URL=<your-mongodb-url> PORT=<application-port> RAZORPAY_KEY_SECRET=<your-razorpay-secret-key>



## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/EKIN-Ecommerce.git
   cd EKIN-Ecommerce

2. Install dependencies for both frontend and backend:
cd frontend
npm install
cd ../backend
npm install
npm start
cd ../frontend
npm start

3. Open the app in your browser at http://localhost:3000.

## Future Enhancements
Add advanced features like user reviews, wishlists, and payment options.
Optimize the LandingPage for a more engaging design.
Implement full functionality for the ShoppingCart and Favourite pages.

## Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.