# Google Docs Clone

![Screenshot (57)](https://github.com/solankirishav21/googleDocs-Clone/assets/82879807/aa9d4a9f-d3cf-4eb2-aa3a-3cf833b0672d)

[Project Link](https://google-docs-clone-solankirishav21.vercel.app/)
## Project Overview:


This project was assigned to me by a company as part of their recruitment process for a web development role. The company provided the project as a test to assess my skills and abilities in React.js development. The project's primary goal was to evaluate my proficiency in building a web application using React.js and related technologies. The project required me to demonstrate my understanding of React.js concepts.

Additionally, it allowed me to showcase my problem-solving skills, attention to detail, and ability to follow best practices in web development. The completed project serves as a practical demonstration of my capabilities and suitability for the web development role at the company.


## Tech Stack

```React``` ```CSS``` ```QuillJs```


## Project Structure

![folder structure](https://github.com/solankirishav21/googleDocs-Clone/assets/82879807/8289f286-de31-4349-a939-b697994c7f41)

* The Public folder contains fabicon and ```index.html```, which is the entry point of the application.
*  The ```src``` or the source folder contains the main source code of the project.
*  ```App.js``` is the main componenet that renders all the other components of the web app.
*  ```Components``` directory contains all the individuals components that are clubbed together to make the website.
*  The ```index.js``` is the entry point of the React App and it renders all the app componnets in a root div of ```index.html```.
*  The ```package.json``` contains all the data about packages and scripts used in the project.
*  The ```package.lock.json``` contains details about the dependencies of depedencies.


## Components

### ```CustomizedQuill``` 

The CustomizedQuill component represents the text editor area where the user can write or edit the document. This component is made using QuillJs and the designing is done by a style sheet part of quill library ```Snow```.
It also renders the text editor menu which has different styling and formatting options such as text color, font size, font, bold, itallic, underline which are part of the ```QuillJS``` library.

### ```DocBarMenu```

The Doc Bar Menu renders the two menus that are - * the top menu which consist the logo of google docs, user picture, version history and other things.
                                                  * the seond is the navigation menu which contains the file, edit, view, insert, tools options.
This component is custom styled using CSS.

### ```SideBar```

The sidebar renders the other google apps that are contacts, calendar, maps. It has a right arrow bottom which is used to collapse and open the sidebar.

### ```TextEditor``` 

The textarea component renders the customizedquill and passes the state text to the customizedquill component to display the chage in text when the user edits the text.


