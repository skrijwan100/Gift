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
// reg();

const loginuser=async()=>{

  const res= await login({
    email:"rijwan@example.com",
    password:"pass123"
  })
  console.log(res)

}
loginuser();