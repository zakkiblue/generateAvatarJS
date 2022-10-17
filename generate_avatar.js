    function generateAvatar(text) 
    {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        let foregroundColor = "white";
        let backgroundColor = random_bg_color();

        canvas.width = 200;
        canvas.height = 200;
        // initial name
        let initial = getFirstLetters(text.toUpperCase());

        // Draw background
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw text
        context.font = "bold 100px Assistant";
        context.fillStyle = foregroundColor;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(initial, canvas.width / 2, canvas.height / 2);

        return canvas.toDataURL("image/png");
    }
    function getFirstLetters(str) {
        const word = str.split(' ');
            if(word.length >= 2){
                let firstLetters = word[0][0]+word[1][0];
                return firstLetters;
            }else{
                if (str.length >= 2) {
                    let firstLetters = word[0][0]+word[0][1];
                    return firstLetters;
                }
                let firstLetters = word[0][0];
                return firstLetters;
            }
    }
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        
        return bgColor;
    }
