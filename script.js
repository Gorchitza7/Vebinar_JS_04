// Меняем параграф с помощью querySelector
const myPar = document.querySelectorAll('p')

console.log(myPar)

myPar.forEach(item => {
	item.textContent = 123
})

// создаем элемент с помощью createElement
const myDiv = document.createElement('div')

myDiv.textContent = 'Hello'

// добавляем класс
myDiv.classList.add('my-div')

const bd = document.querySelector('body')

bd.append(myDiv)

const exampleArr = [
	{
		name: 'John',
		age: 25,
		role: 'Leader',
	},
	{
		name: 'Paul',
		age: 24,
		role: 'Friend',
	},
	{
		name: 'George',
		age: 23,
		role: 'Assisstant',
	},
	{
		name: 'Ringo',
		age: 26,
		role: 'Base',
	},
]

exampleArr.forEach(item => {
	// console.log(item.name)
	const parentDiv = document.createElement('div')
	const nameHeader = document.createElement('h3')
	const role = document.createElement('p')
	nameHeader.textContent = item.name
	role.textContent = item.role
	switch (item.age) {
		case 23: {
			parentDiv.classList.add('yellow')
			break
		}
		case 24: {
			parentDiv.classList.add('cyan')
			break
		}
		case 25: {
			parentDiv.classList.add('magenta')
			break
		}
		case 26: {
			parentDiv.classList.add('lightgreen')
			break
		}
		default:
			return
	}
	parentDiv.append(nameHeader, role)
	bd.appendChild(parentDiv)
})

function add(arg1, arg2) {
	let sum = arg1 + arg2
	return sum
}

const sum = add(1, 15)
console.log(sum);
