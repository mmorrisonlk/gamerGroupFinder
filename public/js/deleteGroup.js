const deleteFormHandler = async (event) => {
  event.preventDefault();

  const id = location.toString().split('/')[
    location.toString().split('/').length - 1
  ];

  try {
    const response = await fetch(`/api/groups/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ group_id: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/user-group');
    } else {
      alert('Failed to delete group');
    }
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
  }
};


document
.querySelector('#delete-btn')
.addEventListener('click', deleteFormHandler);