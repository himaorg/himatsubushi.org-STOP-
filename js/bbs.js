document.addEventListener('DOMContentLoaded', function() {
    fetchMessages();
    document.getElementById('messageForm').addEventListener('submit', postMessage);
});

function fetchMessages() {
    fetch('get_messages.php')
        .then(response => response.json())
        .then(data => {
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML = '';
            data.forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.textContent = message.content;
                messagesDiv.appendChild(messageDiv);
            });
        });
}

function postMessage(event) {
    event.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const content = messageInput.value;
    messageInput.value = '';

    fetch('post_message.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
    })
    .then(fetchMessages);
}