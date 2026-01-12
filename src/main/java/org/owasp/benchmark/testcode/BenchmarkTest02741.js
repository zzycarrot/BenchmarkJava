function displayResult() {
    const userInput = document.getElementById("searchInput").value;
    // xss
    document.getElementById("result").innerHTML = 
        "Result:" + userInput;
    // <img src="x" onerror="alert('XSS!')">
}
displayResult();