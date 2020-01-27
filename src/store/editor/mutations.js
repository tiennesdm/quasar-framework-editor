export function pushMutation (state,value) {
    //console.log(value);
   let val= {
        "name":value
    }
  return  state.state.todos.push(val);
   // return state.todos.push(val)
//   console.log(val);

}
export function popMutation(state){
  return state.state.todos.pop();

}
