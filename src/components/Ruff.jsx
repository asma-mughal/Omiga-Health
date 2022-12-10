import { data } from 'autoprefixer';
import React from 'react'
import { useState } from 'react'

const Ruff = () => {
    const [userData, setUserData] = useState({
        username:"dummy",
        email:"",
        phone:"",
        password:""

    });
    const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]:value})
    }
  return (
    <form 
    >
<div>
    <label htmlFor='username' >username</label>
    <input type="text" name="username"  id="username" 
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
     dark:focus:ring-blue-500 dark:focus:border-blue-500"
     value={userData.username}

     onChange={handleInput}
     />
</div>
<div>
    <label htmlFor='username' >Email</label>
    <input type="text" name="email"  id="username" class="bg-gray-50 border 
    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
    \ dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
    dark:focus:border-blue-500" 
    value={userData.email}
    
    onChange={handleInput}
    />
</div>

<div>
    <label htmlFor='username' >Phone</label>
    <input type="text" name="phone"  id="username" class="bg-gray-50 border
     border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
       dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
       dark:focus:border-blue-500"
       
    onChange={handleInput}
       value={userData.phone}/>
</div>

<div>
    <label htmlFor='username' >Password</label>
    <input type="text" name="password"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    id="username"
    onChange={handleInput}
    value={userData.password}/>
</div>
<button type='submit'>Save</button>

    </form>
  )
}

export default Ruff
