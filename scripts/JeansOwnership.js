import { setOwnsBlueJeans } from "./transientState.js"

// Convert string 'true'/'false' to boolean with JSON.parse()

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}


export const JeansOwnershipChoices = () => {
    document.addEventListener("change", handleOwnershipChange)

    let jeansOwnershipHTML = `
        <div class='survey__question'>
        <h2>Do you own a pair of blue jeans?</h2>
            <label class='radio-buttons'>Yes
                <input type='radio' name='ownsJeans' value='true'>
                <span class='checkmark'></span>
            </label>
            <label class='radio-buttons'>No
                <input type='radio' name='ownsJeans' value='false'>
                <span class='checkmark'></span>
            </label>
        </div>`

    return jeansOwnershipHTML
}