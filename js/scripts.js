/***************************** COLLAPSES **********************************/

const containerCollapses = document.getElementById('container-collapses')

const getCollapseData = id => ({id, title: `Collapse ${id}`, items: [ createCollapseContainerItem() ]})

const createCollapseContainerItem = () => {
  const divCollapseContainerItem = createDiv('collapse__container-item')
  divCollapseContainerItem.textContent = 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.'
  return divCollapseContainerItem
}

const createAndAppendCollapse = collapseData => {
  const collapse = createCollapse(collapseData)
  containerCollapses.appendChild(collapse)
}

const createAllCollapses = () => {
  const numberCollapses = 3
  for(let i = 0; i < numberCollapses; i++) {
    const collapseData = getCollapseData(i)
    createAndAppendCollapse(collapseData)
  }
}


/***************************** FLOATBUTTON **********************************/

const buttonAddCollapse = document.getElementById('add-collapse')
const buttonRemoveAll = document.getElementById('remove-all')

const addEventsClick = () => {
  
  buttonAddCollapse.addEventListener('click', () => {
    const idCollapse = document.getElementsByClassName('collapse').length
    const collapseData = getCollapseData(idCollapse)
    createAndAppendCollapse(collapseData)
  })

  buttonRemoveAll.addEventListener('click', () => {
    for(let i = containerCollapses.children.length - 1; i >= 0; i--) {
      containerCollapses.removeChild(containerCollapses.children[i])
    }
  })

}

/***************************** INITIAL APP **********************************/

createAllCollapses()
addEventsClick()
