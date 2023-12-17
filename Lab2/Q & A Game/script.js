
function qa(params) {

    userName = prompt("Hi, Say Your Name")
    userAge = prompt("How old are you ?")
    
    if (userAge <= 17) {
        alert("Sorry, You're child")
    } else if (userAge > 18) {
        alert("Good enough to complete!")

        answer = prompt("Reply by yes or No | Do you think programming is good for you ?")
        
        if (answer == "yes") {
            alert(`Sorry ${userName} you have mental issues`)
        } else if (answer == "No") {
        
            alert("Mee too , thank you for telling us , I will give you a somthing ")
            reply = prompt("advise | info | thanks")
        
            if (reply == "advise") {
                alert("The secret of getting ahead is getting started")
        
            } else if (reply == "info") {
                alert("The human heart beats about 100,000 times a day! That means your ticker will beat around 36,500,000 times in a year. Count them if you don't believe us! Yes, we'll wait. 🤷‍♂️")
        
            } else if (reply == "thanks") {
                alert("thank you " + userName)
        
            } else {
                alert("😒😒😒")
            }
        } else {
            alert("I said reply by yes or no")
        }
    } else {
        alert("start again and send your age")
    }

}