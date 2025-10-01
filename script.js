// Ajax
// Lesson 5


// Element's
let mybtn = document.getElementById("fill_btn")
var mytable = document.getElementById("tble");


// Function's
function loadUsers() {
    
    let xhr = new XMLHttpRequest;
    xhr.open("GET","./data.xml",true);

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            let xmlDoc = xhr.responseXML;
            let users = xmlDoc.getElementsByTagName("user");

                for (let i = 0; i < users.length; i++) {
                    let user_id = users[i].getAttribute("id");
                    let user_fullname = users[i].getElementsByTagName("fullName")[0].textContent;
                    let user_username = users[i].getElementsByTagName("username")[0].textContent;
                    let user_password = users[i].getElementsByTagName("password")[0].textContent;
                
                    let tr = document.createElement("tr");
                    let myNode = `
                    <td>${user_id}</td>
                    <td>${user_fullname}</td>
                    <td>${user_username}</td>
                    <td>${user_password}</td>`;

                    tr.innerHTML = myNode;
                    mytable.append(tr);
                };
            };
        };  

    xhr.send();
};


// Event's
mybtn.addEventListener("click",loadUsers);




// Finish