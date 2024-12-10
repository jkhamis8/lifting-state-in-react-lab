// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return <ul>

    {props.stack.length ? props.stack.map((stacks,key)=>{
    return  <li key={key} style={{background:stacks.color}} >{stacks.name}
    <button style={{color:"white"}} onClick={() =>props.removeFromBurger(key)}>X</button> 
    </li>
    }):<li>No Ingredients</li>}
    </ul>;
  };
  
  export default BurgerStack;
  