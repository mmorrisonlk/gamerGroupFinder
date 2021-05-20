const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const gamerTag = document.querySelector('#gamer_tag').value.trim();
    const gameName = document.querySelector('#game_name').value.trim();
    const timeFrom = document.querySelector('#time_from').value.trim();
    const timeTo = document.querySelector('#time_to').value.trim();
    const currentPlayers = document.querySelector('#current_players').value.trim();
    const maxPlayers = document.querySelector('#max_players').value.trim();

    if (title && content) {
        const response = await fetch(`/api/groups`, {
        method: 'POST',
        body: JSON.stringify({ title, content, gamerTag, gameName, timeFrom, timeTo, currentPlayers, maxPlayers }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
        document.location.replace('/profile');
        } else {
        alert('Failed to create group');
        }
    }
};

document
.querySelector('#add-group')
.addEventListener('submit', newFormHandler);
