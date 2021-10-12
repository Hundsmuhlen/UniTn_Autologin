
function click(){

    console.log("Plugin activated!");
    console.log(document.URL);
    let URL = document.URL.toLowerCase();

    if (URL.includes("://didatticaonline.unitn.it/dol/loginunitn.php?errorcode=4")) {
        document.getElementById("btn-login-unitn-it").click();
    } else if (URL.includes("://cp.net.icts.unitn.it/aruba-login-new/index.php?cmd=login")) {
        document.getElementById("clsubmit").click();
    } else if (URL.includes("://webapps.unitn.it/gestionecorsi")) {
        let logInBtn = document.querySelector("a[href='/GestioneCorsi/IndexAuth']");
        console.log(logInBtn.textContent);
        if (logInBtn.textContent == "Login"){
            logInBtn.click()
        }
    } else if (URL.includes("://didatticaonline.unitn.it/dol")){
        // Case: you come back to a tab and can only see it as a guest
        let logInBtn = document.querySelector("a[href='https://didatticaonline.unitn.it/dol/login/index.php']");
        console.log(logInBtn.textContent);
        if (logInBtn.textContent == "Login"){
            logInBtn.click()
        }
    } else {
        document.getElementById("btnAccedi").click();
    }
    //await new Promise(r => setTimeout(r, 10));
}
click()
