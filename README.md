## Week 2 Assignment: Student Store

Submitted by: Andrew Lee

Deployed Application (optional): 

### Application Features

#### CORE FEATURES

- [X] The API should contain an endpoint that serves an array of all products in the store
- [X] A Store model should handle all data management logic for the API and be the interface for read/write operations to the JSON file.
- [X] The frontend should include a landing page that displays the products available for purchase.
- [X] Each product should have an individual page that shows the details of the product.

#### STRETCH FEATURES

- [ ] Deploy your website with Heroku & Surge. 
- [X] An endpoint should exist for creating orders and saving them to a JSON file. Each order should contain the email of the person placing the order, the items associated with the order, and the quantity of each item purchased.
- [X] There should be a `Sidebar` component that appears on every page and has two states - `open` and `closed`. When the sidebar is opened, it should display a shopping cart of all the products the user currently has in their cart. It should also calculate and display the total amount in dollars for the checked-out items. When it's closed, the sidebar should be much thinner and not display its internal content.
- [X] A checkout form should be available that allows the user to enter their email and send their order to the API.
- [] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [X] Create an endpoint that serves only a single product based on the product's id
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

![gif1](https://github.com/f1rstpr/w2_assignment/blob/master/gifs/walkthrough1.gif)

![gif2](https://github.com/f1rstpr/w2_assignment/blob/master/gifs/walkthrough2.gif)

![gif3](https://github.com/f1rstpr/w2_assignment/blob/master/gifs/walkthrough3.gif)

![requests](https://github.com/f1rstpr/w2_assignment/blob/master/gifs/requests.gif)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the labs were extremely helpful for this assignment. In the first lab, we learned how to make routes, models, and error handling for our api. In the second and third labs, we learn how to use React in order to implement a user interface and a way to mimic a database using a json file. Additonally, the videos served as a great resource for this week. However, I did not feel very prepared for the stretch features. I also struggled with the parts where we had to set state using call back functions with the destructuring syntax, alongside with making sure our data is synced throughout all areas of the page with the use of useEffect.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would learn more about Material UI or perhaps another popular front end design library because it appears to be heavily liked among those who use React. I would also apply more styling as the site is missing a lot of styling. While browsing at the sample student store, I saw a navbar with several categories. This leads me to believe that a "filter by category" feature is something that I could possibly add to the site.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

What went well was that I was able to learn about Express, Node, and React. What didn't go so well was trying to understand the whole process, since we have only been learning it for a week. I also made a lot of syntax errors which took time to get used to. Nevertheless, I am proud of the progress I haev made. During the presentations, some peers mentioned that they used Figma for their designs, which was impressive. Next time, I would like to try to create a design on Figma. 

### Open-source libraries used

- Add any links to open-source libraries used in your project.

https://material-ui.com/

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to all my mentors, peers, and the instructors that I have worked with this week.  
