// working of generate qr btn 
const b = document.querySelector(".image-container");
let btn = document.querySelector("#generate");
let qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", () => {
    let user_input = document.querySelector("#input_text");
    if(user_input.value != "") {
        if(qr_code_element.childElementCount == 0){
            generate(user_input);
        } else{
            qr_code_element.innerHTML = "";
            generate(user_input);
        }
    } else {
        alert("Please input something");
        qr_code_element.style = "display: none";
    }
})

function generate(user_input){
    // adding animation
    gsap.fromTo
    (
        '.qr-code',
        // from effects
        {opacity:0,
            x:-30
        },
        // to effects
        {
            opacity:1,
            x:0,
            ease: 'elastic.out(1.2, 0.45)',
            duration: 6
        }
        // you can patch in one line :)
        // did this for ones better understnding
    );
    qr_code_element.style = "";

    var qrcode = new QRCode(qr_code_element, {
        text: `${user_input.value}`,
        width: 220, // default 128
        height: 220,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    console.log(qrcode);

    // this code create the dwl btn below the qr code 
    let download = document.createElement("button");
    qr_code_element.appendChild(download);

    // Saving qr imgae in devices
    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_code.png");
    download_link.innerText = "Download";

    download.appendChild(download_link);


    let qr_code_img = document.querySelector(".qr-code img");
    let qr_code_canvas = document.querySelector("canvas");
    // picking out the downlaod button
    let download_button = document.querySelector('.qr-code button');

    if(qr_code_img.getAttribute("src") == null){
    // adding animation to the button
        gsap.fromTo
        (
            download_button,
            {
                opacity:0,
                y:-5,
                x: 10
            },
            {
                delay:.6,
                y:0,
                x:0,
                opacity:1,
                duration:1.2
            }
        )

        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
        }, 300);
    }
    // what happens after click?
    // i think i should remove the qr
    download_button.onclick = () =>{
    // hiding qr
        gsap.to
        (
            qr_code_img,
            {
                opacity:0,
                y:0,
                x:-9,
                duration:1.3,
                ease: "slow(0.3, 0.7, true)"
            }
        )
    // hiding download button
        gsap.to
        (
            download_button,
            {   
                opacity:0,
                delay:0.3,
                duration:.9,
                y:0,
                x:-30,
                ease: "slow(0.3, 0.7, true)"
            }
        )
        setTimeout( ()=>
            gsap.to((download_button),{x:-350})
            ,1500)

        setTimeout( ()=>
            gsap.to((qr_code_img),{x:-300})
            ,1500)
    }
    
}

// function download(qr_code_element)
    // function save() {
    //   let link = document.createElement("a");
    //   link.download = "download.png";
    //   link.href = canvas.toDataURL();
    //   link.click();
    // }