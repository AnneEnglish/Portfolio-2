<!-- omit in toc -->
# Luck of the Irish Quiz

The Luck of the Irish Quiz is so the user can learn in a fun way or just to test
their general knowledge about Ireland.

![Luck of the Irish show on a range of screens](assets/images/am-i-responsive.webp)

Deployed site: [Luck of the Irish](https://anneenglish.github.io/Portfolio-2/)

---

<!-- omit in toc -->
## Table of Contents

- [User Experience](#user-experience)
  - [Initial Discussion](#initial-discussion)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Features](#features)
  - [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Libraries and Programs Used](#libraries-and-programs-used)
- [Deployment and Local Development](#deployment-and-local-development)
  - [Deployment(GitHub Pages)](#deploymentgithub-pages)
  - [Local Development](#local-development)
- [Testing](#testing)
  - [Testing User Stories from UX Section](#testing-user-stories-from-ux-section)
  - [Further Testing](#further-testing)
  - [Known Bugs](#known-bugs)
- [Credits](#credits)
  - [Code](#code)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)

---

## User Experience

### Initial Discussion

The Luck of the Irish is a website designed for the user to gain or test their
knowledge of Ireland in a fun way, by using a quiz. We update our quiz questions
weekly, for returning or frequent visitors so they can keep improving their
knowledge.

### User Stories

<!-- omit in toc -->
#### First Time Visitor Goals

- I want to be able to improve my general knowledge of Ireland in a fun way.
- I want the site to be easy to navigate.
- I want to be able to view my score at the end of the quiz.

<!-- omit in toc -->
#### Returing Visitor Goals

- I want to have different questions each time I visit so in order to learn more.

<!-- omit in toc -->
#### Frequent Visitor Goals

- I want to keep improving my knowledge.

## Design

### Colour Scheme

The colour scheme for the website was created by me, not using a colour palette
generator. I chose these colours as I felt they tied in well with the theme of
the quiz.

![Luck of the Irish Color Scheme](assets/images/colour-scheme.webp)

In my style.css file I used variables to declare the colours above.
This is how I used the colours for my site:

- Body background colour: #DAC4F7
- Previous and next button background colour: #237B62
- Restart background colour: #000000
- Submit background colour: #A1045A
- H1, paragraph and question content area text colour: #000000
- Button text colour: #FFFFFF
- When hovering over options background colour: #4FCE61
- When hovering over restart button background colour: #333333

### Typography

Google Fonts was used to import the fonts used on this site.
The fonts I chose are:

- 'Croissant One (Regular 400)' for the heading element.
- 'Quicksand (Medium 500)' for all other text.

### Imagery

There is one image used on this site and it is the logo. It is from Google Images
and I have also credited it in the credit section with a link to the image.

### Features

The website consists of one page (index.html). This page contains the following:

- A favicon in the browser tab.
- The title of the site which is also in the browser tab and then in an H1 element
  with a welcome message.
- Question content area which will display the questions and options.
- Four buttons below the question content.
  - Previous: To go back to previous question.
  - Next: To go to the next question, provided the current question has been
    answered. If it hasn't been answered it will display an alert message
    which prompts the user to select an answer first.
  - Restart: To go back to the very beginning of the quiz.
  - Submit: To submit answers and show score at the end of the quiz. If the user
    tries to submit their answers before all the questions have been answered
    it will display an alert message prompting the user to answer all of the
    questions first.
- A footer which contains the text '*Our quiz is updated weekly!'.

<!-- omit in toc -->
#### Future Implementations

In future implementations I would like to do the following:

- Give users the option to choose the quiz difficulty.
- Give the user an option to create an account so they can store and view
  previous scores.
- Create a backend-end database so I can store the scores and the user would be
  able to see how they scored against other users.

### Accessibility

I have been very mindful when creating this website to make sure that it is
accessible for all users by doing the following:

- Using semantic HTML.
- When hovering over an option the background colour changes to #4FCE61 which
  highlights the fact they are hovering over it.
- When hovering over any button (except restart) the background colour gets
  darker to indicate it.
- When hovering over the restart button the colour changes from #000000 to
  #333333, which is a lighter shade of black.
- Ensuring that there is sufficient contrast throughout the site.

## Technologies Used

### Languages Used

HTML, CSS and Javascript.

### Libraries and Programs Used

1. [Git](https://git-scm.com/): For version control.
2. [Github:](https://github.com/): GitHub was used to store and save the
   projects code after being pushed from Git.
3. [Chrome DevTools:](https://developer.chrome.com/docs/devtools/): Chrome
   DevTools was used to test features and fix styling and responsiveness issues.
4. [Online Convert:](https://www.online-convert.com/): Online Convert was used
   to convert images to WEBP for faster loading times on the site.
5. [Am I Responsive?](http://ami.responsivedesign.is/): Am I Responsive was used
   to show the responsiveness of the website on a range of devices.
6. [Google Fonts:](https://fonts.google.com/): Google Fonts was used to import
   the 'Croissant One' and 'Quicksand' fonts used throughout website page by
   importing them into the style.css file.
7. [Font Awesome:](https://fontawesome.com/): Font Awesome was used for the
   website to add icons for the buttons. It was also used for aesthetic and UX.

## Deployment and Local Development

### Deployment(GitHub Pages)

The project was deployed to GitHub Pages using the following steps:

1. Log into [Github](https://github.com/)
2. Locate and click on the GitHub Repository for the project you want to deploy.
3. Locate the 'settings' for the repository. This will be at the top of the
   repository (**not the top of the page**).
4. Scroll through the settings until you see 'Pages' and click on it. This will
   be in the navigation bar on the left of your screen.
5. Under the heading 'source' click on the dropdown menu and select
   'deploy from branch'.
6. Under the 'branch' heading just below select 'main' from the first dropdown
   menu, from the second dropdown menu select '/ (root)'.
7. After you complete these steps make sure to save. The button for this is to
   the right of the second dropdown menu.
8. Scroll to the top of the page and you will find the link for the published
   site.

### Local Development

<!-- omit in toc -->
#### Forking the Github Repository

Forking a GitHub repository is making a copy of the original on our account.
We can view/edit without affecting the original repository. Follow the steps
below to do this:

1. Log into [Github](https://github.com/)
2. Locate and click on the GitHub Repository for the project you want to fork.
3. Just below the 'settings' for the repository you will see 'fork'. Click on it
   and you should have a copy of the original repository on your GitHub account.

<!-- omit in toc -->
#### Making a Local Clone

1. Log into [Github](https://github.com/)
2. Locate the GitHub repository for the project you want to clone.
3. Locate and click on the green 'code' button. This should be just below the
   'settings'.
4. Choose whether you would like to clone with 'HTTPS', 'SSH' or 'GitHub CLI'.
5. Copy the link after you select one of the options above.
6. Open the terminal for your code editor and change the current working
   directory to the location where you want the cloned directory to be made.
7. Type 'git clone' into the terminal followed by the link you copied in Step 5
   (paste the link into terminal).
8. Press 'enter' and your local clone will be created.

## Testing

I tested the website constantly when making changes or adding things to it using
Chrome Dev Tools. It was also used to locate where the problems were in the code.

Some of the issues I was having were:

- When you answered all the questions on the quiz and clicked the submit button
  it would give you your score like it should, but if you clicked it a second
  time it would then double the score. E.g. 9/10 and when you click submit again
  it would be 18/10 and so on.
- When using the previous button, the questions you had answered were still being
  added to the score rather than clearing when using the previous button. E.g.
  if you were on question 9 out of 10 and used the previous button to go back to
  question 7 answer it then went to question 8 and answered it correctly again,
  it would be added to your score a second time. This resulted in an incorrect
  score such as 12/10.
- When using the restart button the previous and next buttons would stay hidden.

The [WC3 Markup Validator](https://validator.w3.org/),
[WC3 CSS Validator](https://jigsaw.w3.org/css-validator/validator.html.en) and
[JSHint](https://jshint.com/) were used to validate the website and to ensure
there were no errors. It passed for all of those.

### Testing User Stories from UX Section

<!-- omit in toc -->
#### First Time Visitor Goals

- I want to be able to improve my general knowledge of Ireland in a fun way.
  - The quiz provides the user with a question and four options to choose from.
    Through answering the questions the user gains knowledge in a fun way.
- I want the site to be easy to navigate.
  - All content provided on the page is clear to the user. The buttons are also
    different colours and spaced evenly so that the user can differentiate
    between all of them.
- I want to be able to view my score at the end of the quiz.
  - Once the user has answered all the questions they can click the submit button
    and their score will display.

<!-- omit in toc -->
#### Returning Visitor Goals

- I want to have different questions each time I visit so in order to learn more.
  - We have a footer at the end of our page that states we update our quiz every
    Monday. So if a user was to visit our site on a Wednesday they could come back
    the following Monday for the updated quiz.

<!-- omit in toc -->
#### Frequent Visitor Goals

- I want to keep improving my knowledge.
  - The user can keep improving their knowledge by visiting our site weekly.
    Hopefully with future implementations the user won't have to wait weekly.

### Further Testing

- The website was tested on a range of web browsers and responded well. Some of
the browsers it was tested on were:
  - Chrome
  - Safari
  - Microsoft Edge

- The website was viewed on a range of devices such as:
  - iPhone 13
  - Samsung Galaxy s10e
  - Samsung Galaxy A70
  - iPhone 11
  - HP Stream 14s
  - Apple MacBook Pro
  - Samsung Galaxy Tab A8

- I asked family and friends to view the website and complete the quiz. A couple
of bugs outlined above were found through doing this.

### Known Bugs

When testing through Chrome Dev Tools Lighthouse the best practices is scoring
at 83 due to displaying images with incorrect aspect ratio as the width and height
I have set for the images do not fit with the original.

## Credits

### Code

For my CSS file, on line 97 to 101 the code is from
[Stack Overflow](https://stackoverflow.com/questions/65297617/how-to-make-an-elements-background-color-a-little-darker-using-css) as I didn't
want to have to change the colour of those elements background colour t make
them darker. If you click on "Stack Overflow" above it will take you to the
question forum where I got those line of code from.

### Content

All questions for my site are from
[Quiz Global](https://quizglobal.com/quizplay/quizplayqanda/Irish%20Table%20Quiz%20Questions%20and%20Answers) and
[Hobby Lark](https://hobbylark.com/party-games/Fun-Trivia-Quiz-about-Ireland-with-Answers).
All other content for the site, such as the welcome message and alert messages
were written by myself.

### Media

- The
  [Shamrock](https://www.google.com/search?q=irish+logo+png&tbm=isch&hl=en-GB&sa=X&ved=2ahUKEwiw1Y-B78iBAxUmY0EAHYvMAzIQrNwCKAB6BQgBEKsB&biw=1263&bih=563#imgrc=VL3YLy7svMIfvM)
  logo image and favicon is from Google images, which displays the image from
  [Seek Logo](https://seeklogo.com/vector-logo/255211/shamrock-irish).

- The image above with the site shown on a range of devices is a screenshot from
  [Am I Responsive?](https://ui.dev/amiresponsive) which you can use to see how
  your website looks on a range of devices.

- The colour scheme image is a screenshot from
  [Art in Context](https://artincontext.org/) where you can input your colour
  values and it will show you them side by side.

- The images mentioned above were then converted to WEBP using
  [Online Convert](https://www.online-convert.com/).

### Acknowledgements

I would like to acknowledge the following people:

- My family and friends for testing the quiz and dealing with me being frustrated
  when trying to debug and see what was causing the errors.
- The Code Institute Slack channel for their knowledge on Javascript loops when
  I was trying to get a better understanding for how they worked.