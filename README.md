
1. Set Up

```js
//comment following commands
Npm i install
set up MongoDb env in your pc
Set up env firebase confiq
```

2. create vercel.json file for configuring server

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}
```

website name : THRIVEHIVE
live link : https://thrivehive.netlify.app/

Explore : React-tooltip, Firebase, PropTypes, Hot Toast, React-icons, React-Helmet ,React-Spinner, React Hook Form, jwt, motion, sweetAlert2, Tanstack query etc...

* First you will see a navbar.  There is logo Home, All jobs, blog, and login register button.  When the user logs in, you will see the drop-down menu with the profile. 

* There is add job, my jobs, applied job.  Banner below.  Below you will see a tab menu in the form of a card.  See the review section below.  There is an Out team section.  There is a newsletter section.

* There is also a footer section.  If you click on view details inside the tab menu card, details will be shown.  If you click on All jobs spot on navbar, all job post data will be shown there.  

* There is a view details button on the card.  Clicking there will show the details of that record.  If you click on My job, it will show in table form, you will see some details.  There will be update delete button. 

* By clicking on Update, the details of the record can be updated.  If you delete it again, it will be deleted. You can add Buyer job in Add job.  

* But you will not be able to apply for that job.  The user who will apply will see his list apply job.
