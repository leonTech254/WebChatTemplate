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

