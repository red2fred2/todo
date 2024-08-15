# todo
I want to brush up on the MERN stack. Why not make a simple todo app to help? It's ugly, but it works.

![Demo Video](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/todo%20demo.mp4)

## Architecture

### Database
Ideally, a todo list won't have more than 100 things in it at any given time. That means I didn't have to be too picky about how we model this in MongoDB. For simplicity, I made each task its own document and gave it an owner field so we can query by owner ID.

To store the users, I just used an ID, username, and password hash for login.

### API
This was a great case for a CRUD style API.

We need to Create, Read, Update, and Delete tasks. Though an API endpoint to get all of a user's tasks would be very useful.

I did this thing in less than 2 days, but security wasn't an afterthought... I just didn't do it. If I continued development, I would add authentication API endpoints that would return JWT tokens. Each API call from there would require that JWT token to work.

### Frontend Root

I wanted to make this into a single page app, so at the root, there's a view state that can be switched.
```js
switch(view) {
	case 'Add': return <AddView ... />;
	case 'Edit': return <EditView ... />;
	case 'List': return <ListView ... />;
	case 'Single': return <SingleView ... />;
};
```

### Frontend pages
Beyond that, each page corresponds to a CRUD operation. Though the delete operation needs to be easily accessible in a todo list, so multiple pages have a delete button.

If I were to develop this more, I would also add a sign in and sign up page. For now though, the app is hard coded to use a single user without any login.

![Diagram](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/Diagram.jpg)

## Usage
The todo list starts out blank. That's no surprise. Why don't we add a new task?

To do that, just click the plus in the top right corner
![Empty List](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/Empty%20list.png)

That switches the view to a task creation screen. We just have to fill out the fields
![Add Task View](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/Add%20view.png)

Then click the checkmark to the right of the task name
![Add Task View 2](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/Add%20view%202.png)

Sweet! That task has been added, and we've been dropped back to the list view.

If we want to take a closer look at the task, we just click on it
![List](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/List.png)

This allows us to see any details we added to the task earlier.

If we want to change something about this task, just click the edit icon to the left of the task name
![Single View](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/Single%20view.png)

This looks a lot like what we used to add a new task earlier.

Whenever we're happy with the changes, just click the checkmark button to the right of the task name
![Edit View](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/Edit%20view.png)

That's all there is to using the application. It's just a todo list after all.

Here's what it looks like once a bunch of tasks have been added
![Full List](https://raw.githubusercontent.com/red2fred2/todo/main/example%20images/Full%20list.png)
