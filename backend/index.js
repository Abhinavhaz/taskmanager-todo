const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

const taskRoutes = require("./routes/task.route");


const TaskService = require("./services/task.service");

const TaskServiceInstance = new TaskService();
console.log(
  TaskServiceInstance.find,
  TaskServiceInstance.create,
  TaskServiceInstance.update,
  TaskServiceInstance.delete
);


const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  } = require("./controllers/task.controller");
  
  console.log(getTasks, createTask, updateTask, deleteTask);

const taskModel = require("./models/task.model")
console.log(taskModel)
console.log(taskModel)
const app = express ()
const PORT = 8082

const DB_URI ="mongodb+srv://abhinavhazarika27:p3IPnFlArapdSivG@cluster0.gav7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 


mongoose.connect(DB_URI,{
    useNewUrlParser :true,
    useUnifiedTopology :true
}).then(()=>console.log("Db is connected now"))
  .catch((error)=>console.log("Error while connecting in db",error))

app.use(cors())
app.use(express.json())

app.use("/tasks", taskRoutes);
// app.use("/task",taskRoutes)


app.listen(PORT,()=>{
    console.log(`Backend listening at Port ${PORT}`)
})


