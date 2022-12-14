# project-management-app
- [Task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/project-management-system-EN.md)
![image](https://user-images.githubusercontent.com/81522781/207570728-580293ad-7aab-487c-9c5b-a4558f7d0c43.png)
- [Deploy](https://team-taskban.netlify.app/) and [video instruction](https://www.youtube.com/watch?v=cs44PY3j4c8) 
- [Backend](https://kanban-lizaveta01.koyeb.app/api-docs/) and [Backend repository](https://github.com/Lizaveta01/final-task-backend)
- Start date **06-11-2022** / Done **06-12-2022**
- **60** / **60**
## Welcome route - max 7 points
 - The welcome page should contain general information about the developer, project, and course. 1 point
 - In the upper right corner there are 2 buttons: Sign In and Sign Up. 1 point
 - If login token is valid and unexpired, change buttons Sign In and Sign Up on "Go to Main Page" button. 2 points
 - When the token expires - the user should be redirected to the "Welcome page" automatically. 2 points
 - Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. 1 point
## Sign In / Sign Up - max 8 points
 - Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be 2 points
 - Form fields should be implemented according to the backend API. Validation should be implemented. 4 points
 - Upon successful login, the user should be redirected to "Main route" 1 point
 - If user already logged in and he try to reach this routes - he should be redirected to Main route. 1 point
## Main route - max 8 points
 - Board creation functionality 2 points
 - Displays all created boards as a list/grid 1 point
 - Each board in the list is displayed with a small preview of available information (title, description, etc). By clicking an element the user navigates to the board item (Board route). There's also a button for board deletion. 1 point
 - When trying to delete the board, we should receive a confirmation modal. The confirmation modal must be a generic component (one for the entire application). 1 points
 - The user profile editing functionality is implemented. 3 points
## Board route - max 26 points
 - Button for column creation is displayed 1 point
 - If a board contains at least one column - a button for task creation is displayed/become enabled as well 1 points
 - A modal windows with forms is displayed for column and task creations 3 points
 - A vertical scrollbar is displayed in the column when overflowing with the number of column tasks 2 points
 - The page itself on the current route doesn't have a vertical scrollbar 1 points
 - With the help of drag-n-drop, we can swap columns. 3 points
 - With the help of drag-n-drop, we can change the order of tasks within a column. 3 points
 - With the help of drag-n-drop, we can change the task belonging to the column. 5 points
 - The functionality of viewing and editing of the task has been implemented. 3 points
 - The task must have a delete task button. On click: confirmation modal -> delete. 1 points
 - At the top of the column should be Title. When you click on it, it should become an input, with Submit and Cancel buttons near it. After entering text in the input and clicking Submit - the Title of the column should change. 2 points
 - The column should have a delete button. By clicking -> confirmation modal -> when approving -> deleting. 1 points
## General requirements - max 11 points
 - Backend error handling - (Not found, unhandled rejection, etc) should be performed in a user-friendly way (toast, pop-up or anything else you implement). 4 points
 - Localization 1 point
 - Backend is deployed and publicly available 2 points
 - Sticky header 2 points
 - Extra scope same complexity as Global search 2 points
# Extra functionality
- Tasks and boards searching
- Priority tasks is implemented
- Emoji for boards title
- Theme changing is implemented
- Separating for boards viewing
- Differentiation of rights to delete and edit tasks and boards, view them

**WARNING!**
Only boards owners or people who are assigned into some board can see them! It was implemented for security.
