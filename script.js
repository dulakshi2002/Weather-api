document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();

    document.getElementById('add-user-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addUser();
    });
});

const apiUrl = 'http://localhost:8070/user';

const addUser = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;

    fetch(`${apiUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name: name, Email: email, Location: location })
    })
    .then(response => response.json())
    .then(data => {
        alert('User added successfully!');
        fetchUsers();
    })
    .catch(error => {
        console.error('Error adding user:', error);
    });
};

const fetchUsers = () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';

            data.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');

                const userName = document.createElement('p');
                userName.textContent = `Name: ${user.Name}`;
                userElement.appendChild(userName);

                const userEmail = document.createElement('p');
                userEmail.textContent = `Email: ${user.Email}`;
                userElement.appendChild(userEmail);

                const userLocation = document.createElement('p');
                userLocation.textContent = `Location: ${user.Location}`;
                userElement.appendChild(userLocation);

                const userWeather = document.createElement('p');
                userWeather.textContent = `Weather: ${JSON.stringify(user.WeatherData)}`;
                userElement.appendChild(userWeather);

                userList.appendChild(userElement);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
};
