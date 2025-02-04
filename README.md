# BloggIt

**BloggIt** is a lightweight blogging platform that allows individual users to upload, view, and manage their blogs online with admin capabilities. The application features a user-friendly blog list on the homepage and allows users to subscribe via email. The admin panel provides full control over the blog posts and the subscribed email list.

---

## Key Features

### User Features
- **Blog List**: Displays a list of all blogs available on the platform.
- **Blog Detail Page**: Clicking on a blog title opens the full content of the blog.
- **Email Subscription**: Users can subscribe to the platform by entering their email address. These emails are stored in the database and can be viewed by the admin.
  
### Admin Panel
- **Blog Management**: Admins can add, or delete blogs from the platform.
- **Email Subscription Management**: View the list of email addresses submitted through the email subscription section.

---

## Technologies Used

### Frontend
- **Next.js**: React-based framework for building server-side rendered (SSR) web applications.
- **React**: Component-based JavaScript library for building dynamic user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the web application with a responsive and modern design.
- **React Toastify**: For displaying toast notifications to inform users about actions like successful blog submission or deletion.

### Backend
- **Node.js**: A JavaScript runtime environment used to build the backend.
- **Express.js**: Web framework for Node.js to manage API routes and requests.
- **MongoDB**: NoSQL database used to store blog posts and email subscriptions.

---

## How to Run Locally

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/BloggIt.git
    cd BloggIt
    ```

2. **Install Dependencies**
    - **Backend**:
      ```bash
      cd backend
      npm install
      ```
    - **Frontend**:
      ```bash
      cd frontend
      npm install
      ```

3. **Configure Environment**

    Create a `.env` file in the **backend** directory:
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/BloggIt
    ```

4. **Run the Application**
    - **Backend**:
      ```bash
      cd backend
      npm start
      ```
    - **Frontend**:
      ```bash
      cd frontend
      npm run dev
      ```

---

## Project Highlights

### Blog List and Detail Page
- **Blog List**: On the homepage, users can see all available blogs in a neat list with titles and descriptions.
- **Detailed Blog View**: Clicking on a blog's title brings up the full content of the blog, with a clean and readable layout.

### Admin Capabilities
- **Blog Management**: Admins can add new blogs, remove existing blogs directly from the admin panel.
- **Email Subscription Management**: Admins can see all the emails submitted for subscriptions and manage them.

### Email Subscription
- **User Sign-Up**: Users can enter their email address to subscribe to updates, and the data is stored securely in MongoDB.
- **Admin Access**: Admin can view and remove the list of subscribed emails, which is useful for future notifications and updates if needed.

### Scalable and Modular Codebase
- The project has a **modular structure** for both the frontend and backend, making it easy to extend in the future. For example, new blog categories or features can be added without disrupting the core functionality.

### Authentication & Security
- While this version does not have user authentication, the backend and frontend are set up to easily integrate **JWT authentication** for user logins, should the feature be needed.

---

## BloggIt Screenshots (Click the images to see them bigger)

This section displays the homepage and footer.

<div style="display: flex; gap: 10px;">
    <img src="Screenshots\homepage.png" alt="Homepage" width="500"/>
    <img src="Screenshots\footer.png" alt="Footer" width="500"/>
    
</div>


## Skills Demonstrated
- **Full-stack Development**: Designed and developed both frontend and backend components, providing a complete solution from blog creation to viewing.
- **Responsive Web Design**: Used **Tailwind CSS** to ensure a modern and responsive design across all screen sizes.
- **API Design**: Built and consumed RESTful APIs to handle blog posts, email submissions, and database queries.
- **Database Management**: Implemented MongoDB for storing blogs and email subscriptions efficiently.
- **Backend Development**: Developed a backend using **Node.js** and **Express.js** to handle blog management and subscription features.
- **Frontend Interaction**: Used **React** and **Next.js** to create dynamic and interactive user interfaces, ensuring smooth navigation and content display.
- **Notifications**: Integrated **React Toastify** for showing live feedback to users after performing actions like subscribing or deleting a blog.

---

## Future Improvements
- **User Authentication**: Add login and registration functionality to allow users to manage their own blogs.
- **Commenting System**: Implement a commenting system where users can interact with blog posts.
- **Email Notifications**: Notify users and admins via email when new blogs are added or when users subscribe.

---



## Conclusion
**BloggIt** is a simple yet effective blogging platform for individuals to upload and view their blogs and present them on the internet. It’s a great starting point for learning full-stack development, and it can be extended with additional features in the future.

---
