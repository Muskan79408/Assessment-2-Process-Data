function DisplayData()
{
    // fetch JSON Data
    fetch('scp.json')
    .then(response => response.json())
    .then(

            data => {
                // create a reference to display div
                const displayDiv = document.getElementById("display");
                // iterate through  JSON data, all display code goes inside here.
                data.forEach(
                    jsonObject => {
                        // create our div element 
                        const div = document.createElement('div');
                        div.classList.add('display');
                        const content = `
                            <h1>${jsonObject.subject}</h1>
                            <p><strong>Class: </strong>${jsonObject.Class}</p>
                            <p><strong>Description: </strong>${jsonObject.Description}</p>
                            <img src="${jsonObject.image}" alt="${jsonObject.subject}">
                            <p><strong>Special Containment Procedures: </strong>${jsonObject.SpecialContainmentProcedures}</p>
                            
                            
                            <button onclick="speakText('${jsonObject.Description}')">Read Description</button>
                            
                                           
    </div>
                        `;

                        div.innerHTML = content;
                        displayDiv.appendChild(div);
                    }
                );
            }


    )
    .catch(error => console.error("Error fetching and displaying data: ", error))
}

function speakText(text)
{
    // Create a new SpeechSynthesis Utterance object
    const speech = new SpeechSynthesisUtterance();
    // set the text to be spoken
    speech.text = text;
    // set voice
    speech.voice = speechSynthesis.getVoices()[0];
    // speak the text
    speechSynthesis.speak(speech);
}