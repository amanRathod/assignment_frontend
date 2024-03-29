# Assignment Management

Assignment Management is a highly scalable and high performant one stop solution to:
- Any institute to manage Assignments for students and teachers
- Create assignments
- Submit assignments
- Evaluate assignments

# Application Links

Frontend Code -> [https://github.com/amanRathod/assignment_frontend](https://github.com/amanRathod/assignment_frontend)
<br>
Deployed URL -> [https://assignment-management.vercel.app/](https://assignment-management.vercel.app/)
<br>
Backend Code -> [https://github.com/amanRathod/assignment_backend](https://github.com/amanRathod/assignment_backend)
<br>
API Docs -> [https://documenter.getpostman.com/view/15820246/UV5RoMHP](https://documenter.getpostman.com/view/15820246/UV5RoMHP)

# Tech Stack

<b>Frontned</b>: Reactjs
<br>
<b>Additional NPM Libraries</b>
  - react-router-dom
  - react-icons
  - axios
  - moment
  - eslint
  - js-cookie
  - tailwind
  - postcss
  - react-toastify
  - react-placeholder

<br>
<b>Styling</b>: Tailwind and PostCSS
<br>
<b>Database</b>: MongoDB
<br>
<b>Authentication and Authorisation</b>: JWT
<br>
<b>Storing Files</b>: S3 (AWS)
<br>
<br>

# Overall Functionality
- Admin can create, edit and delete assignments 
- Admin can assign Students to Teaching Assistant
- Admin can assign assignment to particular Teaching Assistant
- Students can submit assignments to assign TA and can view their report
- Teaching Assistant can evaluate submitted assignment of the assign students
- User Management (Login, register, forgot password(sendgrid) ) 
- Authenticated Routes

# Fake auth for quick testing
- Admin
  - email : example10@gmail.com
  - password: dummyuser@1
- Teaching Assistant
  - email : example11@gmail.com
  - password: dummyuser@1
- Student
  - email : example4@gmail.com
  - password: dummyuser@1
