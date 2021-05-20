const editFormHandler = (event) => {
    event.preventDefault();
  
    const id = location.toString().split('/')[
      location.toString().split('/').length - 1
    ];
  
    try {
      document.location.replace(`/edit/${id}`)
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
};

document
.querySelector('#edit-btn')
.addEventListener('click', editFormHandler);