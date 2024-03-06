export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    // Iterate the submissions -- using map() -- and create some <section> representations
    const submissionsArr = submissions.map(
        (submission) => {
            return `
            <section class="submission">
                <div class="submission__response">
                    <span class="question">Owns Jeans?</span>
                    <span class="answer"> ${submission.ownsBlueJeans}</span>
                </div>
                <div class="submission__response">
                <span class="question">Regional Area?</span>
                <span class="answer">${submission.socioLocationId}</span>
                </div>
            </section>`
        }
    )
    
    submissionListHTML += submissionsArr.join("")

    submissionListHTML += `</article>`

    // Return the HTML string
    return submissionListHTML
}