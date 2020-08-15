const divContainer = document.getElementsByClassName('container')[0]

const textSmall = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!'

const textMiddle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa quod voluptatum laborum! Doloribus nulla optio laborum ea ad minus quibusdam minima delectus architecto! Blanditiis repellendus distinctio debitis doloribus necessitatibus!'

const textBig = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa quod voluptatum laborum! Doloribus nulla optio laborum ea ad minus quibusdam minima delectus architecto! Blanditiis repellendus distinctio debitis doloribus necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa quod voluptatum laborum! Doloribus nulla optio laborum ea ad minus quibusdam minima delectus architecto! Blanditiis repellendus distinctio debitis doloribus necessitatibus!'

/***************************** TABS **********************************/

const getTextContent = number => {
  switch(number) {
    case 0: return textSmall 
    case 1: return textMiddle 
    case 2: return textBig 
    default: return textMiddle 
  }
}

const createDataTab = (id, title) => ({
  id,
  title,
  content: `
  <p class="content">${getTextContent(Math.floor(Math.random() * 3))}</p>
  `
})

const classNameTabsLinksItemAddTab = 'tabs__links-item-add-tab'
const createButtonAddTab = () => {
  const divTabsLinks = document.getElementsByClassName(classNameTabsLinks)[0]
  const divTabsLinksItemAddTab = createDiv(classNameTabsLinksItemAddTab)
  divTabsLinksItemAddTab.addEventListener('click', addNewTab)
  divTabsLinksItemAddTab.textContent = 'Add Tab'
  divTabsLinks.insertBefore(divTabsLinksItemAddTab, divTabsLinks.firstChild)
}

const addNewTab = () => {
  const divTabsLinks = document.getElementsByClassName(classNameTabsLinks)[0]
  const divTabsContainer = document.getElementsByClassName(classNameTabsContainer)[0]
  const tabId = divTabsLinks.childNodes.length - 1
  const tab = createDataTab(tabId, `Tab ${tabId}`)
  createTab({ tab, divTabsLinks, divTabsContainer })

  if (tabId === 15) {
    const divTabsLinksItemAddTab = document.getElementsByClassName(classNameTabsLinksItemAddTab)[0]
    divTabsLinksItemAddTab.classList.add('hidden')
  }

}

const initApp = () => {
  const numberTabs = 4
  let tabs = []
  for(let i = 0; i < numberTabs; i++) {
    const dataTab = createDataTab(i, `Tab ${i}`)
    tabs = [...tabs, dataTab]
  }

  const divTabs = createTabs(tabs)

  document.body.appendChild(divTabs)

  createButtonAddTab()

  selectTabById(0)
}


/***************************** INITIAL APP **********************************/

initApp()