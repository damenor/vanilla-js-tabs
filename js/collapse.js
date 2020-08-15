/***************************** CREATE ELEMENTS **********************************/

const createDiv = className => {
  const div = document.createElement('div')
  div.className = className
  return div
}

const createCollapse = ({id, title, items}) => {
  const divCollapse = createDiv('collapse')
  const divCollapseHeader = createCollapseHeader(id, title)
  const divCollapseContainer = createCollapseContainer(id, items)
  divCollapse.appendChild(divCollapseHeader)
  divCollapse.appendChild(divCollapseContainer)
  return divCollapse
}

const createCollapseHeader = (id, title) => {
  const divCollapseHeader = createDiv('collapse__header')
  divCollapseHeader.setAttribute('data-collapse-id', id)
  divCollapseHeader.textContent = title
  divCollapseHeader.addEventListener('click', toggleCollapseContainer)
  return divCollapseHeader
}

const createCollapseContainer = (id, items) => {
  const divCollapseContainer = createDiv('collapse__container')
  divCollapseContainer.id = `collapse-${id}`
  items.forEach(collapseContainerItem => {
    divCollapseContainer.appendChild(collapseContainerItem)
  })
  return divCollapseContainer
}

/***************************** EVENTS **********************************/

const toggleCollapseContainer = e => {
  const collapseId = e.target.attributes['data-collapse-id'].value
  const collapseContainer = document.getElementById(`collapse-${collapseId}`)
  collapseContainer.classList.toggle('visible')
  e.target.classList.toggle('visible')
}
