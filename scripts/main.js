import { DemographicsChoices } from "./Demographics.js"
import { PageFooter } from "./Footer.js"
import { JeansOwnershipChoices } from "./JeansOwnership.js"
import { SubmissionList } from "./Submissions.js"
import { SubmitSurvey } from "./SubmitSurvey.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeansOwnershipHTML = JeansOwnershipChoices()
    const locationsHTML = await DemographicsChoices()
    const submitButtonHTML = SubmitSurvey()
    const submissionListHTML = await SubmissionList()
    const footerHTML = PageFooter()

    container.innerHTML = `
        ${ jeansOwnershipHTML }
        ${ locationsHTML }
        ${ submitButtonHTML }
        ${ submissionListHTML }
        ${ footerHTML }`
    
}

document.addEventListener("newSubmissionCreated", render)

render()