// @ts-check
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navega até o site
  await page.goto('https://automationexercise.com/');

  // Adiciona um item ao carrinho
  await page.click('text=Add to cart');

  // Espera o carrinho ser atualizado
  await page.waitForSelector('text=Added!');

  await page.click('text=Continue Shopping');

  // Clica no carrinho para ver os detalhes do produto
  await page.click('a[href="/view_cart"]');

  // Verifica se o produto está no carrinho
  const isProductInCart = page.getByTestId('product-1');
  if (isProductInCart) {
    console.log('Produto adicionado ao carrinho com sucesso!');
  } else {
    console.error('Falha ao adicionar produto ao carrinho!');
  }

  // Fecha o navegador
  await browser.close();
})();
