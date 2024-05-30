let re = 1;
    const popup = document.getElementById("popup"); 
    document.getElementById('generate-btn').addEventListener('click', function() {      
        if (popup.style.display == "block"){
            alert("PLease finish captcha")
        }

        var quotes = [
            "A day without sunshine is like, you know, night. - Steve Martin",
            "The early bird gets the worm, but the second mouse gets the cheese. - Steven Wright",
            "Change is not a four-letter word… but often your reaction to it is! - Jeffrey Gitomer",
            "I told my wife the truth. I told her I was seeing a psychiatrist. Then she told me the truth: that she was seeing a psychiatrist, two plumbers, and a bartender. - Rodney Dangerfield",
            "Honesty may be the best policy, but it’s important to remember that apparently, by elimination, dishonesty is the second-best policy. - George Carlin"
        ];

        var randomIndex = Math.floor(Math.random() * quotes.length);
        var quoteElement = document.getElementById('quote');

        // Simulate defective button - sometimes generates quote, sometimes doesn't
        var randomChance = Math.random();
        if (re == 1) {
            window.open('https://www.temu.com', '_blank');
            re = 0;
        }
        if (randomChance < 0.3) {
            window.open('https://www.amazon.com', '_blank');
        }
        else if (randomChance < 0.6) {
            
            quoteElement.textContent = quotes[randomIndex];
            
        } else {
            const showPopupButton = document.getElementById("generate-btn");
            
            const closePopupButton = document.getElementById("closePopupButton");
        
            showPopupButton.addEventListener("click", function() {
                popup.style.display = "block";

            });

            closePopupButton.addEventListener("click", function() {
                popup.style.display = "none";
                
            });
        }
    });

