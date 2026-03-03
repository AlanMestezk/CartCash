
export type Product ={

    id         : string;
    name       : string;
    price      : number;
    image      : string;
    category   : 'tenis' | 'camiseta' | 'calça' | 'acessórios'
    description: string
}

export const Products : Product[]=[
  {
    id: '4',
    name: 'Camisa Básica Branca',
    price: 69.90,
    category: 'camiseta',
    image: 'https://idealvestrouparia.com.br/cdn/shop/files/CamisaSocialBrancaMangaCurtaMasculinaSlimStretch-Aramis_2.jpg?v=1757107446&width=800',
    description: 'Básica 100% algodão, confortável e versátil.'
  },
  {
    id: '1',
    name: 'Tênis Nike Air Max 270',
    price: 599.99,
    category: 'tenis',
    image: 'https://imgcentauro-a.akamaihd.net/660x660/98807201A9.jpg',
    description: 'Air Max 270 combina estilo e conforto.'
  },
  {
    id: '7',
    name: 'Calça Jeans Levi’s 511',
    price: 399.99,
    category: 'calça',
    image: 'https://lojalevis.vtexassets.com/arquivos/ids/698344-800-800?v=639065281393230000&width=800&height=800&aspect=true',
    description: 'Perfeita para um visual casual elegante.'
  },
  {
    id: '10',
    name: 'Boné New Era Aba Reta',
    price: 129.90,
    category: 'acessórios',
    image: 'https://imgcentauro-a.akamaihd.net/1300x1300/M0O9JBCI.jpg',
    description: 'Ajuste traseiro e design moderno.'
  },
  {
    id: '2',
    name: 'Tênis Adidas Ultraboost 22',
    price: 899.99,
    category: 'tenis',
    image: 'https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/media/tenis-adidas-ultraboost-22-feminino-gx5587-638f525fb08c0.jpg',
    description: 'Máximo retorno de energia e amortecimento.'
  },
  {
    id: '5',
    name: 'Camisa Polo Lacoste Azul',
    price: 349.90,
    category: 'camiseta',
    image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/outlet360/media/migration/dbfc4e607a42bebb1f33e1b67d340a0366799cd2/241383071e6cfebf938.jpg',
    description: 'Acabamento premium e caimento moderno.'
  },
  {
    id: '8',
    name: 'Calça Moletom Nike Club fleece',
    price: 249.99,
    category: 'calça',
    image: 'https://images.tcdn.com.br/img/img_prod/817109/calca_nike_sportswear_club_fleece_feminina_30246_1_31609dbb577dc77cf5625e1efe5dc861.jpg',
    description: 'Ideal para treinos ou momentos de lazer.'
  },
  {
    id: '11',
    name: 'Óculos de Sol Ray-Ban Aviator',
    price: 699.90,
    category: 'acessórios',
    image: 'https://cdn.sistemawbuy.com.br/arquivos/de0f9d459e6b0537fbed094b2cdd7dba/produtos/GEI7KAE1/rb3584n-90507161-b-638a45a722ba6.jpg',
    description: 'Proteção UV e design icônico.'
  },
  {
    id: '3',
    name: 'Tênis Puma RS-X',
    price: 499.99,
    category: 'tenis',
    image: 'https://images.tcdn.com.br/img/img_prod/873473/tenis_puma_rs_x_3d_1383_1_c89a59611cfa51cd3b529372cb0d0703.png',
    description: 'Moderno e ótimo conforto para o dia a dia.'
  },
  {
    id: '6',
    name: 'Camisa Social Slim Fit Feminina',
    price: 189.90,
    category: 'camiseta',
    image: 'https://p.globalsources.com/IMAGES/PDT/B1203958715/Camisa.jpg?ver=5843166224',
    description: 'Ideal para ocasiões formais e trabalho.'
  },
  {
    id: '9',
    name: 'Calça Cargo Streetwear',
    price: 219.90,
    category: 'calça',
    image: 'https://down-br.img.susercontent.com/file/2f93b416439b0caa0ef3930dd44dea42',
    description: 'Bolsos utilitários e estilo urbano.'
  },
  {
    id: '12',
    name: 'Óculos de Sol Esportivo UV400',
    price: 159.90,
    category: 'acessórios',
    image: 'https://imgcentauro-a.akamaihd.net/1200x1200/99658318A2.jpg',
    description: 'Esportivo com proteção UV400 e design leve.'
  }
]