export const JeanOwnershipChoices = () => {       
    let jeanOwnershipHTML = `
        <div class='survey'>
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

    return jeanOwnershipHTML
}