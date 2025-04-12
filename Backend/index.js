const {connectDB,login,register}=require('simple-auth-kit')
connectDB('mongodb://localhost:27017/testauth')
const reg=async()=>{

    const res = await register({
        name: "Rijwan",
        email: "rijwan@example.com",
        address: "India",
        gender: "male",
        password: "pass123"
      });
      console.log(res);
  
}
reg();
