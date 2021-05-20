const editFormHandler = async (event) => {
  event.preventDefault();

  const id = location.toString().split('/')[
    location.toString().split('/').length - 1
  ];

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  const dificulty = document.querySelector('#difficulty').value.trim();
  const gamerTag = document.querySelector('#gamer_tag').value.trim();
  const gameName = document.querySelector('#game_name').value.trim();
  const timeFrom = document.querySelector('#time_from').value.trim();
  const timeTo = document.querySelector('#time_to').value.trim();
  const currentPlayers = document.querySelector('#current_players').value.trim();
  const maxPlayers = document.querySelector('#max_players').value.trim();
  console.log(`/api/groups/${id}`)

  try {
    await fetch(`/api/groups/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, dificulty, gamerTag, gameName, timeFrom, timeTo, currentPlayers, maxPlayers }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    window.location.reload();
  } catch (err) {
    alert("couldn't update")
  }
};

document
  .querySelector('#upsert-group')
  .addEventListener('submit', editFormHandler);

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});