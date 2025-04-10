document.getElementById("chatbot-button").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "flex";
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
});

document.getElementById("send-button").addEventListener("click", function() {
    let userText = document.getElementById("user-input").value.toLowerCase();
    let chatbox = document.getElementById("chatbot-messages");
    // Display user message
    chatbox.innerHTML += `<div><b>You:</b> ${userText}</div>`;

    // Fashion chatbot responses
    const chatbotResponses = [
        {"tag": "greeting",
            "patterns": ["Hi", "Hello", "Good day", "Hey", "Greetings", "I need help"],
            "responses": ["Hi!", "Hello!", "Hey!", "Hi, how can I help you today?"]
        },
        {"tag": "goodbye",
        "patterns": ["Bye", "Thanks for your help", "Thank you", "Have a good day", "See ya", "Goodbye"],
        "responses": ["Bye!", "Have a good day!", "Talk to you later", "Enjoy the rest of your day!"]
        },
        {"tag": "brown halter neck top",
        "patterns": ["Brown halter neck top", "Brown high neck top", "Brown top", "What can I wear with the brown top", "What can I wear with the brown halter neck top", "I need to wear the brown top for an event"],
        "responses": ["You can wear the this top with blue jeans, black heels and a black shoulder bag. This outfit would be best suited with gold jewellery."]
        },
        {"tag": "white top",
        "patterns": ["White top", "What can I wear with the white top", "I need to wear the white top for an event"],
        "responses": ["You could wear this with black or blue fitted jeans and a white closed heel. It qould look nice with small jewllery that is layered."]
        },
        {"tag": "black off the shoulder top",
        "patterns": ["Black off the shoulder top", "Black top", "Black sleeveless top", "What can I wear with the black sleeveless top", "I need to wear the black sleeveless top for an event"],
        "responses": ["This would look nice blue jeans and black heels. If you were to wear jewllery bulky gold jewelleru would pair nicely. In colder months a black trench coat would suit this outfit."]
        },
        {"tag": "brown top",
        "patterns": ["Brown top", "What can I wear with the brown top", "I need to wear the brown top for an event"],
        "responses": ["This would look good with blue jeans, brown heels and a small black bag."]
        },
        {"tag": "brown leather skirt",
        "patterns": ["Brown leather skirt", "Brown skirt", "What can I wear with the brown skirt", "I need to wear the brown skirt for an event"],
        "responses": ["You can wear this with a white fitted crew neck line top and brown leather boot heels. A baby pink bag to match."]
        },
        {"tag": "black long sleeve top",
        "patterns": ["Black long sleeve top",  "What can I wear with the black long sleeve top", "I need to wear the black long sleeve top for an event"],
        "responses": ["This would look nice with light blue jeans and white trainers. It would look nice with a black waist length leather jacket."]
        },
        {"tag": "black jeans",
        "patterns": ["Black jeans", "What can I wear with the black jeans", "I need to wear the black jeans for an event"],
        "responses": ["This would be paired perfectly with red off the shoulder long sleeve top and white trainers. With a bag of your choice."]
        },
        {"tag": "black maxi dress",
        "patterns": ["Black dress", "Black maxi dress", "What can I wear with the black maxi dress", "What can I wear with the black dress", "I need to wear the black maxi dress for an event"],
        "responses": ["This would go well with a black or nude heel and a black bag. Sometimes the simpler the outfit the more timeless"]
        },
        {"tag": "blue jeans",
        "patterns": ["Blue jeans", "What can I wear with the blue jeans", "I need to wear the blue jeans for an event"],
        "responses": ["These jeans would look great with a white fitted top and white trainers. Also a black waist length varsiety jacket would tie this outfit together."]
        },
        {"tag": "fur skirt",
        "patterns": ["Fur skirt", "What can I wear with the fur skirt", "I need to wear the fur skirt for an event"],
        "responses": ["Either wear this with a white or brown short sleeve fitted top. With brown knee high boots and a brown bag to match."]
        },
        {"tag": "brown dress",
        "patterns": ["Brown dress", "What can I wear with the brown dress", "I need to wear the brown dress for an event"],
        "responses": ["You can wear this with baby pink heels and a matching pink shoulder bag. This would also go well with white sandals and a white bag. Wear with small jewllery nothing bulky could layer."]
        },
        {"tag": "black dress",
        "patterns": ["Black dress", "What can I wear with the black dress", "I need to wear the black dress for an event"],
        "responses": ["You could wear this with gold heels and a gold bag if you were to wear this to a dinner. Or a white shoe with a bag colour of your choice. This outfit would be best suited with gold jewellery."]
        },
        {"tag": "white maxi dress",
        "patterns": ["White maxi dress", "White dress", "What can I wear with the white dress", "What can I wear with the white maxi dress", "I need to wear the white dress for an event"],
        "responses": ["This would look ideal with a white or nude bag to match. You can wear it with a clutch bag, the colour should match lip colour."]
        },
        {"tag": "black halter neck dress",
        "patterns": ["Black halter neck dress", "Black high neck dress", "Black dress", "What can I wear with the black halter neck dress", "I need to wear the black halter neck dress for an event"],
        "responses": ["You can wear the this top with blue jeands, black heels and a black shoulder bag. This outfit would be best suited with gold jewellery."]
        },
        {"tag": "black halter neck top",
        "patterns": ["Black halter neck top", "Black high neck top", "Black top", "What can I wear with the black halter neck top", "I need to wear the black halter neck top for an event"],
        "responses": ["You can wear the this top with slim fit blue jeans, a heel colour of your choice (perferably mules). You can pair it with rings or braclets but no necklaces."]
        }
    ];

    // Find response based on input
    let response = "";
    for (let key in chatbotResponses) {
      console.log(chatbotResponses);
      if(chatbotResponses.hasOwnProperty(key)){
        if (userText.includes(chatbotResponses[key].tag)) {
         let rndAnswer = [Math.floor(Math.random() * chatbotResponses[key].responses.length)];
         response = chatbotResponses[key].responses[rndAnswer];
         break;
        }
      }

        //if (userText.includes(key)) {
        //    response = responses[key][Math.floor(Math.random() * responses[key].length)];
        //    break;
        //}
    }

    // Display bot response
    setTimeout(() => {
        chatbox.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    // Clear input field
    document.getElementById("user-input").value = "";
});