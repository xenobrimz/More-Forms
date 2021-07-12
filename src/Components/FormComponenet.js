import React, { useState } from 'react';
const Form = (props) => {
    const [form,setForm] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
        agree: false
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
             [event.target.name]: event.target.type ==='checkbox' ? event.target.checked : event.target.value
        })
    }

    const lengthValidator = (input, length) =>{
        if (input === form.agree){
            return input     
        }
        return input.length > length;
   } 

    return(
        <form>
            <div className="form-group">
                <label>First Name</label>
                <input name="firstName" type="email" className="form-control w-50 "  onChange={onChangeHandler} />
                {!lengthValidator(form.firstName,2) && <span className='alert-danger'> You need at least 2 Characters! </span>}
            </div> 
            <div className="form-group">
                <label>lastName</label>
                <input name="lastName" type="email" className="form-control"  onChange={onChangeHandler} />
                {!lengthValidator(form.lastName,2) && <span className='alert-danger'> You need at least 2 Characters! </span>}
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input name="email" type="email" className="form-control"  onChange={onChangeHandler} />
                {!lengthValidator(form.email,5) && <span className='alert-danger'> You need at least 5 Characters! </span>}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" onChange={onChangeHandler}/>
                {!lengthValidator(form.password,8) && <span className='alert-danger'> You need at least 8 Characters! </span>}
            </div>
            <div className="form-check">
                <input name = 'agree' type="checkbox" className="form-check-input" onChange={onChangeHandler}/>
                <label className="form-check-label" >Agree?</label>
                {!lengthValidator(form.agree) && <span className='alert-danger'> You must agree! </span>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default Form;