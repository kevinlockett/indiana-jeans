import { saveSurveySubmission } from "./TransientState.js"

const handleSurveySubmission = (clickEvent) => {
    if (clickEvent.target.id === "submitSurvey") {
        saveSurveySubmission()
    }
}


export const SubmitSurvey = () => {
    document.addEventListener("click", handleSurveySubmission)

    return `
        <div class='survey__submit'>
            <button class='btn btn--secondary' id='submitSurvey'>
                <span>Submit Survey</span>
                <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" stroke-width="2"> 
                    <!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.-->
                    <path class="fa-secondary" opacity=".4" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L224 402.7V389.4L380.7 185.8c5.2-6.7 4.2-16.4-2.3-21.9s-16.1-5.1-22 1.1L178.8 350.6l-14.1 14.1c-3 3-4.7 7.1-4.7 11.3l-28.3-11.8-112-46.7C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                    <path class="fa-primary" d="M380.7 185.8c5.1-6.7 4.2-16.2-2.1-21.8s-15.9-5.3-21.9 .7l-179 179-13 13c-3 3-4.7 7.1-4.7 11.3v8 56 48c0 13.2 8.1 25 20.3 29.8s26.2 1.6 35.2-8.1L284 427.7l-60-25V389.4L380.7 185.8z"/>
                </svg>
            </button>
        </div>`
}


 