
    var main = document.querySelector('main');
    var title = document.querySelector('.title');
    var titleH2 = document.querySelector('.title h2');
    var senha = document.querySelector('.senha');
    var inputPassword = document.querySelector('.senha input[name=password]');
    var inputButton = document.querySelector('.senha input[name=btnSenha]');
    var suaSenha = document.querySelector('.suaSenha');
    var suaSenhaH2 = document.querySelector('.suaSenha h2');





    


    main.style.width="100%";
    main.style.height="100vh";
    main.style.backgroundPosition="100% 100%";
    main.style.backgroundSize="cover";

    /* */

    title.style.position="absolute";
    title.style.top="20%";
    title.style.left="50%";
    title.style.transform="translateX(-50%)";

    /* */

    titleH2.style.fontFamily="Shadows Into Light";
    titleH2.style.color="white";
    titleH2.style.fontSize="80px";

    /* */

    senha.style.fontFamily="Shadows Into Light";
    senha.style.position="absolute";
    senha.style.top="50%";
    senha.style.left="50%";
    senha.style.transform="translateX(-50%)";

    /* */

    inputPassword.style.padding="15px";
    inputPassword.style.width="300px";
    inputPassword.style.height="50px";
    inputPassword.style.backgroundColor="gray";
    inputPassword.style.color="white";
    inputPassword.style.fontSize="20px";

    /* */

    inputButton.style.fontFamily="Shadows Into Light";
    inputButton.style.cursor="pointer";
    inputButton.style.border="0";
    inputButton.style.width="80px"
    inputButton.style.height="60px";
    inputButton.style.backgroundColor="gray";
    inputButton.style.color="white";
    inputButton.style.fontSize="20px";

    /* */

    suaSenha.style.position="absolute";
    suaSenha.style.color="white";
    suaSenha.style.top="65%";
    suaSenha.style.left="50%";
    suaSenha.style.letterSpacing="3px";
    suaSenha.style.transform="translateX(-50%)";

    /* termina css colocado dinamicamente com JavaScript */





var btnSenha = document.querySelector('.senha input[name=btnSenha]');


btnSenha.addEventListener('click',()=>{
    let password = document.querySelector('.senha input[name=password]').value;

    var separandoLetra = password;
   var arrSenha = separandoLetra.split("");

  
   for(var i =0; i < arrSenha.length; i++){

       if(arrSenha[i] == 'a'){
        arrSenha[i] = '@';

       }

       else if(arrSenha[i] == 'e'){
        var numeroE = Math.floor(Math.random() * 10)
        arrSenha[i] = '&';
       }

       else if(arrSenha[i] == 'i'){
        arrSenha[i] = "!";
       }

       else if(arrSenha[i] == 'o'){
        arrSenha[i] = 0;
       }

       else if(arrSenha[i] == 'u'){
        var numeroU = Math.floor(Math.random() * 10)
        arrSenha[i] = numeroU;
       }

   }


   var complemento = Math.floor(Math.random() * 10);

   var SenhaGerada = arrSenha.join('');
  
   document.querySelector('.suaSenha').innerHTML=
   `
   <h2>`+SenhaGerada+``+complemento+`</h2>
  `;




})
