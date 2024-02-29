import { JeanOwnershipChoices } from "./JeanOwnership.js"

const container = document.querySelector("#container")

const render = () => {
    const jeanOwnershipHTML = JeanOwnershipChoices()

    container.innerHTML = jeanOwnershipHTML
}

render()

