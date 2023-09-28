

// Function: Sleep
// Param: name
//Defintion: How to sleep

function sleep(name) {
    console.log(`${name} is sleeping`)
}


//Function Awake
// Param: name
// Definition: How to awake

function Awake(name) {
    console.log(`${name} is Awaking`)
}

//Function: Eat
//Parma: name
//Parm: Time
//Definition : How to Eat

function eat(name, time) {
    console.log(`${name} is taking ${time}`)
}

// Function : Walk
//Param: name
//Param: Destination
//Definition: how to Work

function walk(name, Destination) {
    console.log(`${name} is warking to ${Destination}`)
}

// Function : Study
//Param: name
//Definition : How to study
function study(name) {
    console.log(`${name} is studying `)
}


//Function : Work
// Param: name
//Definition: How to work

function work(name) {
    console.log(`${name} is warking`)
}

//function : Job_Holder-Lifecycle
//Param: name
//Defination:
//-Awake->name
//-Eat -> name, 'breakfast'
//-Wolk -> name, 'office'
//-Work -> name,
//-Eat -> name, 'luch'
//-Walk -> name, 'home'
//-Eat -> name, 'dinner'
//-slep -> name, 

function jobholderLifecycle(name) {
    Awake(name)
    eat(name, 'breakfast')
    walk(name, 'office')
    work(name)
    eat(name, 'Lunch')
    walk(name, 'home')
    eat(name)
    sleep(name)
}

jobholderLifecycle('Mehedi Hasan')
console.log('------------------')
jobholderLifecycle('abdul Momin')
console.log('------------------')

//function: Students_Lifecycle
//param: name
//definition:
//-awake->name
//eat->name, 'breakfast'
//-study -> name
//-eat -> name 'lench
//-study -> name
//-eat -> name 'dinner'
//-sleep -> name

function studentsLifecyle(name) {
    Awake(name)
    eat(name, 'breackfast')
    study(name)
    eat(name, 'Lunch')
    study(name)
    eat(name, 'dinner')
    sleep(name)
}

studentsLifecyle('kuddus mia')