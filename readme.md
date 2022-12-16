<h1>Simple web chat ui Template</h1>
<h3 style="text-decoration:underline;">PROCEDURE</h3>

</div>

<span style="color:red;">JS CODE </span> <br> <hr>

<pre>
<code>
 function SwitchScreen(value, tab) {
        let tabs = ['.tab1', '.tab2', '.tab3']
        for (i = 0; i < tabs.length; i++) {
            let screen = document.querySelector(tabs[i]).classList.remove("active-tab")
            if (tab == tabs[i]) {
                let screen = document.querySelector(tabs[i]).classList.add("active-tab")


            }

        }
        let screen = document.querySelector(".screen-container")
        if (value == "main") {

            screen.style.transform = 'translateX(0)'


        } else if (value == "chat") {
            screen.style.transform = 'translateX(-20rem)'


        }
        else if (value == "register") {
            screen.style.transform = 'translateX(-40rem)'


        }
    }



</code>
</pre>

<span style="color:red;">CSS CODE </span> <br> <hr>

<pre>
<code>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .container-wrapper {
        background-color: grey;
        width: 20rem;
        height: 30rem;
        position: relative;
        margin: auto;
        margin-top: .5rem;


    }

    .screen-wrapper {
        width: 20rem;
        height: 100%;
        overflow-x: hidden;

    }

    .screen-container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        position: relative;
        transition: 200ms;


    }

    .screen {
        height: width;
        width: 20rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: larger;
        font-weight: bold;
        text-transform: uppercase;
        transition: 200ms;
    }

    .screen.main {
        background-color: red;

    }

    .screen.register {
        background-color: green;

    }

    .screen.chat {
        background-color: magenta;


    }

    .control-screens {
        position: absolute;
        bottom: 0;


    }

    .control-screens ul {
        display: flex;
        font-size: small;
        justify-content: space-around;
        width: 20rem;
        background-color: aqua;
    }

    .control-screens ul li {
        display: flex;
        flex-direction: column;
        text-align: center;
        cursor: pointer;
        padding-top: 5px;
        padding-bottom: 4px;
        font-weight: bold;


    }

    .screen-container {

        transform: translate(-0rem);
    }

    .active-tab {
        background-color: orangered;
    }

</code>
</pre>
