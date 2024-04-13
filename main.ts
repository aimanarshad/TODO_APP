import inquirer from "inquirer"
let todos =[];
let condition = true;
while (condition){
    let Taskans=await inquirer.prompt(
        [
            {
            name:"todos",
            type:"input",
            message:"what do ypu want to add in your todos"
            },
            {
            name:"addMore",
            type:"confirm",
            message:"do you want to add more",
            default :"false"
            }
     ]
    )
    todos.push(Taskans.todos);
    condition=Taskans.addMore;
    console.log(todos);
};
let popFunction=await inquirer.prompt([
    {
    name:"topop",
    type:"confirm",
    mesage:"do you want pop a todo ",
    default:"false"
}
    
]
)
todos.pop();
console.log(todos);

