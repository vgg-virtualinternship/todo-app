const clear = document.querySelector(".clear")
const date = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')


// Todo Classnames
const CHECK = 'fa-check-circle'
const UNCHECK = 'fa-circle-thin'
const LINE_THROUGH = 'lineThrough'

// fetching data for local storage
let LIST, id

// to be implemented later 



// Show today's date
const options = {
  weekday: "long",
  month: "short",
  day: "numeric"
}
const today = new Date() 

date.innerHTML = today.toLocaleDateString("en-US", options)

const addTodo = (toDo) => {
  
  
  const item = `<li class="item">
                 <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                 <p class="text">${toDo}</p>
                 <i class="fa fa-trash-o de" job="delete" id="0"></i>
                </li>`

  const position = "beforeend"
  list.insertAdjacentHTML(position, item)
}


// pressing ENTER sends the input
// document.addEventListener("keyup", even => {
//   if(event.keyCode == 13) {
//     const toDo = input.value

//     // check if input is empty 
//   //   if(toDo){
//   //     addTodo(toDo, id, false, false)
//   //     console.log(toDo)


//   //     // add data to local storage
//   //   }

//   //  input.value = ''
  
//   }

// })

addTodo('wash the pool')