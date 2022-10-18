
# Contributing to My ToolKits PWA!
##  `Steps To Generate PR(Pull Request)`
- First and foremost I would thanks for taking the time to contribute! ❤️  on this repositories 
- Star ⭐ & Fork 🍽️ this repository.
- Follow [pratap360](https://www.github.com/pratap360) get it merged fast.

### Points to Notes
- All types of contributions are encouraged and valued and it will help in  different ways  and details about how this project handles them. Please make sure to read the relevant section before making your contribution. 
- It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉
- Even if you don't have time to give back to the project, you can still show your appreciation in a variety of ways, which would be much appreciated.:
>  Star the project ,  Tweet about it , Refer this project in your project's [readme](https://github.com/pratap360/MyToolKits/blob/main/README.md) <br>
> Mention the project at local meetups and tell your friends/colleagues


## How to Contribute in this repo Read carefully to know what the process is 

### Step to include the tool 👇

### How to add you tools folder inside the  `/tools` folder

- Tools folder → [see more in the image ] </br>
![project structure](https://user-images.githubusercontent.com/52885495/196489686-fe58f385-8d32-4251-81cd-3a081659053a.png)
- For Refer as per your tools must be made in this order [tools name]
    - toolname.html
    - toolname.css (if required)
    - toolname.js (if required)

> Note - make sure your tool must work properly before submiting the pull request make sure you check twice and also stick to the **materialize css** 
> only then only PR will be accepted as a hacktoberfest label otherwise it will consider as invalid.

### Here are the all templates to begin with 

### Check out the All the Templates

tools template (index.html) [Main Home page of the website ]

```html
<div class="col s12 m6 l3" style="padding: 65px 35px;">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
					<!--add the tool img in the /assets/tools-logo/ -->
            <img class="activator" src="./assets/tools-logo/[toolname.png]">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4" title="description">[Name of the tool]
              <i class="material-icons right">menu_open</i>
            </span>
            <p><a href="#" title="upcoming tool in production"><i class="material-icons left">launch</i>Click to
                open</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">[Name of the tool]<i
                class="material-icons right">close</i></span>
            <p>add your basic tool info</p>
          </div>
        </div>
      </div>
```

your tools [tool name].html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[tool name]</title>
  <!-- favicon here  -->
  <link rel="icon" type="image/x-icon" href="../../assets/icons/favicon.ico">
  <!-- styles import -->
  <link rel="stylesheet" href="../../tools/to_do_list/todo-list.css">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <!-- fonts import -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- main logo font and nav bar font import -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">

  <!-- all contents fonts import -->
  <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300&display=swap" rel="stylesheet">

</head>

<body>
  <section class="navbar">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper  teal darken-2">
          <a href="https://pratap360.github.io/MyToolKits/" class="brand-logo">
            <img src="../../assets/main-logo/main-logo.png" alt="brand-logo" id="logo"></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav" class="right hide-on-med-and-down">
            <li><a href="#" onclick="toggleModal();">How to use</a></li>
            <li><a href="../../pages/about-us.html">About us</a></li>
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-trigger hoverable" href="#!" data-target="dropdown1">&nbsp;
                <i class="material-icons right">more_vert</i></a></li>
            <!-- login button -->
            <li><a href="../../pages/login.html" class="waves-effect waves-light deep-purple darken-3 btn hoverable">
                <i class="material-icons left">account_circle</i>Login/Sign up</a>
            </li>

          </ul>
          <!-- dropdown menus -->
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="../../pages/Disclamer.html">Disclamer</a></li>
            <li><a href="../../pages/contact-us.html">Contact Us</a></li>
            <li><a href="../../pages/privacy policy.html">Privacy Policy</a></li>
            <li><a href="../../pages/tnc.html">Terms & Conditions</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- Here is the Mobile side navbar   -->
    <ul class="sidenav" id="mobile-demo">
      <!-- login button -->
      <li><a href="../../pages/login.html" class="waves-effect waves-light deep-purple darken-3 btn-large z-depth-2">
          <i class="material-icons  left">account_circle</i>Login/Sign Up</a></li>
      <li><a href="#" onclick="toggleModal();">How to use</a></li>
      <li><a href="../../pages/about-us.html">About us</a></li>
      <li><a href="../../pages/Disclamer.html">Disclamer</a></li>
      <li><a href="../../pages/contact-us.html">Contact Us</a></li>
      <li><a href="../../pages/privacy policy.html">Privacy Policy</a></li>
      <li><a href="../../pages/tnc.html">Terms & Conditions</a></li>

    </ul>
  </section>
<!-- don't edit the code above this line except title tag for the [tool name]  -->

  <!-- Header is created for particular tool   -->
  <div class="center">
 <!-- change the tool name here -->
    <h2>[Tool name] 
      <a href="#helptodo" class="waves-effect waves-light deep-purple darken-3 btn modal-trigger">
        <i class="material-icons">help</i></a>
    </h2>
  </div>

 <!-- modal for help of tool -->
 <div id="helptodo" class="modal">
    <div class="modal-content">
      <div class="white container">
        <h5>💡 Tip</h5>
        <blockquote>
          <!-- add your short explanation about how to use the tool  -->
        </blockquote>
        <a href="#!" class="modal-close btn deep-purple darken-3 ">
          <i class="material-icons">close</i>
        </a>
      </div>
    </div>
  </div>

<!-- make sure you use the materilize css components  -->
<!-- start your code from here  -->

  

<!-- don't edit the code below this line  -->

 <!-- modal-content for how to use-->
<section class="infomodal">
  <div id="modal3" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4 id="info-modal-heading">How To Use</h4>
      <h5 id="info-modal-content" class="center-on-small-only">So What is PWA</h5>
      <hr>
      <p class="justify">A progressive web application (PWA), commonly known as a progressive web app, is a type of
        application software delivered through the web, built using common web technologies including HTML, CSS,
        JavaScript, and WebAssembly. It is intended to work on any platform that uses a standards-compliant browser,
        including both desktop and mobile devices.</p>
      <p>Since a progressive web app is a type of webpage or website known as a web application, they do not require
        separate bundling or distribution. Developers can just publish the web application online, ensure that it
        meets baseline "installability requirements", and users will be able to add the application to their home
        screen.Publishing the app to digital distribution systems like Apple App Store or Google Play is optional</p>
        <h5 id="info-modal-content" class="center-on-small-only">how to add this web app</h5>
        <hr>
        <p><b>Here are the steps to add</b></p>
        <ol>
          <li>First and formost you will see the download icon on the address bar of your browser if you use chrome </li>
          <img src="../../assets/images/dwl-pwa.jpg" alt="h2u" class="responsive-img"> on dektop or on android mobile
          <img src="../../assets/images/add2home.jpeg" alt="h2u" class="center-on-small-only responsive-img"> 
          <li>Then just click add or download as per on which ever your device is</li>
          <li>Give some time to download </li>
          <li>after your dowload is finished you will get this notification like this</li>
          <img src="../../assets/images/notify.jpeg" alt="h2u" class="center-on-small-only responsive-img"> 
          <li>Now you will see the app icon on your home screen Hurray!</li>
        </ol>
        <p>Now your Good to go</p>
        <h5 id="info-modal-content" class="center-on-small-only">special features</h5>
        <hr>
        <p class="deep-purple-text">
          <i>It can work offline as it is a native web app after net permits it works like as usual</i>
        </p>

        <!-- btn for know more  -->
        <span class="waves-light waves-effect btn deep-purple darken-3">
          <a href="https://web.dev/progressive-web-apps/" target="_blank" class="white-text">To know More Info click me</a>
        </span>
    
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
  </div>
</section>

  <!-- light/dark mode button  -->
  <div class="fixed-action-btn">
    <a class="btn-floating btn-large deep-purple darken-3 hoverable">
      <i class="large material-icons">brightness_4</i>
    </a>
  </div>

  <!-- jquery import -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="../../js/script.js"></script>
  <script src="../../tools/to_do_list/todo-list.js"></script>
</body>
</html>
```

### how to add yourself in about us | contribution  page

contribution template  (about us html)

```html
<div class="col s12 m6 l4" style="padding: 65px 35px;">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
						<!-- add your github profile pic by right click -> copy img address -> paste link here   -->
            <img class="activator" src="https://avatars.githubusercontent.com/./......"> 
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4" title="description">[Github Profile Name]
              <i class="material-icons right">description</i>
            </span>
            <p><a href="https://github.com/" target="_blank"><i class="material-icons left">launch</i>Github</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Short Bio<i
                class="material-icons right">close</i></span><hr>
                <h4 class="deep-purple-text">[Your Name]</h4>
                <div class="chip">[Tech choice 1]</div>
                <div class="chip">[Tech choice 2]</div>
                <div class="chip">[Tech choice 3]</div>
								<!--optional -->
								<div class="chip">[Tech choice 4]</div>
                <p>[short bio]</p>
          </div>
        </div>
      </div>

<!-- add new profile code here  -->
```



## Join The Project Team
Check out the Repo [Discussions tab](https://github.com/pratap360/MyToolKits/discussions)

## Code of Conduct

This project and everyone participating in it is governed by the
[My Toolkits Code of Conduct](blob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior.
