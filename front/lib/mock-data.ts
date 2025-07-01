
import { Product, Collection } from './types'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Tênis Nike Air Max 270',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1518d6fb-ded7-45af-a879-6e1c130f1a95/W+AIR+MAX+270.png',
    price: 299.99,
    priceDiscount: 239.99,
    category: 'Tênis',
    description: 'O Nike Air Max 270 oferece conforto durante todo o dia com sua unidade Air Max visível.',
    images: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a38773bb-9591-49e3-a233-bc098d5a773c/air-max-270-womens-shoes-Pgb94t.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3beedaf6-203c-4310-b84a-eab7df7e4cc1/air-max-270-shoes-7nlkr3.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14ae863c-6e74-4cd4-8211-9d8e27e2736c/AIR+MAX+270+SE+(GS).png'
    ],
    colors: ['Branco', 'Preto', 'Azul'],
    sizes: ['38', '39', '40', '41', '42', '43'],
    rating: 4.5,
    reviews: 127
  },
  {
    id: '2',
    name: 'Camiseta Adidas Originals',
    image: 'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2024/01/09/adidas_401038_IR8009_20240118T150039_04.jpg',
    price: 89.99,
    priceDiscount: 69.99,
    category: 'Camisetas',
    description: 'Camiseta clássica da Adidas Originals com logo icônico.',
    images: [
      'https://i.pinimg.com/originals/35/36/d3/3536d32412f4e2f4a0198dd2c7fcd160.jpg',
      'https://i.otto.de/i/otto/e4dde4cb-910d-5498-a258-9b9f9100e6b3/adidas-originals-t-shirt-adicolor-classics-trace-t-shirt-mineral-green.jpg?$formatz$'
    ],
    colors: ['Branco', 'Preto', 'Vermelho'],
    sizes: ['P', 'M', 'G', 'GG'],
    rating: 4.2,
    reviews: 89
  },
  {
    id: '3',
    name: 'Jaqueta Bomber Nike',
    image: 'https://media.endclothing.com/media/catalog/product/2/2/22-03-2021_LL_DA0647-010_5_1.jpg',
    price: 349.99,
    category: 'Jaquetas',
    description: 'Jaqueta bomber Nike com design moderno e confortável.',
    images: [
      'https://i.pinimg.com/originals/ee/9e/48/ee9e484e86adb84057d0b3be5d246bef.jpg',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c52279d9-2153-4169-97d3-78f586e47970/sportswear-club-unlined-woven-bomber-jacket-JK9VML.png'
    ],
    colors: ['Preto', 'Verde', 'Azul'],
    sizes: ['P', 'M', 'G', 'GG'],
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Calça Jeans Levi\'s 501',
    image: 'https://www.urbanindustry.co.uk/cdn/shop/products/Levis_501OriginalFit_Jeans_BlueOnewash_01.jpg?v=1670497396&width=1445',
    price: 199.99,
    priceDiscount: 159.99,
    category: 'Calças',
    description: 'A icônica calça jeans Levi\'s 501 com corte clássico.',
    colors: ['Azul', 'Preto', 'Cinza'],
    sizes: ['36', '38', '40', '42', '44'],
    rating: 4.4,
    reviews: 203
  },
  {
    id: '5',
    name: 'Moletom Puma Essentials',
    image: 'https://static.sportfits.de/media/image/e5/f3/1f/puma__pum-673387-01__modelshot02_1280x1280.jpg',
    price: 159.99,
    priceDiscount: 129.99,
    category: 'Moletons',
    description: 'Moletom Puma Essentials com capuz e bolso canguru.',
    colors: ['Cinza', 'Preto', 'Branco'],
    sizes: ['P', 'M', 'G', 'GG'],
    rating: 4.3,
    reviews: 91
  },
  {
    id: '6',
    name: 'Tênis Adidas Ultraboost 22',
    image: 'https://assets.adidas.com/images/w_1880,f_auto,q_auto/5a5dafe4882441e3bc90ae2b00ec01d2_9366/GX6640_09_standard.jpg',
    price: 449.99,
    priceDiscount: 399.99,
    category: 'Tênis',
    description: 'Tênis de corrida Adidas Ultraboost 22 com tecnologia Boost.',
    colors: ['Branco', 'Preto', 'Azul'],
    sizes: ['38', '39', '40', '41', '42', '43'],
    rating: 4.8,
    reviews: 274
  },
  {
    id: '7',
    name: 'Shorts Nike Dri-FIT',
    image: 'https://cdn.plutosport.com/a/ProductMedia/Nike/P.NIKE.SHO.6495/Nike-Pro-Dri-FIT-Short-Dames_6-2402021156.jpg?profile=product_page_image_medium&33',
    price: 79.99,
    category: 'Shorts',
    description: 'Shorts Nike Dri-FIT para treinos e atividades esportivas.',
    colors: ['Preto', 'Cinza', 'Azul'],
    sizes: ['P', 'M', 'G', 'GG'],
    rating: 4.1,
    reviews: 67
  },
  {
    id: '8',
    name: 'Boné New Era 9FORTY',
    image: 'https://i.pinimg.com/736x/b1/d5/f9/b1d5f956b3c291289f10e8f7b9d6fbcd.jpg',
    price: 99.99,
    priceDiscount: 79.99,
    category: 'Bonés',
    description: 'Boné New Era 9FORTY com ajuste por fivela.',
    colors: ['Preto', 'Branco', 'Azul'],
    sizes: ['Único'],
    rating: 4.6,
    reviews: 143
  }
]

export const mockCollections: Collection[] = [
  {
    id: '1',
    name: 'Coleção Verão 2024',
    image: 'https://i.ytimg.com/vi/lgCGzSBdPEc/maxresdefault.jpg',
    href: '/products?collection=verao-2024'
  },
  {
    id: '2',
    name: 'Streetwear Essentials',
    image: 'https://i.ytimg.com/vi/c0vrU-orW_8/maxresdefault.jpg',
    href: '/products?collection=streetwear'
  },
  {
    id: '3',
    name: 'Fitness & Sport',
    image: 'https://lh5.googleusercontent.com/7cvDOio_MuCEu8gk9EpWd0DH0CBmeMqf6lZ3b_1erXocLGBKTDML5VOX1VRIDgo2McbsHKK_N1sLXV3OQE5X1E-oSonjLcOA-VyJH7LNxeJDe_L-sFi_IerSI9wBM5HiJcJLIjyi',
    href: '/products?collection=fitness'
  }
]

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  )
}

export const searchProducts = (query: string): Product[] => {
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  )
}
