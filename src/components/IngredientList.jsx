// src/components/IngredientList.jsx
const IngredientList = (props) => {

    return <ul>
            {props.availableIngredients.map((ingredients,key)=>{
            return  <li key={key} style={{background:ingredients.color}} >{ingredients.name} 
            <button style={{color:"white"}} onClick={() =>props.addToBurger(key)}>+</button> 
            </li>
            })}
            </ul>;
};
  
  export default IngredientList;