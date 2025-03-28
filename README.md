#🚀 EmploySync
##Sync. Manage. Empower.

EmploySync is a sleek and efficient React.js-based employee management app that allows you to:

✅ Authenticate users via login.

✅ Display a paginated list of users with their details.

✅ Perform CRUD operations: Edit, Delete, and Update user information.

✅ Utilize API integration with reqres.in.

✅ Stylish and responsive UI with gradient design.

## 🔥 Features
✅ Authentication
User login via email and password.

Stores the authentication token in localStorage.

Redirects to the User List page on successful login.

###✅ User List
Displays a paginated list of users.

Each card displays:

🖼️ Avatar

🧑 First & Last Name

✉️ Email

Includes Edit and Delete buttons.

### ✅ CRUD Operations
Edit:

Opens a pre-filled form with the selected user's data.

Allows updating the first name, last name, and email.

Delete:

Removes the user from the list.

Displays a confirmation message.

### ✅ Pagination
Navigate between different pages of users.

Displays the current page and total number of pages.

## 🛠️ Tech Stack
### Frontend
⚛️ React.js (Component-based architecture)

🌐 React Router for navigation

🎯 Axios for API requests

🎨 CSS3 for styling with gradient backgrounds

### API
🌐 https://reqres.in/

POST /api/login: Login with email & password

GET /api/users?page=1: Fetch users

PUT /api/users/{id}: Update user data

DELETE /api/users/{id}: Remove user

## ⚙️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/your-username/employsync.git
cd employsync

2️⃣ Install Dependencies

Make sure you have Node.js and npm installed.
Install project dependencies:

npm install

3️⃣ Start the App

Run the React app:

npm start
The app will be live at:
http://localhost:5173

## 🚀 Usage Instructions

1️⃣ Login
Use the following credentials:
Email: eve.holt@reqres.in  
Password: cityslicka
Click Login to authenticate.

You'll be redirected to the User List page.

2️⃣ Manage Users
Edit: Click the Edit button → Modify details → Save.

Delete: Click the Delete button → Removes the user from the list.

3️⃣ Pagination
Use the Previous and Next buttons to navigate between pages.

#⚡ Future Enhancements
✅ Improve UI with Tailwind or Material-UI.
✅ Add search and filter functionality.
✅ Implement JWT authentication for better security.
✅ Add custom API backend with MongoDB/PostgreSQL.

## 🙌 Contributing
Contributions are welcome!
Feel free to fork the repo, create a branch, and submit a PR.

🔥 Contact
📧 Email: tahreeminamdar2gmail.com
🔗 GitHub: Your GitHub
🌐 Portfolio: Your Portfolio

⭐ Give it a Star!
If you find this project helpful, consider giving it a ⭐ on GitHub!

🚀 EmploySync – Empowering Teams, One Sync at a Time!
