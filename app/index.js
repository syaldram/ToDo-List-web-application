import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// This will hold our tasks. In a real application, you might want to use a database instead.
let tasks = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  // Pass the tasks array to the EJS template
  res.render("index", { tasks: tasks });
});

app.post("/addTask", (req, res) => {
  // Get the new task from the form data
  let newTask = req.body.newTaskTitle;
  let newTaskTime = req.body.newTaskTime;

  // Add the new task to the tasks array
  tasks.push({ title: newTask, time: newTaskTime });

  // Redirect back to the main page
  res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
