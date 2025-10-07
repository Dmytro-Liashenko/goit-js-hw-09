
const formData = { email: "", message: "" }

const form = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";
form.addEventListener("submit", onHandlerSubmit)
form.addEventListener("input", onHandlerInput);
populateForm()
function onHandlerInput(event){
    const fieldName = event.target.name
    const fieldValue = event.target.value
    formData[fieldName] = fieldValue
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}
function populateForm(){
    const messageUser = localStorage.getItem(STORAGE_KEY);
    if(!messageUser){
        return
    }
    const parse = JSON.parse(messageUser)

    if(parse.email){
        form.querySelector(`input[name="email"]`).value = parse.email
        formData.email = parse.email
    }
    if(parse.message){
        form.querySelector(`textarea[name="message"]`).value = parse.message;
        formData.message = parse.message
    }
}
function onHandlerSubmit(event){
event.preventDefault();
const trimmedEmail = formData.email.trim();
const trimmedMessage = formData.message.trim();
if(!trimmedEmail || !trimmedMessage){
    alert("Fill please all fields");
    return
}
console.log({
        email: trimmedEmail,
        message: trimmedMessage
    });
event.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
formData.email = "";
formData.message = "";
}