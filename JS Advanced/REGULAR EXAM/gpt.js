function solve() {
  const snowmanForm = document.querySelector('.snowman');
  const snowmanPreview = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');
  const addBtn = document.querySelector('.add-btn');
  const editBtn = document.querySelector('.edit-btn');
  const nextBtn = document.querySelector('.next-btn');
  const sendBtn = document.querySelector('.send-btn');
  const backBtn = document.querySelector('.back-btn');
  const snowmanNameInput = document.getElementById('snowman-name');
  const snowmanHeightInput = document.getElementById('snowman-height');
  const locationInput = document.getElementById('location');
  const creatorNameInput = document.getElementById('creator-name');
  const specialAttributeSelect = document.getElementById('special-attribute');

  addBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const snowmanName = snowmanNameInput.value.trim();
    const snowmanHeight = snowmanHeightInput.value.trim();
    const location = locationInput.value.trim();
    const creatorName = creatorNameInput.value.trim();
    const specialAttribute = specialAttributeSelect.value.trim();

    if (snowmanName === '' || snowmanHeight === '' || location === '' || creatorName === '' || specialAttribute === '') {
      return;
    }

    const snowmanInfo = document.createElement('li');
    snowmanInfo.className = 'snowman-info';

    const snowmanArticle = document.createElement('article');

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Name: ${snowmanName}`;
    snowmanArticle.appendChild(nameParagraph);

    const heightParagraph = document.createElement('p');
    heightParagraph.textContent = `Height: ${snowmanHeight}`;
    snowmanArticle.appendChild(heightParagraph);

    const locationParagraph = document.createElement('p');
    locationParagraph.textContent = `Location: ${location}`;
    snowmanArticle.appendChild(locationParagraph);

    const creatorParagraph = document.createElement('p');
    creatorParagraph.textContent = `Creator: ${creatorName}`;
    snowmanArticle.appendChild(creatorParagraph);

    const attributeParagraph = document.createElement('p');
    attributeParagraph.textContent = `Attribute: ${specialAttribute}`;
    snowmanArticle.appendChild(attributeParagraph);

    snowmanInfo.appendChild(snowmanArticle);

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.addEventListener('click', editSnowman);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.className = 'next-btn';
    nextButton.addEventListener('click', moveSnowman);

    btnContainer.appendChild(editButton);
    btnContainer.appendChild(nextButton);

    snowmanInfo.appendChild(btnContainer);
    snowmanPreview.appendChild(snowmanInfo);

    clearForm();
  });

  function clearForm() {
    snowmanNameInput.value = '';
    snowmanHeightInput.value = '';
    locationInput.value = '';
    creatorNameInput.value = '';
    specialAttributeSelect.value = '';

    addBtn.disabled = true;
    editBtn.disabled = false;
    nextBtn.disabled = false;
    sendBtn.disabled = false;
  }

  function editSnowman(event) {
    const snowmanInfo = event.target.closest('.snowman-info');
    const snowmanArticle = snowmanInfo.querySelector('article');

    snowmanNameInput.value = snowmanArticle.querySelector('p:nth-child(1)').textContent.split(': ')[1];
    snowmanHeightInput.value = snowmanArticle.querySelector('p:nth-child(2)').textContent.split(': ')[1];
    locationInput.value = snowmanArticle.querySelector('p:nth-child(3)').textContent.split(': ')[1];
    creatorNameInput.value = snowmanArticle.querySelector('p:nth-child(4)').textContent.split(': ')[1];
    specialAttributeSelect.value = snowmanArticle.querySelector('p:nth-child(5)').textContent.split(': ')[1];

    snowmanPreview.removeChild(snowmanInfo);

    addBtn.disabled = false;
    editBtn.disabled = true;
    nextBtn.disabled = true;
    sendBtn.disabled = true;
  }

  function moveSnowman() {
    const snowmanInfo = snowmanPreview.children[0];

    snowList.appendChild(snowmanInfo);
    addSendButton();

    clearForm();
  }

  function addSendButton() {
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.className = 'send-btn';
    sendButton.addEventListener('click', sendSnowman);

    btnContainer.appendChild(sendButton);
    snowList.children[0].appendChild(btnContainer);
  }

  function sendSnowman() {
    const mainElement = document.querySelector('#hero');
    mainElement.parentNode.removeChild(mainElement);

    const body = document.querySelector('body');
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Back';
    backBtn.className = 'back-btn';
    backBtn.addEventListener('click', function () {
      location.reload();
    });

    body.appendChild(backBtn);

    const backImg = document.getElementById('back-img');
    backImg.removeAttribute('hidden');
  }
}
