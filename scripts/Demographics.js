import { setSocioLocationId } from "./TransientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}

export const DemographicsChoices = async () => {
    const response = await fetch('http://localhost:8088/socioLocations')
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)

    let locationsHTML = `
        <div class='survey__question'>
            <h2>In what type of area do you live?</h2>`
          
    const locationStringArr = locations.map(
        (location) => {
            return `
            <label class='radio-buttons'>${location.label}
            <input type='radio' name='location' value='${location.id}'>
            <span class='checkmark'></span>
            </label>`
        }
        )
        
    locationsHTML += locationStringArr.join("")
    
    locationsHTML += `</div >`
        
    return locationsHTML
}