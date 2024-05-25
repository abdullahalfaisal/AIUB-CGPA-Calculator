body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('AIUB.jpg'); /* Replace 'aiub_background.jpg' with the path to your image */
    background-size: cover;
    background-position: center;
    /*background-position-y: -160px;*/
    background-repeat: no-repeat;
}

.container {
    background: rgba(255,255,255,0.75);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
    text-align: center;
}

.calculator {
    margin-top: 20px;
}

.course, .semester {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

label {
    margin-right: 10px;
}

input {
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

.remove-button {
    background-color: #dc3545;
}

#semester-gpa-result, #overall-cgpa-result {
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
    color: red;
}

.calculator h2 {
    background-color: #007bff;
    color: white;
    padding: 10px;
    margin: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}


/* Add this media query for mobile responsiveness 
@media only screen and (max-width: 200px) {
    .container {
        width: 90%;
    }

    .calculator {
        margin-top: 10px;
       
    }

    .course, .semester {
        flex-direction: column;
        align-items: flex-start; 
    }

    label {
        margin-bottom: 5px;
        
    }

    input {
        margin-bottom: 10px;
        
    }

    button {
        margin-top: 10px;
        
    }

    #semester-gpa-result, #overall-cgpa-result {
        font-size: 1em;
    }
}*/
@media only screen and (max-width: 600px) {
    .container {
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 400px;
    }


}
