# HEAD OVER MEALS
#### Video Demo:  <https://youtu.be/uUvgXJUUjks>
#### Description:
This project is a prototype website for my sister, Kamar Kreidly, who is a licensed dietitian, focusing on her healthy recipes, and giving the user the ability to request a consultation or contact her through various means.

This project is built using Flask,HTML,CSS,Javascript,jquery,and bootstrap for specific components.

#### application.py:
* This file contains a flask application, that contains the website's   routes,allowing the user to navigate the website.
* Takes in form information from the index page consultation-form, checks email validity through validate-email python library, if the email checks out, it sends a reply email to the user,and to the HEAD OVER MEALS email that contains information about the user,Else returns an error that gets displayed under the email field.

&nbsp;
&nbsp;

## template.html:
- A template to be applied to all the html websites containing the navigation bar on top, main content in the middle to be filled out by other pages,and the footer on the bottom.

## template.css:
- Styling for template.html page:
  - styling for preloader,and blinking cursor for all input fields.
  - animation for mobile hamburger button and navbar on mobile.
  - animation and hover effects for navbar elements.
  - styling for navbar and footer, and all the media queries necessary
  for full mobile responsiveness.

## navbar.js:
This script toggles the hamburger icon's on and off state, triggering the custom hamburger icon and the navbar drop down and item animation.

&nbsp;
&nbsp;

## index.html :
The website's home page, consists of a various images, an clinic reveal,
and a consultation form to be filled out in case the user is interested in
an online consultation.

## index.css:
Contains styling for elements, various media queries for responsiveness, and
animations/effects pertaining to the consultation form.

## consultation-form.js:
sends an ajax call to the server containing the user's input to be validated in the index() function in the flask server, and executes code based on the
response(the validity of the email).

## reply.html:
An html email to be sent to the user upon filling the form.
## reply.css:
styling for the html email.

&nbsp;
&nbsp;

## recipes.html:
This page contains the recipes, and it consists of :
* a search/sorting section where the user can search recipes, and sort by:
    * Alphabet
    * Kcal(calories)
    * Time
    * Order, ascending or descending.

## recipes.css:
* This page contains styling for the recipes page:
    * styling for image-gallery and recipe cards.
    * styling for bootstrap and carousel.
    * various animations,and media queries for mobile responsiveness.


## image-gallery.js:
* This file controls the recipes page:
    * defines the recipes
    * Dynamically creates the recipe cards and fills the page,to be later styled with css.
    * Dynamically creates the bootsrap elements to fill the modal and carousel when a recipe is clicked,or when next or previous are clicked.
    * controls all the animations involved with loading the bootstrap modal and carousel.

## search.js:
This file is responsible the searchbar and the various sorting buttons
for the image-gallery, using an object to manipulate the state of the image gallery.

&nbsp;
&nbsp;

## aboutme.html:
This page contains information about the dietitian, consisting of a small quote
and a paragraph describing herself.

## aboutme.css:
Contains styling for the about me page, which follows the general theme of
the website.

## aboutme.js:
This script toggles the animation of the elements inside aboutme.html when
they are in viewport.




