/***************************** CREATE ELEMENTS **********************************/

const createDiv = className => {
  const div = document.createElement('div')
  div.className = className
  return div
}

const createCollapseContainerId = id => `${classNameCollapse}-${id}`

const createCollapse = ({id, title, items}) => {
  const divCollapse = createDiv(classNameCollapse)
  const divCollapseHeader = createCollapseHeader(id, title)
  const divCollapseContainer = createCollapseContainer(id, items)
  divCollapse.appendChild(divCollapseHeader)
  divCollapse.appendChild(divCollapseContainer)
  return divCollapse
}

const createCollapseHeader = (id, title) => {
  const divCollapseHeader = createDiv(classNameCollapseHeader)
  divCollapseHeader.setAttribute(nameAttributeCollapseId, id)
  divCollapseHeader.textContent = title
  divCollapseHeader.addEventListener('click', toggleCollapseContainer)
  return divCollapseHeader
}

const createCollapseContainer = (id, items) => {
  const divCollapseContainer = createDiv(classNameCollapseContainer)
  divCollapseContainer.id = createCollapseContainerId(id)
  items.forEach(collapseContainerItem => {
    divCollapseContainer.appendChild(collapseContainerItem)
  })
  return divCollapseContainer
}

/***************************** EVENTS **********************************/

const toggleVisible = (collapseHeader, collapseContainer) => {
  collapseHeader.classList.toggle('visible')
  collapseContainer.classList.toggle('visible')
}

const toggleCollapseContainer = e => {
  const collapseHeader = e.target
  const collapseDataId = collapseHeader.attributes[nameAttributeCollapseId].value
  const collapseId = createCollapseContainerId(collapseDataId)
  const collapseContainer = document.getElementById(collapseId)
  toggleVisible(collapseHeader, collapseContainer)
}
