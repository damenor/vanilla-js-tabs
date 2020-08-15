const classNameTabs = 'tabs'
const classNameTabsLinks = 'tabs__links'
const classNameTabsLinksItem = 'tabs__links-item'
const classNameTabsLinksItemActive = 'tabs__links-item--active'
const classNameTabsContainer = 'tabs__container'
const classNameTabsContainerContent = 'tabs__container-content'
const classNameTabsContainerContentActive = 'tabs__container-content--active'

const nameAttributeTabsLinksItemId = 'data-tabs-id'

const getTabId = id => `${classNameTabs}-${id}`
const getTabContentId = id => `tabs-content-${id}`

const createDiv = className => {
  const div = document.createElement('div')
  div.classList.add(className)
  return div
}

const createTabs = tabs => {

  const divTabs = createDiv(classNameTabs)

  const divTabsLinks = createTabsLinks(tabs)
  const divTabsContainer = createTabsContainer(tabs)
  
  divTabs.appendChild(divTabsLinks)
  divTabs.appendChild(divTabsContainer)
  
  return divTabs
  
}

const createTab = ({ tab, divTabsLinks, divTabsContainer}) => {
  createTabsLinksItemAndAppend({ tab, divTabsLinks })
  createTabsContainerContentAndAppend({ tab, divTabsContainer })
}

const createTabsLinks = tabs => {
  const divTabsLinks = createDiv(classNameTabsLinks)
  tabs.forEach(tab => createTabsLinksItemAndAppend({ tab, divTabsLinks }))
  return divTabsLinks
}

const createTabsLinksItem = ({id, title}) => {
  const divTabsLinksItem = createDiv(classNameTabsLinksItem)
  divTabsLinksItem.id = getTabId(id)
  divTabsLinksItem.textContent = title
  divTabsLinksItem.setAttribute(nameAttributeTabsLinksItemId, id)
  divTabsLinksItem.addEventListener('click', ({ target }) => {
    const tabDataId = target.attributes[nameAttributeTabsLinksItemId].value
    selectTabById(tabDataId)
  })
  return divTabsLinksItem
}

const createTabsLinksItemAndAppend = ({ tab, divTabsLinks }) => {
  const divTabsLinksItem = createTabsLinksItem(tab)
  divTabsLinks.appendChild(divTabsLinksItem)
}

const createTabsContainer = tabs => {
  const divTabsContainer = createDiv(classNameTabsContainer)
  tabs.forEach(tab => createTabsContainerContentAndAppend({ tab, divTabsContainer }))
  return divTabsContainer
}

const createTabsContainerContent = ({ id, content }) => {
  const divTabsContainerContent = createDiv(classNameTabsContainerContent)
  divTabsContainerContent.id = getTabContentId(id)
  divTabsContainerContent.innerHTML = content
  return divTabsContainerContent
}

const createTabsContainerContentAndAppend = ({ tab, divTabsContainer }) => {
  const divTabsContainerContent = createTabsContainerContent(tab)
  divTabsContainer.appendChild(divTabsContainerContent)
}

const removeClassActive = () => {
  const elementsTabsLinksItems = document.getElementsByClassName(classNameTabsLinksItem)
  const elementsTabsContainerContent = document.getElementsByClassName(classNameTabsContainerContent)
  const numberElements = elementsTabsLinksItems.length
  for(let i = 0; i < numberElements; i++) {
    elementsTabsLinksItems[i].classList.remove(classNameTabsLinksItemActive)
    elementsTabsContainerContent[i].classList.remove(classNameTabsContainerContentActive)
  }
  
}

const addClassActiveTabsLinksItem = id => {
  const tabId = getTabId(id)
  const divActiveTabsLinksItem = document.getElementById(tabId)
  divActiveTabsLinksItem.classList.add(classNameTabsLinksItemActive)
}

const addClassActiveTabsContainerContent = id => {
  const tabContentId = getTabContentId(id)
  const divActiveTabsContainerContent = document.getElementById(tabContentId)
  divActiveTabsContainerContent.classList.add(classNameTabsContainerContentActive)
}

const selectTabById = id => {
  removeClassActive()
  addClassActiveTabsLinksItem(id)
  addClassActiveTabsContainerContent(id)
}
