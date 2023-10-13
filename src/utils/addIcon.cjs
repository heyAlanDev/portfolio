const fs = require('fs')
const readline = require('readline')
const path = require('path')

const iconsFile = path.join(__dirname, '..', 'lib', 'icons.json')

/**
 * Add an icon to the icons.json file.
 *
 * @param {string} svg - The SVG of the icon.
 * @param {number} box - The 'box' property of the icon.
 * @param {string} iconName - The name of the icon.
 */
function addIcon(svg, box, iconName) {
  // Read the icons.json file
  let icons = {}
  try {
    const data = fs.readFileSync(iconsFile, 'utf8')
    icons = JSON.parse(data)
  } catch (err) {
    console.error('Error reading icons.json:', err)
    return
  }

  iconName = iconName.toLowerCase()
  // Add the icon
  icons[iconName] = {
    box: box,
    svg
  }

  // Write the updated file
  fs.writeFileSync(iconsFile, JSON.stringify(icons, null, 2))
}

// Create a command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Ask for user input
rl.question('Enter the SVG of the icon: ', (svg) => {
  rl.question('Enter the "box" property of the icon: ', (box) => {
    rl.question('Enter the name of the icon: ', (iconName) => {
      addIcon(svg, parseInt(box, 10), iconName)
      console.log('Icon successfully added to icons.json.')
      rl.close()
    })
  })
})