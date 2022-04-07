import React,{useState} from 'react'




const Multipleinputs = () => {

    const [userRegistration , setuserRegistration] = useState({
          firstname: "",
          lastname: "",
          email: "",
          password:""


    });
            const[records, setRecords ] =useState([])
    const handleInput = (e) => {
        const name= e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setuserRegistration({...userRegistration, [name] : value })

    
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        const newRecord = {...userRegistration, id:new Date().getTime().toString()}

        setRecords([...records,newRecord])


    }


  return (
      
    <form action=" " onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstname"> Firstrname</label>
            <input type="text" autoComplete='off' value={userRegistration.firstname} onChange={handleInput} name="firstname" id="firsrname"/>
        </div>
        <div>
            <label htmlFor="lastname"> Lastname</label>
            <input type="text" autoComplete='off' value={userRegistration.lastname} onChange={handleInput} name="lastname" id="lastname"/>
        </div>
        <div>
            <label htmlFor="email"> Email </label>
            <input type="email" autoComplete='off' value={userRegistration.email} onChange={handleInput} name="email" id="email"/>
        </div>
        <div>
            <label htmlFor="password"> Username</label>
            <input type="password" autoComplete='off' value={userRegistration.password} onChange={handleInput} name="password" id="password"/>
        </div>

                <button type="submit"> Regitration  </button>

                <div>
            {
                  records.map((curElem)=>{
                      return(
                        <div className='showDataStyle'>
                            <p>{curElem.firstname}</p>
                            <p>{curElem.lastname}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>

                       
                        </div>
                         )
                  }  )
                }
                </div>

    </form>


    
  )
}

export default Multipleinputs