import {useState,useContext,useEffect} from 'react';
import {Login} from './components/Auth/Login'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import {AuthContext} from './context/AuthProvider'




export const App = () =>  {

  const[user,setUser] = useState(null);
  const[logedInUserData,setLogedInUserData]=useState(null);

  // const authData = useContext(AuthContext);
  const { userData} = useContext(AuthContext);
  // localStorage.clear()
  
  useEffect(() => {
  const store = localStorage.getItem("logedInUser");

  if (store) {
     const storedUser = JSON.parse(store);
    setUser(storedUser.role); 

    if (storedUser.role === "employee"){
      setLogedInUserData(storedUser.data);
    }
  }
}, []);

  // useEffect (()=>{
  //   if(authData){
  //      const logedInUser = localStorage.getItem("logedInUser");
  //   }
  // },[authData]);

  const handleLogin=(email,password)=>{
    if(email=="admin@e.com"&& password=="123"){
      setUser("admin");
      localStorage.setItem("logedInUser",JSON.stringify({role:"admin"}));
    }else if(userData){
      const employee = userData.employees.find((e)=>{return email==e.email&& password== e.password})
      if(employee){
        setLogedInUserData(employee);
      setUser("employee");
      localStorage.setItem("logedInUser",JSON.stringify({role:"employee",data:employee}))
      }else{
      alert("Invalid User");
    }

    }else{
      alert("Invalid User");
    }
  }
  // handleLogin("admin@od.com","123");


  return (
    <div >
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=="admin"?<AdminDashboard changeUser={setUser} data={{ firstName: "Admin" }}/>:(user=="employee"?<EmployeeDashboard changeUser={setUser} data={logedInUserData}/>:'')}
      
    </div>
  );
};