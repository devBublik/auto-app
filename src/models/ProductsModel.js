
const products = [
    {
        id: 1,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 10,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'ladavesta',
        category: 'accesorises',
        alt: 'image'
    },
     {
        id: 2,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 20,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'vaz1117',
        category: 'covers',
         alt: 'image'
    },
    {
        id: 3,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 1000,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'Kalina',
        category: 'engine',
        alt: 'image'
    },
    {
        id: 4,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 500,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'Kalina',
        category: 'engine',
        alt: 'image'
    },
    {
        id: 5,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 1500,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'vaz210707',
        category: 'engine',
        alt: 'image'
    },
    {
        id: 6,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 326,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'vaz210707',
        category: 'engine',
        alt: 'image'
    },
    {
        id: 7,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 326,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'vaz210707',
        category: 'engine',
        alt: 'image'
    },
    {
        id: 8,
        img: 'https://ltdfoto.ru/images/2023/04/12/16175-1-5.png',
        price: 412,
        desc: 'Провод высоковольтный LADA Granta, Kalina 1.6. 4 шт серия ',
        applyTo: 'Chevrolet Niva 2123',
        category: 'suspension',
        alt: 'image'
    }
]

const filters = [
    {
        type: 'applicability',
        value: 'Kalina',
        title: 'Kalina',
        isChecked: false,
    },
    {
        type: 'applicability',
        value: 'Chevrolet Niva 2123',
        title: 'Chevrolet Niva 2123',
        isChecked: false,
    },
    {
        type: 'applicability',
        value: 'vaz1117',
        title: 'ВАЗ 1117',
        isChecked: false,
    },
    {
        type: 'applicability',
        value: 'vaz210707',
        title: 'ВАЗ 2107-07',
        isChecked: false,
    },
    {
        type: 'applicability',
        value: 'ladavesta',
        title: 'LADA VESTA',
        isChecked: false,
    },
    {
        type: 'category',
        value: 'accesorises',
        title: 'Аксессуары',
        isChecked: false,
    },
    {   
        type: 'category',
        value: 'covers',
        title: 'Чехлы защитные/пыльники',
        isChecked: false,
    },
    {
        type: 'category',
        value: 'suspension',
        title: 'Элементы подвески',
        isChecked: false,
    },
    {
        type: 'category',
        value: 'engine',
        title: 'Крепления двигателя',
        isChecked: false,
    },

]

const sortOption = ['Сначала дешевые', 'Сначала дорогие'];

export  {
    products,
    filters,
    sortOption
}