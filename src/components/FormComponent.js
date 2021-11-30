import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                value={props.data.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={props.handleChange}
                /> 
                <br />
    
                <input 
                value={props.data.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={props.handleChange}
                /> 
                <br />
    
                <input 
                value={props.data.Age} 
                name="age" 
                placeholder="Age" 
                onChange={props.handleChange}
                /> 
                <br />
    
                <label>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <br />
    
                <label>
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <br />
    
                <select 
                value={props.data.destination} 
                name="destination"
                onChange={props.handleChange}
                >
                    <option value="">-- Choose a Destination -- </option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="patna">Patna</option>
                    <option value="delhi">Delhi</option>
                </select>
                <br />
    
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> You are vegan.
                </label>
                < br/>
    
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> You are Kosher.
                </label>
                < br/>
    
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> You are Lactose Free.
                </label>
                < br/>
    
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered Information</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:
                <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Intolerance: {props.data.isLactoseFree ? "Yes" : "No"}</p>
            </p>
        </main>
        
    )
}

export default FormComponent