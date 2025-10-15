const mongoose =require ("mongoose");

mongoose.connect("mongodb+srv://rajeshgupta67867_db_user:KSZfui2q3SVhFRQE@cluster0.q2ttitw.mongodb.net/")
.then(()=>{
    console.log("mongodb connected successfully"  )
})

.catch(()=>{
    console.error("mongodb connection error:",err)
})


const  userSchema= new mongoose.Schema({
    username: String,
    password:String,
    firstname:String,
    lastname:String,

})


const User=mongoose.model("User",userSchema);

module.exports={
    User
}