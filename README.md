# WindInformer.github.io
----------------------------------------
main.js file:-
----------------------------------------
This is a JavaScript code that creates a weather application. It retrieves weather data from the OpenWeatherMap API and displays it on a web page. The application also has a dark mode toggle feature.

Variables and Elements
The code starts by selecting various HTML elements using document.getElementById and document.querySelector:

cityName: an input field for the user to enter a city name
submitBtn: a button to submit the city name
temp_real_val: an element to display the current temperature
temp_status: an element to display the weather status (e.g., sunny, cloudy, rainy)
city_name: an element to display the city name
datahide: an element with a class of "middle_layer" that will be used to hide or show the weather data
toggle_btn: a checkbox to toggle dark mode
getInfo Function
The getInfo function is an asynchronous function that is called when the submit button is clicked. It:

Prevents the default form submission behavior using event.preventDefault().
Retrieves the city name from the input field using cityName.value.
Checks if the city name is empty. If it is, it displays an error message and hides the weather data using datahide.classList.add("data_hide").
If the city name is not empty, it makes a GET request to the OpenWeatherMap API using fetch to retrieve the weather data.
Parses the response data using response.json().
Extracts the city name, country, temperature, and weather status from the response data.
Updates the city_name element with the city name and country.
Updates the temp_real_val element with the current temperature.
Updates the temp_status element with an icon representing the weather status (e.g., sunny, cloudy, rainy).
Removes the "data_hide" class from the datahide element to show the weather data.
Error Handling
The code catches any errors that occur during the API request or data parsing using a try-catch block. If an error occurs, it displays an error message and hides the weather data using datahide.classList.add("data_hide").

Dark Mode Toggle
The code adds an event listener to the toggle_btn checkbox. When the checkbox is checked or unchecked, it adds or removes the "dark-mode" class from the document.body element, respectively, to toggle dark mode.

Event Listeners
The code adds two event listeners:

A click event listener to the submitBtn element that calls the getInfo function when the button is clicked.
A change event listener to the toggle_btn checkbox that toggles dark mode when the checkbox is checked or unchecked.


----------------------------------------
app.js file:-
----------------------------------------
This is a Node.js application using the Express.js framework. Here's a breakdown of the code:
The code imports three modules:

express: the Express.js framework
path: a built-in Node.js module for working with file paths
hbs: a template engine for rendering HTML templates (Handlebars)
Setting up the Application

The code sets up the Express.js application and defines some constants:

app: the Express.js application instance
static_path: the path to the public directory, which will serve static files
port: the port number to listen on, defaulting to 5000 if no environment variable is set
partialpath: the path to the partials directory, which will contain reusable HTML templates
Configuring Handlebars

The code configures Handlebars as the template engine:

app.set('views', ...): sets the views directory, where Handlebars will look for templates
hbs.registerPartials(partialpath): registers the partials directory, allowing Handlebars to use reusable templates
app.set("view engine","hbs"): sets Handlebars as the default template engine
Defining Routes

app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render

------------------------------------------
Instruction how to run
------------------------------------------

step1- firstly install express,hbs

step2- then install nodemon module 

step3-then run command on terminal nodemon app.js
--------------------------------------------
--------------------------------------------

This is all about that application.






