const form = document.getElementById('myForm');
const updateEl = document.getElementById('update');
const submitBtnEl = document.getElementById('submitBtn');
const closeMsgEl = document.getElementById('closeMsg');
const textDisplayEl = document.getElementById('textDisplay');
const errorParagraph = document.getElementById('errorParagraph');

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        // Form is invalid, prevent default form submission
        event.preventDefault();
        // Show the error paragraph
        errorParagraph.style.display = 'block';
    } else{
        submitBtnEl.addEventListener('click', function() {
            updateEl.style.display = "none";
            // Assuming you have an element with id 'desktopvalid' to show
            // after submit button click.
            dValid.style.display = "grid";
        });
        closeMsgEl.addEventListener('click', function() {
            updateEl.style.display = "grid";
            // after close message button click.
            dValid.style.display = "none";
        });
    }
});
// show the mail in the span
function showText() {
    var inputText = document.getElementById("emailInput").value;
    textDisplayEl.textContent = inputText;
}

