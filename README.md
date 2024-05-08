# Entertainment App

The Entertainment App is a full-stack application designed to provide users with access to a vast collection of movies and TV shows, leveraging the TMDB API for fetching media details. It features user authentication, media exploration, and personal bookmarks, offering a comprehensive and personalized media browsing experience.

## Deployment

- **Frontend:** :- https://entertainment-app-frontend-show.vercel.app/
- **Backend:** :- https://back-entertainment.onrender.com/

## Important Links

- API Documentation : https://documenter.getpostman.com/view/32328160/2sA3JJAiQg
- Database Design: [Google Docs Link](https://docs.google.com/document/d/1DEoH1G6ucIP3hkTpAg6_QE7NjipAojlucyWJHhyk7Bg/edit?usp=sharing)
- Best Practices : [Google Docs Link](https://docs.google.com/document/d/1gpsxJt2ORMTbFzmMjzzby_3DhWvN5fkvGZrAOATw4pk/edit?usp=sharing)


## Features

- **User Authentication:** Utilizes JWT for secure login and registration, ensuring user data protection.
- **Media Exploration:** Allows users to discover trending movies and TV shows, with detailed views available for each media item.
- **Bookmarks:** Enables users to bookmark their favorite media, creating a personalized list of favorites accessible at any time.
- **Detailed Media Information:** Provides in-depth details about movies and TV shows, including cast, genres, ratings, and more.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB instance (local or remote)
- TMDB API key for fetching media data

## Getting Started For Backend

### Backend Setup

1.  **Clone the Repository:** Start by cloning the Entertainment App repository to your local machine.

    ```sh
    git clone "repositary Link"
    ```

2.  **Navigate to the Backend Directory:** Move into the backend directory of the project.

    ```sh
    ```

3.  **Install Dependencies:** Install the necessary dependencies using npm.

    ```sh
    npm install
    ```

4.  **Configure Environment Variables:** Create a `.env` file based on the provided `.env.example` file. Provide your MongoDB URI and TMDB API key in the `.env` file.

    ```
    MONGODB_URL= "Mongodb connection string our url "
    TOKEN= "Secret token for authentication & cookies"
    NODE_ENV="Current environment - Development or Production"
    FRONTEND_URL="Frontend url"
    ```

5.  **Start the Server:** Run the backend server.

    ```sh
    node server.js
    ```

6.  **Verify Backend Setup:** Confirm that the backend server is running without any errors.

### Backned Technologies
- Node js 
- Express js
- jsonwebtoken
- bcrypt
- MongoDB 
- Mongoose 
- dotenv
- cors
- cookie-parser

### Backend Project Structure

- **Controllers:** Contains logic for handling API requests.
- **Middleware:** Includes middleware for authentication.
- **Models:** Defines the schema for database collections.
- **Routes:** API routes for handling requests to different endpoints.
- **Utils:** Containers Helper Function to fetch media & to generate cookie.

<pre>
    |-- controllers
        |-- BlogControllers.js 
        |-- bookmarkController.js.js 
        |-- moviesController.js 
        |-- recommendedController.js 
        |-- trendingController.js 
        |-- userController.js
    |-- Data
        |-- movieData.js
        |-- tvShowsData.js
    |-- middleware
        |-- auth.js 
    |-- models 
        |-- blogsModels.js 
        |-- bookmarkModels.js 
        |-- movieModels.js 
        |-- tvshowModels.js 
        |-- userModels.js 
    |-- routes 
        |-- blogRout.js 
        |-- bookmarkRoutes.js 
        |-- moviesRoutes.js 
        |-- recommendedRoutes.js 
        |-- searchRoutes.js 
        |-- trendingRoutes.js 
        |-- userRoutes.js 
    |-- utils
        |-- feature.js
    |-- server.js 
|-- .env
|-- .gitignore
|-- index.js
|-- package.json
|-- package-lock.json
</pre>

## Getting Started For Frontend

### Frontend Setup

1. **Navigate to the Frontend Directory:** Move into the frontend directory of the project.

   ```sh
   ```

2. **Install Dependencies:** Install the necessary dependencies using npm.

   ```sh
   npm install
   ```

3. **Configure Base Url or API end points :** This is our api endpoins, comming from backend

   ```
   const baseUrl = "Enter Your own backend api endpoints",
   ```

4. **Start the Application:** Run the frontend application.

   ```sh
   npm run dev
   ```

5. **Access the Application:** Open your web browser and navigate to the specified URL (default: http://localhost:5173) to access the Entertainment App.

### Frontend Technologies 

- Vite
- Npm
- HTML
- CSS
- Tailwind CSS
- React.js
- React Query
- Javascript
- Context API
- React hook form
- React Loader Spinner

### Frontend Project Structure

- **Assets:** Contains dummy image .
- **Components:** Reusable components code .
- **Context:** State mangement accross applicaton for authenticatin & bookmark.
- **Pages:** Five main pages, Home, Movie, Tv, Bookmark, Profile.
- **Utils:** Contains baseUrl of api & function to fetch media

<pre>
|-- src
    |-- assets 
    |-- Components
        |-- AutoScrollCarousel.jsx  
        |-- Loader.jsx  
        |-- Navbar2.jsx  
        |-- NormalCard.jsx  
        |-- Rates.jsx  
        |-- RatingSection.jsx  
        |-- SearchBar.jsx  
        |-- SingleCard.jsx  
    |-- context
        |-- Context.jsx
        |-- State.jsx
    |-- Pages
        |-- BookMarkHelp.jsx
        |-- BookMarks.jsx
        |-- Home.jsx
        |-- Login.jsx
        |-- MovieDisplay.jsx
        |-- Movies.jsx
        |-- Register.jsx
        |-- SearchPage.jsx
        |-- TvShowDisplay.jsx
        |-- TvShows.jsx
    |-- Stylesheets
        |-- LoaderStyle.css
    |-- App.jsx 
    |-- main.jsx 
|-- .eslintrc.cjs
|--.gitignore
|-- index.css 
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.cofig.js
|-- vite.config.js 
</pre>

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.


## Thank You 