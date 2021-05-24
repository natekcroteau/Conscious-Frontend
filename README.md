# CONSCIOUS
> Practice Mental Wellbeing


## General Info
Conscious is an application to exercise your mental wellbeing through writing. 

## Intro Video
[Demo Video](https://www.youtube.com/watch?v=phzMPbaX0V8)

## Technologies
* Ruby - v 2.6.5
* Rails - v 6.1.3
  * JWT
  * Bcrypt

* React.js
  * React-Router
  * React-Calendar
  * React-Spring
  * React-Typist
  * CKEditor
  * Ant-Design
* HTML
* CSS


## Setup
To utilize Conscious, install locally using the following command:
```
git clone git@github.com:natekcroteau/
```

Backend setup:
```
bundle install
rails db:migrate
```

Frontend setup:
```
npm install
```


Start the backend, then frontend server with the following commands in the respective directory:

* Backend: 
```
rails s
```
* Frontend:
```
npm start
```


## Code Example
```
const login = () => {
  fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then( response => {
    if (!response.ok) throw new Error('Invalid Username and/or Password')
    return response.json()
  }).then(response => {
    userInformation(response.user, response.username)
    localStorage.setItem("token", response.token)
  }).then(handleOk())
      .catch( error => {
        console.log(error.message)
      })
}
```

## Features
* Create users and sign-in with authentication through the account modal.
* User must be logged-in to utilize daily gratitude and morning free-write components.
* The daily gratitude component prompts the user with gratitude-reinforcing statements, to which the user submits their response. Ideally, this function is used in the morning and evening to reflect positively on one's self.
* The freewriting component allows the user to input and submit text representing their thoughts in real-time, without stopping. This is akin to the popular "Morning Pages" exercise.
    * Word count is dynamically displayed above text-input.
* Animated story of "The Golden Buddha".
* The user is able to remove local authentication by logging out through the account modal.


## To-do list:
* Develop user interface displaying statistical feedback for users.
* Develop morning/evening toggle for daily gratitude form rendering. Currently, this is static.


## Status
Project functions as intended with expansion to features planned.


## Inspiration
Wellness is part physical and part mental, to which finding balance in exercising both aspects can be difficult and nuanced. CONSCIOUS is an application combinining valuable writing practices that exercise mental wellbeing.


## Contact
Created by [Nate Croteau](https://github.com/natekcroteau)
