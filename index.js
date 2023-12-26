
const app = require("./app");

// app.listen(`${process.env.RUNNING_PORT}`,()=>{
//     console.log(`App is running on PORT ${process.env.RUNNING_PORT}`)
// })

app.listen(5060,()=>{
    console.log("App is running on port 5060")
})
