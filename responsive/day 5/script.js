// //task 1
// arr = [1, [2, 3], [4, [5, 6]]]
// console.log(arr.flat(1))

// arr2 = [1, [], [2, [3]], 4]
// console.log(arr2.flat(1))

// //task 2
// let uniqueValues = (arr) => {
//     let x = new Set(arr);
//     return Array.from(x);

// }
// console.log(uniqueValues([1, 2, 3, 4, 1, 2, 3, 4]))

// //task 3
// let arr3 = [...arr, ...arr2]
// console.log(arr3)

// //task 4
// let obj = {
//     name: "Manar",
//     age: 22
// }
// let obj2 = {
//     phone: '01112850863'
// }
// let obj3 = { ...obj, ...obj2, d: 'qena' }
// console.log(obj3)

//task 5
// async function fetchRequest() {
    
//     let response =await fetch('https://dummyjson.com/users',{method:'get'})
//     let data =await response.json();
//     let users=data.users;
//     users.forEach(user => {
       
//         console.log(`Name : ${user.firstName}\n image : ${user.image} \n address : ${user.address.address} \n city : ${user.address.city}`)      
//     });
//     console.log(users[0])
// }

// fetchRequest()


async function fetchRequest() {
    try {
        let response = await fetch('https://dummyjson.com/users', { method: 'get' });
        let data = await response.json();
        let users = data.users;

        let userCardsContainer = document.getElementById('user-cards');
        userCardsContainer.innerHTML = ''; 

        users.forEach(user => {
            let card = document.createElement('div');
            card.className = 'w-25 mb-4';

            card.innerHTML = `
                <div class="card">
                    <img src="${user.image}" class="card-img-top" alt="${user.firstName}">
                    <div class="card-body">
                        <h5 class="card-title">${user.firstName}</h5>
                        <p class="card-text">
                            <strong>Address:</strong> ${user.address.address}<br>
                            <strong>City:</strong> ${user.address.city}
                        </p>
                    </div>
                </div>
            `;

            
            userCardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchRequest();

