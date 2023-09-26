import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// These will hold our tasks. In a real application, you might want to use a database instead.
let personalTasks = [];
let professionalTasks = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  // Render the main page
  res.render("personal", { tasks: personalTasks });
});

app.get("/personal", (req, res) => {
  // Pass the personalTasks array to the EJS template
  res.render("personal", { tasks: personalTasks });
});

app.get("/professional", (req, res) => {
  // Pass the professionalTasks array to the EJS template
  res.render("professional", { tasks: professionalTasks });
});

app.post("/addPersonalTask", (req, res) => {
  // Get the new task from the form data
  let newTask = req.body.newTaskTitle;
  let newTaskTime = req.body.newTaskTime;

  // Add the new task to the personalTasks array
  personalTasks.push({ title: newTask, time: newTaskTime });

  // Redirect back to the personal page
  res.redirect("personal");
});

app.post("/addProfessionalTask", (req, res) => {
  // Get the new task from the form data
  let newTask = req.body.newTaskTitle;
  let newTaskTime = req.body.newTaskTime;

  // Add the new task to the professionalTasks array
  professionalTasks.push({ title: newTask, time: newTaskTime });

  // Redirect back to the professional page
  res.redirect("professional");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

