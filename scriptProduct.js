const renderProduct = () => {
    document.title = "Produto";
    main.innerHTML = `<main id="main">
        <div>
            <div style="min-height: 80vh; background-color: rgb(255, 255, 255);">
                <div style="margin: 0 15%;margin-top: 5rem; background-color: rgb(255, 255, 255);color: rgb(0, 0, 0); display: flex;">
                    <div style="background-color: rgb(255, 255, 255); width: 10vw; display: flex; flex-direction: column; align-items: center;justify-content: space-around;">
                        <div style="background-color: white; width: 10vw; height: 10vh;">
                            <img src="./imgs/LogoApple.png" alt="">
                        </div>
                        <div style="background-color: white; width: 10vw; height: 15vh;">
                            <img src="./imgs/iPhoneFrente.png" alt="">
                        </div>
                        <div style="background-color: white; width: 10vw; height: 15vh;">
                            <img src="./imgs/iPhones.png" alt="">
                        </div>
                        <div style="background-color: white; width: 10vw; height: 15vh;">
                            <img src="./imgs/iPhoneLadinho.png" alt="">
                        </div>
                    </div>
                    <div style="background-color: rgb(255, 255, 255); height: 80vh; width: 40vw;">
                        <div style="display: flex; align-items: center;">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <h4 style="color: rgb(123, 123, 123);">(0)</h4>
                        </div>
                        <img src="./imgs/iPhone15promax.png" alt="">
                        </div>
                    <div style="background-color: rgb(255, 255, 255); height: 80vh; width: 100vw;">
                        <h3>iPhone 15 Apple Pro Max 256GB Titânio Branco, 
                            Tela de 6.7, Câmera de 48MP, iOS - MU783BE/A
                            </h3>
                            <h1>R$13.799,00
                            </h1>
                            <h4>Até 12x por sem juros no cartão por R$ 1.149,91
                            </h4>
                            <p>Com um toque de luxo e alta tecnologia, sinta a leveza de um iPhone
                                feita com material aeroespacial, especial para você.</p>
                        <div style="display: flex; flex-direction: column; gap: .5rem 0;">
                                <button style="font-size: 1.5rem; border-radius: 20px; background-color: #e9810a; padding: .5rem 0; color: white; outline: none; border: none;">Comprar</button>
                                <button style="font-size: 1.5rem; border-radius: 20px; background-color: transparent; padding: .5rem 0; color: #e9810a; outline: none; border: 2px solid #e9810a;">Favoritar</button>
                    </div>
                </div>

            </div>
            <div
                style="min-height: 250vh; background-image: url(./imgs/a.png); background-position: center; background-size: contain;">
            </div>
            <div style="min-height: 100vh; background-color: rgb(255, 255, 255);">
                <div style="margin: 0 15%;margin-top: 5rem; background-color: rgb(255, 255, 255);color: #e9810a;">
                    <div style="display: flex; align-items: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px"
                            fill="#e9810a">
                            <path
                                d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                        <h1 style=" margin: 0;">Informações Técnicas</h1>
                    </div>
                    <img src="./imgs/Group 77.png" alt="">
                    <h1 style="margin: 0; padding-top: 1rem;">Avaliações</h1>
                    <div style="display: flex; align-items: center;color: black; gap: 2vw;">
                        <!-- texto -->
                        <div style="display: flex; align-items: center;">
                            <h1 style="margin: 0;">0.0/</h1>
                            <h2 style="margin: 0;">5</h2>
                        </div>
                        <!-- estrelas -->
                        <div style="display: flex; align-items: center;">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="#e9810a">
                                <path
                                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                            </svg>
                            <h4 style="color: rgb(123, 123, 123);">(0)</h4>
                        </div>
                    </div>
                    <hr>
                    <div style="padding: 0 2rem;">
                        <h3 style="color: rgb(123, 123, 123);">Ainda não há avaliações deste produto.</h3>
                    </div>
                    <hr>
                    <h1 style="margin: 0; padding-top: 1rem; color: black;">Você pode gostar</h1>
                    <div style="display: flex; align-items: center;color: black; gap: 2vw;">
                        <!-- texto -->
                        <div style="display: flex; align-items: center; padding-bottom: 2rem; gap: 2rem;">

                            <div style="min-height: 30vh;width: 15vw; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;border-radius: 30px ;padding: 2rem;">
                                <div style="width: 15vw;height: 15vh;background-image: url(./imgs/fone.png); background-position: center; background-size: contain; background-repeat: no-repeat; background-color: white;">

                                </div>
                                <div>
                                    <p>Fone De Ouvido JBL Tune 520bt - Preto</p>
                                </div>
                                <p style="color: #e9810a;">R$199,00</p>
                                <div style="display: flex; flex-direction: column; gap: .5rem 0;">
                                    <button style="font-size: 1.5rem; border-radius: 20px; background-color: #e9810a; padding: .5rem 0; color: white; outline: none; border: none;">Comprar</button>
                                    <button style="font-size: 1.5rem; border-radius: 20px; background-color: transparent; padding: .5rem 0; color: #e9810a; outline: none; border: 2px solid #e9810a;">Ver mais</button>
                                </div>
                            </div>
                            <div style="min-height: 30vh;width: 15vw; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;border-radius: 30px ;padding: 2rem;">
                                <div style="width: 15vw;height: 15vh;background-image: url(./imgs/controle.png); background-position: center; background-size: contain; background-repeat: no-repeat; background-color: white;">

                                </div>
                                <div>
                                    <p>Controle Sony PS5, Sem Fio - 3005767</p>
                                </div>
                                <p style="color: #e9810a;">R$398,00</p>
                                <div style="display: flex; flex-direction: column; gap: .5rem 0;">
                                    <button style="font-size: 1.5rem; border-radius: 20px; background-color: #e9810a; padding: .5rem 0; color: white; outline: none; border: none;">Comprar</button>
                                    <button style="font-size: 1.5rem; border-radius: 20px; background-color: transparent; padding: .5rem 0; color: #e9810a; outline: none; border: 2px solid #e9810a;">Ver mais</button>
                                </div>
                            </div>
                            <div style="min-height: 30vh;width: 15vw; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;border-radius: 30px ;padding: 2rem;">
                                <div style="width: 15vw;height: 15vh;background-image: url(./imgs/notebook.png); background-position: center; background-size: contain; background-repeat: no-repeat; background-color: white;">

                                </div>
                                <div>
                                    <p>Notebook Gamer Acer Nitro 5 AN515-47-R5SU</p>
                                </div>
                                <p style="color: #e9810a;">R$4499,00</p>
                                <div style="display: flex; flex-direction: column; gap: .5rem 0;">
                                    <button style="font-size: 1.5rem; border-radius: 20px; background-color: #e9810a; padding: .5rem 0; color: white; outline: none; border: none;">Comprar</button>
                                    <button style="font-size: 1.5rem; border-radius: 20px; background-color: transparent; padding: .5rem 0; color: #e9810a; outline: none; border: 2px solid #e9810a;">Ver mais</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </main>`;
    window.scrollTo(0, 0);
};

const main = document.getElementById("main");

document.addEventListener("click", (ev) => {
 if (ev.target.id == "verMais") {
   renderProduct();
 }
});