let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]


const newMembers = [
    {
        id: 1,
        username: 'Yunes',
        title: 'Manenger',
        img:'images/yunes.jpg'
    },
    {
        id: 2,
        username: 'Navid',
        title: 'Backend',
        img:'images/yunes.jpg'
    },
    {
        id: 3,
        username: 'Mostafa',
        title: 'frontend',
        img:'images/yunes.jpg'
    },
    {
        id: 4,
        username: 'Sina',
        title: 'Desinger',
        img:'images/yunes.jpg'
    },
]
const transactions = [
    {
        id: 1,
        customer: 'Yunes Mohammadi',
        date: '12 Jun 2022',
        amount: 545,
        status: 'Approved',
        img:'images/yunes.jpg'
    },
    {
        id: 2,
        customer: 'Yunes Mohammadi',
        date: '23 Jul 2022',
        amount: 555,
        status: 'Declined',
        img:'images/yunes.jpg'
    },
    {
        id: 3,
        customer: 'Yunes Mohammadi',
        date: '28 May 2022',
        amount: 254,
        status: 'Pending',
        img:'images/yunes.jpg'
    },
    {
        id: 4,
        customer: 'Yunes Mohammadi',
        date: '1 Feb 2022',
        amount: 454,
        status: 'Approved',
        img:'images/yunes.jpg'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Yunes Mohammadi',
        avatar: '../images/yunes.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'amin@gmail.com'
    },
    {
        id: 2,
        username: 'Yunes Mohammadi',
        avatar: 'images/yunes.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: 'Yunes Mohammadi',
        avatar: 'images/yunes.jpg',
        status: 'active',
        transaction: '$98',
        email: 'amin@gmail.com'
    },
    {
        id: 4,
        username: 'Yunes Mohammadi',
        avatar: 'images/yunes.jpg',
        status: 'active',
        transaction: '$0',
        email: 'amin@gmail.com'
    },
    {
        id: 5,
        username: 'Yunes Mohammadi',
        avatar: 'images/yunes.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'amin@gmail.com'
    }
]


let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 890
    },

    {
        id: 3,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 890
    },
]

export { xAxisData, newMembers, transactions, userRows, products }