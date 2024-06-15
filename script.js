const renderizarFinalizacao = () => {
  document.title = "Finalizar";
  main.innerHTML = `
              <div class="main">
          <div class="checkout-form">
              <div class="finalcompra">
                  <img src="./imgs/carrinho-compra-icon.png" class="carrinhocompra" alt="Carrinho Icon">
                  <h2><span class="mod1">FINALIZAÇÃO DE</span> COMPRA</h2>
              </div>
              <div class="bordertop">
              </div>
              <h3>Contato</h3>
              <div class="input-group">
                  <input type="email" id="email" name="email" placeholder="Email">
              </div>
              <div class="input-group">
                  <input type="tel" id="phone1" name="phone1" placeholder="Telefone 1">
                  <input type="tel" id="phone2" name="phone2" placeholder="Telefone 2 (opcional)">
              </div>
              <div class="checkbox">
                  <input type="checkbox" id="promo" name="promo">
                  <label for="promo"><span class="frasecheckbox">Me envie informações sobre promoções, descontos e
                          notícias</span></label>
              </div>
              <h3>Endereço</h3>
              <div class="input-group2">
                  <input type="text" id="name" name="name" placeholder="Nome">
                  <input type="text" id="surname" name="surname" placeholder="Sobrenome">
              </div>
              <div class="input-group3">
                  <input type="text" id="street" name="street" placeholder="Rua - número - Bairro">
              </div>
              <div class="input-group4">
                  <input type="text" id="cpf" name="cpf" placeholder="CPF">
              </div>
              <div class="input-group5">
                  <input type="text" id="cep" name="cep" placeholder="CEP">
                  <input type="text" id="state" name="state" placeholder="Estado">
                  <input type="text" id="city" name="city" placeholder="Cidade">
              </div>
              <h3>Meio de Pagamento</h3>
              <p class="textcripto">Todos nossos pagamentos são criptografados com alta segurança</p>
              <div class="grouppay">
                  <div class="grouppay1">
                      <div class="input-card">
                          <label>
                              <input type="radio" name="payment" value="credit-card"
                                  onclick="showPaymentMethod('credit-card')">
                              Cartão de crédito
                          </label>
                      </div>
                      <img src="./imgs/credit-card-icon.png">
                  </div>
                  <div class="grouppay2">
                      <div class="grouppay3">
                          <div class="input-group6">
                              <input type="text" id="numcard" name="numcartao" placeholder="Número do cartão">
                          </div>
                          <div class="input-group7">
                              <input type="text" id="validade" name="validade" placeholder="Validade (00/00)">
                              <input type="text" id="cod" name="cod" placeholder="Código">
                          </div>
                          <div class="input-group8">
                              <input type="text" id="namecard" name="namecard" placeholder="Nome no cartão">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="order-summary">
              <div class="orderspace">
                  <div class="product1">
                      <div class="titleimg">
                          <img src="./imgs/iphone-15-pro-max.png" alt="iPhone 15 Pro Max">
                          <p class="titleprod">iPhone 15 Pro Max Apple MU713BE/A</p>
                      </div>
                      <div class="price">
                          <p class="pricestyle">R$ 13.799,00</p>
                      </div>
                  </div>
                  <div class="product2">
                      <div class="titleimg">
                          <img src="./imgs/jbl-tune-520bt.png" alt="Fone de Ouvido JBL">
                          <p class="titleprod">Fone De Ouvido JBL Tune 520bt - Preto</p>
                      </div>
                      <div class="price">
                          <p class="pricestyle">R$ 199,00</p>
                      </div>
                  </div>
  
                  <div class="resumoleft1">
                      <div class="subtotal">
                          <p class="subtax">Subtotal</p>
                      </div>
                      <div class="subtotal1">
                          <p class="subtax">R$ 13.998,00</p>
                      </div>
                  </div>
  
                  <div class="resumoleft2">
                      <div class="delivery">
                          <p class="subtax">Taxa de entrega</p>
                      </div>
                      <div class="delivery1">
                          <p class="subtax">GRÁTIS</p>
                      </div>
                  </div>
  
                  <div class="resumoleft3">
                      <div class="total">
                          <p class="totalstyle">Total</p>
                      </div>
                      <div class="total1">
                          <p class="totalstyle">R$ 13.998,00</p>
                      </div>
                  </div>
  
                  <div class="finalbutton">
                      <button>FINALIZAR COMPRA</button>
                  </div>
              </div>
          </div>
      </div>
     
     `;
};

const main = document.getElementById("main");

document.addEventListener("click", (ev) => {
  if (ev.target.id == "comprarIphone") {
    console.log("botao");
    renderizarFinalizacao();
  }
});

main.innerHTML = `<!-- Banner -->
        <section style="width: 100%;">
            <div class="image-container">
                <img src="imgs/testando.png  " alt="PlayStation 5" class="image1">
                <div class="text-overlay1">
                    <h2>Ouça, sinta, vibre</h2>
                    <h2>Com o melhor som</h2>
                    <p>Sinta a força dos games em um só console</p>
                    <button>Veja mais</button>
                </div>
            </div>
        </section>

        <!-- Categorias -->
        <section class="categories">
            <div class="container">
                <h2>Categorias</h2>
                <div class="category-list">
                    <div class="category-item">Consoles</div>
                    <div class="category-item">Smartphones</div>
                    <div class="category-item">Headphones</div>
                    <div class="category-item">Notebooks</div>
                </div>
            </div>
        </section>

        <!-- Produtos em Destaque -->
        <section class="featured-products">
            <div class="container">
                <h2>Produtos em Destaque</h2>
                <div class="product-list">
                    <div class="product-item">
                        <img src="imgs/iphone.png" alt="Produto 1" class="product-image">
                        <h2 class="product-title"> iPhone 15 Pro Max Apple MU7H3BE/A</h2>
                        <p class="product-price">R$ 13.799,00</p>
                        <button class="buy-button" id="comprarIphone">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                    <div class="product-item">
                        <img src="imgs/fone.png" alt="Produto 2" class="product-image">
                        <h2 class="product-title">Fone De Ouvido JBL Tune 520bt - Preto</h2>
                        <p class="product-price">R$ 199,00</p>
                        <button class="buy-button">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                    <div class="product-item">
                        <img src="imgs/notebook.png" alt="Produto 3" class="product-image">
                        <h2 class="product-title">Notebook Gamer Acer Nitro 5 AN515-47-R5SU</h2>
                        <p class="product-price">R$ 4.499,00</p>
                        <button class="buy-button">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                    <div class="product-item">
                        <img src="imgs/controle.png" alt="Produto 4" class="product-image">
                        <h2 class="product-title">Controle Sony PS5, Sem Fio - 3005767</h2>
                        <p class="product-price">R$ 398,99</p>
                        <button class="buy-button">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Segundo Banner -->
        <section>
            <div class="container">
                <div class="image-container">
                    <img src="imgs/playstation.png" alt="PlayStation 5" class="image2">
                    <div class="text-overlay2">
                        <h2>PlayStation 5</h2>
                        <p>Sinta a força dos games em um só console</p>
                        <button>Veja mais</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Produtos em Promoção -->
        <section class="featured-products">
            <div class="container">
                <h2>Produtos em Promoção</h2>
                <div class="product-list">
                    <div class="product-item">
                        <img src="imgs/fone.png" alt="Produto 2" class="product-image">
                        <h2 class="product-title">Fone De Ouvido JBL Tune 520bt - Preto</h2>
                        <p class="product-price">R$ 199,00</p>
                        <button class="buy-button">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                    <div class="product-item">
                        <img src="imgs/iphone.png" alt="Produto 1" class="product-image">
                        <h2 class="product-title"> iPhone 15 Pro Max Apple MU7H3BE/A</h2>
                        <p class="product-price">R$ 13.799,00</p>
                        <button class="buy-button">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                    <div class="product-item">
                        <img src="imgs/controle.png" alt="Produto 4" class="product-image">
                        <h2 class="product-title">Controle Sony PS5, Sem Fio - 3005767</h2>
                        <p class="product-price">R$ 398,99</p>
                        <button class="buy-button">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                    <div class="product-item">
                        <img src="imgs/notebook.png" alt="Produto 3" class="product-image">
                        <h2 class="product-title">Notebook Gamer Acer Nitro 5 AN515-47-R5SU</h2>
                        <p class="product-price">R$ 4.499,00</p>
                        <button class="buy-button">COMPRAR</button>
                        <button class="more-button">VER MAIS</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Beneficios -->
        <section>
            <div class="benefits">
                <div class="benefit">
                    <img src="imgs/caixa.png" alt="Frete Grátis">
                    <div class="text">
                        <h2>FRETE GRÁTIS</h2>
                        <p>Para qualquer compra acima de R$ 200</p>
                    </div>
                </div>
                <div class="benefit">
                    <img src="imgs/roda.png" alt="Garantia 7 Dias">
                    <div class="text">
                        <h2>GARANTIA 7 DIAS</h2>
                        <p>Você tem 7 dias para pedir seu dinheiro de volta</p>
                    </div>
                </div>
                <div class="benefit">
                    <img src="imgs/suporte.png" alt="Suporte 24/7">
                    <div class="text">
                        <h2>SUPORTE 24/7</h2>
                        <p>Tire sua dúvida conosco a qualquer momento</p>
                    </div>
                </div>
                <div class="benefit">
                    <img src="imgs/escudo.png" alt="Segurança">
                    <div class="text">
                        <h2>SEGURANÇA</h2>
                        <p>Garantimos pagamento com segurança</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Logos -->
        <section>
            <div class="logos">
                <div class="logo">
                    <img src="imgs/jbl.png" alt="jbl">
                </div>
                <div class="logo">
                    <img src="imgs/logoplay.png" alt="play">
                </div>
                <div class="logo">
                    <img src="imgs/acer.png" alt="acer">
                </div>
                <div class="logo">
                    <img src="imgs/apple.png" alt="apple">
                </div>
            </div>
        </section>`;

