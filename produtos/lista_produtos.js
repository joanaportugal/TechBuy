function modelo_computador(
  titulo,
  link_imagem,
  preco,
  preco_promocao,
  autonomia,
  cpu,
  nr_cores,
  mRam,
  armazenamento,
  grafica,
  dimensao_ecra
) {
  return {
    titulo,
    link_imagem,
    preco,
    preco_promocao,
    autonomia,
    cpu,
    nr_cores,
    mRam,
    armazenamento,
    grafica,
    dimensao_ecra,
  };
}

function modelo_telemovel(
  titulo,
  link_imagem,
  preco,
  preco_promocao,
  dimensao_ecra,
  memoria_interna,
  memoria_ram,
  resolucao_camera_traseira,
  resolucao_camera_frontal
) {
  return {
    titulo,
    link_imagem,
    preco,
    preco_promocao,
    dimensao_ecra,
    memoria_interna,
    memoria_ram,
    resolucao_camera_traseira,
    resolucao_camera_frontal,
  };
}

let computadores_lista = [
  modelo_computador(
    "Portátil Gaming MSI GL65 Leopard 10SEK-035PT",
    "https://www.worten.pt/i/a1cf477f1a4cf74bb9d64f4d94702ef5e85dbbda.jpg",
    1749.99,
    0,
    "51 Wh",
    "Intel Core i7-10750H",
    "Hexa Core",
    "8 GB",
    "1 TB",
    "Nvidia GeForce RTX 2060",
    "15.6''"
  ),
  modelo_computador(
    "Microsoft Surface Laptop 3",
    "https://www.worten.pt/i/5af054eb739aab49016cde020becdf2674a444e7.jpg",
    1399,
    0,
    "Até 11.5 horas",
    "AMD Ryzen 5 3580U",
    "Quad Core",
    "8 GB",
    "128 GB",
    "AMD Radeon Vega 9",
    "15'''"
  ),
  modelo_computador(
    "Computador Portátil Gaming Lenovo Legion 5 15ARH05H",
    "https://static.fnac-static.com/multimedia/Images/PT/NR/54/2f/64/6565716/1540-1.jpg",
    1099.99,
    999.99,
    "Até té 5.7 horas",
    "AMD Ryzen 5 4600H",
    "Hexa Core",
    "8 GB",
    "512 GB",
    "Nvidia GeForce RTX 2060",
    "15.6''"
  ),
  modelo_computador(
    "Computador Lenovo IdeaPad 5 14ITL05",
    "https://static.fnac-static.com/multimedia/Images/PT/NR/db/e5/5e/6219227/1540-1.jpg",
    1299.99,
    1199.99,
    "11 horas",
    "Intel Core i7-1165G7",
    "Quad Core",
    "16 GB",
    "1 TB",
    "NVIDIA GeForce MX450",
    "14''"
  ),
  modelo_computador(
    "Portátil ACER Aspire 3 A315-23-R1JM",
    "https://www.worten.pt/i/d149ad790eef8dc36c667e43003bf67edaea1aba.jpg",
    549.99,
    0,
    "7 horas",
    "AMD Ryzen 5 3500U",
    "Quad Core",
    "8 GB",
    "GB",
    "AMD Radeon Vega 8",
    "15.6''"
  ),
  modelo_computador(
    "Microsoft Surface Book 3",
    "https://www.worten.pt/i/73674b2e6f577ead511902f7108daf9381e4e675.jpg",
    3199,
    2399,
    "Até 17.5 horas",
    "Intel Core i7-1065G7",
    "Quad Core",
    "32 GB",
    "512 GB",
    "NVIDIA GeForce GTX 1660Ti",
    "15''"
  ),
  modelo_computador(
    "Portátil ACER Aspire 3 A315-57G-5076",
    "https://www.worten.pt/i/b9e017cbc7492dab9c25703e65ef67fa56747d59.jpg",
    699.99,
    0,
    "7 horas",
    "Intel Core i5-1035G1",
    "Quad Core",
    "8 GB",
    "512 GB",
    "NVIDIA GeForce MX330",
    "15.6''"
  ),
  modelo_computador(
    "Portátil ASUS E410MA-N4DHDBO2",
    "https://www.worten.pt/i/9e6151cf7588162173c0c46b0f37f5d4393f5f97.jpg",
    299.99,
    0,
    "42WHrs",
    "Intel Celeron N4020",
    "Dual Core",
    "4 GB",
    "64 GB",
    "Intel UHD Graphics 600",
    "14''"
  ),
  modelo_computador(
    "Portátil Gaming HP OMEN 15-ek0006np",
    "https://www.worten.pt/i/a15c93f5d76dda0209fdb998186f9f5d5095e7ed.jpg",
    1399,
    1299,
    "Até 5,30 horas",
    "Intel Core i7-10750H",
    "Hexa Core",
    "16 GB",
    "512 GB",
    "NVIDIA GeForce GTX 1660 Ti",
    "15.6''"
  ),
  modelo_computador(
    "Pack ACER Nitro 5 AN515-54-58BS (Portátil Gaming + Rato + Auscultadores)",
    "https://www.worten.pt/i/002a3eda100842d37f43943cc59f522ca170f853.jpg",
    1097,
    0,
    "8 horas",
    "Intel Core i5-9300H",
    "Quad Core",
    "8 GB",
    "256 GB",
    "NVIDIA GeForce RTX 2060",
    "15.6''"
  ),
];

let telemoveis_lista = [
  modelo_telemovel(
    "Smartphone HUAWEI P Smart Pro - Preto",
    "https://www.worten.pt/i/c9fae4335f36921c9a4482670d5bf21bf1f39a45.jpg",
    309.99,
    249.99,
    "6.59''",
    "128 GB",
    "6 GB",
    "48 + 8 + 2 MP",
    "16 MP"
  ),
  modelo_telemovel(
    "Smartphone SAMSUNG Galaxy A21s - Preto",
    "https://www.worten.pt/i/dd0dca9c4fa63f32da4b50fda17ec1988b614ad8.jpg",
    219.99,
    199.99,
    "6.55''",
    "64 GB",
    "4 GB",
    "48 + 8 + 2 + 2 MP",
    "13 MP"
  ),
  modelo_telemovel(
    "Smartphone SAMSUNG Galaxy A71 - Preto",
    "https://www.worten.pt/i/d01d419c12c7d89237d365dd301baa240eef9d41.jpg",
    499.99,
    439.99,
    "6.7''",
    "128 GB",
    "6 GB",
    "64 + 12 + 5 + 5 MP",
    "32 MP"
  ),

  modelo_telemovel(
    "Smartphone SAMSUNG Galaxy S21 Ultra 5G - Prateado",
    "https://www.worten.pt/i/103ddb823ad7f0a416f896ed860564e6a138bb6f.jpg",
    1329,
    0,
    "6.2''",
    "256 GB",
    "12 GB",
    "108 + 10 + 10 + 12 MP",
    "40 MP"
  ),
  modelo_telemovel(
    "Smartphone SAMSUNG Galaxy S21 5G - Branco",
    "https://www.worten.pt/i/25f8ed00ea327fbfbbff091aedc622d03b3e63e4.jpg",
    929.99,
    0,
    "6.2''",
    "256 GB",
    "8 GB",
    "64 + 12 + 12 MP",
    "10 MP"
  ),
  modelo_telemovel(
    "Smartphone Xiaomi Redmi Note 9S - 128GB - Aurora Blue",
    "https://static.fnac-static.com/multimedia/Images/PT/NR/4a/02/5e/6160970/1540-1.jpg",
    289.99,
    0,
    "6.67''",
    "128 GB",
    "6 GB",
    "48.0 MP + 8.0 MP + 5.0 MP + 2.0 MP",
    "16.0 MP"
  ),
  modelo_telemovel(
    "Smartphone Huawei P40 Lite - 128GB - Preto",
    "https://static.fnac-static.com/multimedia/Images/PT/NR/6e/c5/5a/5948782/1540-1.jpg",
    329.99,
    309.99,
    "6.4''",
    "128 GB",
    "6 GB",
    "48.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
    "16.0 MP"
  ),
  modelo_telemovel(
    "Smartphone Caterpillar S52 - Preto",
    "https://static.fnac-static.com/multimedia/Images/PT/NR/f4/31/57/5714420/1540-1.jpg",
    449.99,
    309.99,
    "5.65''",
    "64 GB",
    "4 GB",
    "12.0 MP",
    "8.0 MP"
  ),

  modelo_telemovel(
    "Smartphone OnePlus 8 Pro - 128GB - Onyx Black",
    "https://static.fnac-static.com/multimedia/Images/PT/NR/5a/b2/5c/6074970/1540-1.jpg",
    919,
    0,
    "6.78''",
    "128 GB",
    "8 GB",
    "48.0 MP + 8.0 MP + 48.0 MP + 5.0 MP",
    "16.0 MP"
  ),
  modelo_telemovel(
    "Smartphone Samsung Galaxy A51 - A515F - Preto Prisma",
    "https://static.fnac-static.com/multimedia/Images/PT/NR/da/86/58/5801690/1540-1.jpg",
    399.99,
    309.99,
    "6.5''",
    "128 GB",
    "4 GB",
    "48.0 MP + 12.0 MP + 5.0 MP + 8.0 MP",
    "32.0 MP"
  ),
];

localStorage.setItem("computadores", JSON.stringify(computadores_lista))
localStorage.setItem("telemóveis", JSON.stringify(telemoveis_lista))