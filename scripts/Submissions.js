export const SubmissionList = async () => {
    
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    const data = await fetch("http://localhost:8088/socioLocations")
    const socioLocations = await data.json()

    console.log(socioLocations)

    let submissionListHTML = `<article>`    
    
    const submissionsArr = submissions.map(
        (submission) => {
            for (const socioLocation of socioLocations)
                if (submission.socioLocationId === socioLocation.id)
                    {
                        return `
                        <section class="submission">
                            <div class="submission__response">
                                <span class="question">Owns Jeans?</span>
                                <span class="answer"> ${submission.ownsBlueJeans}</span>
                            </div>
                            <div class="submission__response">
                            <span class="question">Regional Area?</span>
                            <span class="answer">${socioLocation.label}</span>
                            </div>
                        </section>`
                    }
        }
    )
    
    submissionListHTML += submissionsArr.join("")

    submissionListHTML += `</article>`

    // Return the HTML string
    return submissionListHTML
}