window.addEventListener("load", solve);
function solve() {
  const addButton = document.querySelector('.add-btn');
  const editButtons = document.querySelectorAll('.edit-btn');
  const nextButton = document.querySelector('.next-btn');
  const snowList = document.querySelector('.snow-list');
  const snowmanPreview = document.querySelector('.snowman-preview');
  const snowmanForm = document.querySelector('.snowman');
  const backButton = document.createElement('button');
  const backImg = document.getElementById('back-img');

  // Function to create snowman preview list item
  function createSnowmanPreviewItem(snowmanName, height, location, creator, attribute) {
    const listItem = document.createElement('li');
    listItem.classList.add('snowman-info');

    const article = document.createElement('article');

    article.innerHTML = `
      <p>Name: ${snowmanName}</p>
      <p>Height: ${height}</p>
      <p>Location: ${location}</p>
      <p>Creator: ${creator}</p>
      <p>Attribute: ${attribute}</p>
    `;

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.textContent = 'Next';

    btnContainer.appendChild(editButton);
    btnContainer.appendChild(nextButton);

    listItem.appendChild(article);
    listItem.appendChild(btnContainer);

    return listItem;
  }

  // Function to clear snowman preview
  function clearSnowmanPreview() {
    snowmanPreview.innerHTML = '';
  }

  // Function to disable edit buttons
  function disableEditButtons() {
    editButtons.forEach(button => button.disabled = true);
  }

  // Function to enable edit buttons
  function enableEditButtons() {
    editButtons.forEach(button => button.disabled = false);
  }

  // Function to handle edit button click
  function handleEditButtonClick() {
    const listItem = this.closest('.snowman-info');
    if (!listItem) return;

    const article = listItem.querySelector('article');
    const snowmanInputs = snowmanForm.elements;

    // Fill input fields with snowman preview data
    snowmanInputs[0].value = article.querySelector('p:nth-child(1)').textContent.split(': ')[1];
    snowmanInputs[1].value = article.querySelector('p:nth-child(2)').textContent.split(': ')[1];
    snowmanInputs[2].value = article.querySelector('p:nth-child(3)').textContent.split(': ')[1];
    snowmanInputs[3].value = article.querySelector('p:nth-child(4)').textContent.split(': ')[1];
    snowmanInputs[4].value = article.querySelector('p:nth-child(5)').textContent.split(': ')[1];

    // Remove snowman preview item
    listItem.remove();

    // Enable Add button
    addButton.disabled = false;

    // Disable Edit buttons
    disableEditButtons();

    // Disable Next button
    nextButton.disabled = true;
  }

  // Add event listener to the "Add" button
  addButton.addEventListener('click', function(event) {
    event.preventDefault();

    const snowmanName = document.getElementById('snowman-name').value;
    const height = document.getElementById('snowman-height').value;
    const location = document.getElementById('location').value;
    const creator = document.getElementById('creator-name').value;
    const attribute = document.getElementById('special-attribute').value;

    // Check if any input field is empty
    if (snowmanName === '' || height === '' || location === '' || creator === '' || attribute === '') {
      return;
    }

    const snowmanPreviewItem = createSnowmanPreviewItem(snowmanName, height, location, creator, attribute);

    snowmanPreview.appendChild(snowmanPreviewItem);

    // Clear input fields
    snowmanForm.reset();

    // Disable Add button
    addButton.disabled = true;

    // Enable Edit buttons
    enableEditButtons();

    // Enable Next button
    nextButton.disabled = false;
  });

  // Add event listeners to the "Edit" buttons
  editButtons.forEach(button => button.addEventListener('click', handleEditButtonClick));

  // Add event listener to the "Next" button
  nextButton.addEventListener('click', function() {
    const snowmanPreviewItems = snowmanPreview.querySelectorAll('.snowman-info');

    snowmanPreviewItems.forEach(item => {
      const listItem = item.cloneNode(true);
      snowList.appendChild(listItem);
    });

    clearSnowmanPreview();

    // Add Send button
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    snowList.parentElement.parentElement.appendChild(sendButton);
    sendButton.addEventListener('click', function() {
      const mainElement = document.getElementById('hero');
      mainElement.remove();
      document.body.appendChild(backButton);
      backImg.hidden = false;
    });

    // Disable Next button
    nextButton.disabled = true;
  });

  // Add event listener to the "Back" button
  backButton.textContent = 'Back';
  backButton.classList.add('back-btn');
  backButton.addEventListener('click', function() {
    location.reload();
  });
}

solve();
