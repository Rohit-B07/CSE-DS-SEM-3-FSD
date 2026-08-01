
    let names = [];
    let sections = [];

    function Register() {
        let name = document.getElementById("fullName").value;
        let section = document.getElementById("section").value;

        
        names.push(name);
        sections.push(section);

        
        document.getElementById("fullName").value = "";
        document.getElementById("section").value = "";

        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";

        for (let i = 0; i < names.length; i++) {
            resultDiv.innerHTML += 
                (i+1) + ". Name: " + names[i] + "<br>" +
                "Section: " + sections[i] + "<br><br>";
        }
    }