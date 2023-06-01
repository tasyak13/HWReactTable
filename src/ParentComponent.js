import { useState } from "react";

function Form({onDataChange}) {

        const [names, setMessage] = useState('');
      
        const handleName = event => {
          const result = event.target.value.replace(/[^a-z]/gi, ' ');
          setMessage(result);
        }

    function onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const age = formData.get('age')
        const email = formData.get('email')
        onDataChange({ name, age, email })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input placeholder="Name" type="text" name="name" value={names} onChange={handleName} required />
            <br />
            <input placeholder="Age" min={1} max={100} type="number" name="age" required />
            <br />
            <input placeholder="Email" type="text" name="email" />
            <br /> 
            <button type="submit">Send</button>
        </form>
    )
}

export default Form;