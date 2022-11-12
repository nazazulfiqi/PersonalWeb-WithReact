import { useState } from "react"

function About() {
    const [judulSection, setJudulSection] = useState("About")
    const [textAbout, setTextAbout] = useState([`“The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.”`,"I am 5th semester's information system student of STMIK Jakarta STI&K, I am able to work for ", "individual or in a team.","Learn how to ","work fast, thorough and concepted", "is the things I prioritize. I am 20 years old and even though i'm still young, but i have learn a view skills which usefull in this 4.0 era. Like ", "Graphic Design, UI/UX Design, Frontend Web, MS Office ", "and another programming skills."])
    return(
         <>
             <section id="about">
        <div className="main-width">
            <div className="container container-about text-center">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                <h1>{judulSection}</h1>
                <p className="quotes p-0"><i>{textAbout[0]}</i></p>
                <p className="description">{textAbout[1]}<span>{textAbout[2]}</span>{textAbout[3]}<span>
                    {textAbout[4]}</span>{textAbout[5]}<span>{textAbout[6]}</span>{textAbout[7]}
                </p>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>

    )
}

export default About