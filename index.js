function success() {
    swal({
        title: "Молодец!",
        text: "Добавлено в корзину!",
        icon: "success",
        button: "Done",
    });
}

function error() {
    swal({
        title: "Ooops!",
        text: "Tez orada siz bilan bog'lanamiz!",
        icon: "success",
        button: "Ok",
    });
}
function inputEmpty() {
    swal({
        title: "Ooops!",
        text: "imputs fields are required!",
        icon: "error",
        button: "Ok",
    });
}



let mask = document.querySelector('.mask');

window.addEventListener('load', () =>{
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  },600)
})

function openbtn() {
    let sidebar = document.querySelector(".sidebar");
    // let sidebar1 = document.querySelector('.sidebar').style.display ='flex'
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block" && "flex";
    } else {
      sidebar.style.display = "none";
    }
  }

function saveToStorage(data) {
    localStorage.setItem('cart', JSON.stringify(data))
}
function forsale(){
 window.location.href='forSale.html'
}
function kupit(){
    window.location.href='forSale.html'
   }

document.addEventListener('alpine:init', () => {
    Alpine.data('forSale', () => ({
        cart: JSON.parse(localStorage.getItem('cart') || JSON.stringify([])),
        user: {
            name_user: '',
            phone_user: '',
            lastName_user: '',
        },
        contactUs: {
            name: '',
            email: '',
            phone: '',
            message: '',
            sendEmail() {
                emailjs.send("service_qnqazaz","template_kjojsga",{
                    user_name: this.name,
                    user_email: this.email,
                    user_phone: this.phone,
                    xaridor: this.name,
                    message: this.message
                }).then(() => {
                    this.name = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                    error();
                    // this.cart.splice(0, this.cart.length)
                }).catch(error => {
                    alert(error.message)
                })
            }
        },
        savatgaOlish(productId) {
            const cartItem = this.cart.find(({ id }) => id === productId)
            if(!cartItem) {
                const product = this.products.find(({ id }) => id === productId)
                this.cart.push(product)
                success()
                saveToStorage(this.cart)
            }
        },
        increaseQT(productId) {
            const cartItem = this.cart.find(({ id }) => id === productId)
            if(cartItem) {
                cartItem.quantity += 1
                saveToStorage(this.cart)
            }
        },
        decreaseQT(productId) {
            const cartItem = this.cart.find(({ id }) => id === productId)
            if(cartItem && cartItem.quantity > 1) {
                cartItem.quantity -= 1
                saveToStorage(this.cart)
            }
        },
        removeFromCart(productId) {
            const index = this.cart.findIndex(({ id }) => id === productId)
            if(index !== -1) {
                this.cart.splice(index, 1)
                saveToStorage(this.cart)
            }
        },
        sendToEmail() {
            if(this.user.lastName_user && this.user.name_user && this.user.phone_user) {
                emailjs.send("service_qnqazaz","template_d18y1jf",{
                    ...this.user,
                    from_name: this.user.name_user,
                    body: `
                        ${this.cart.reduce((a, b) => a + `
                                ${b.name} ${b.quantity}ta ${b.cost} $, 
                            \n
                        `,'')}
                    `,
                }).then(() => {
                    this.user.lastName_user = ''
                    this.user.name_user = '',
                    this.user.phone_user = '',
                    error();
                    // this.cart.splice(0, this.cart.length)
                }).catch(error => {
                    alert(error.message)
                })
            } else {
                alert(`Iltimos bo'sh kataklarni to'ldiring`)
            }
        },
        products: [
        {
            id:1,
            image:'./yostiqlar/yostiq1.jpg',
            name: 'Yostiq1',
            cost: 15000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[0])
            }
        },
        {
            id:2,
            image:'./yostiqlar/yostiq2.jpg',
            name:'yostiq2',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[1])
            }
        },
        {
            id:3,
            image:'./yostiqlar/yostiq3.jpg',
            name:'yostiq3',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[2])
            }
        },
        {
            id:4,
            image:'./yostiqlar/yostiq4.jpg',
            name:'yostiq4',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[3])
            }
        },
        {
            id:5,
            image:'./yostiqlar/yostiq5.jpg',
            name:'yostiq5',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[4])
            }
        },
        {
            id:6,
            image:'./pakrivallar/pakrival1.jpg',
            name:'Пакривал TURK .N-1',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[5])
            }
        },
        {
            id:7,
            image:'./pakrivallar/pakrival2.jpg',
            name:'Пакривал TURK .N-2',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[6])
            }
        },
        {
            id:8,
            image:'./pakrivallar/pakrival3.jpg',
            name:'Пакривал TURK .N-3',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[7])
            }
        },
        {
            id:9,
            image:'./pakrivallar/pakrival4.jpg',
            name:'Пакривал TURK .N-4',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[8])
            }
        },
        {
            id:10,
            image:'./pakrivallar/pakrival5.jpg',
            name:'Пакривал TURK .N-5',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[9])
            }
        },
        {
            id:11,
            image:'./pakrivallar/pakrival7.jpg',
            name:'Пакривал TURK .N-7',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[10])
            }
        },
        {
            id:12,
            image:'./pakrivallar/pakrival8.jpg',
            name:'Пакривал TURK .N-8',
            cost:12000,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[11])
            }
        },
        {
            id:13,
            image:'./pakrivallar/pakrival10.jpg',
            name:'Пакривал EVRO .N-10',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[12])
            }
        },
        {
            id:14,
            image:'./pakrivallar/pakrival11.jpg',
            name:'Пакривал EVRO .N-11',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[13])
            }
        },
        {
            id:15,
            image:'./pakrivallar/pakrival12.jpg',
            name:'Пакривал EVRO .N-12',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[14])
            }
        },
        {
            id:16,
            image:'./pakrivallar/pakrival13.jpg',
            name:'Пакривал EVRO .N-13',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[15])
            }
        },
        {
            id:17,
            image:'./pakrivallar/pakrival14.jpg',
            name:'Пакривал EVRO .N-14',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[16])
            }
        },
        {
            id:18,
            image:'./pakrivallar/pakrival15.jpg',
            name:'Пакривал EVRO .N-15',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[17])
            }
        },
        {
            id:19,
            image:'./pakrivallar/pakrival16.jpg',
            name:'Пакривал EVRO .N-16',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[18])
            }
        },
        {
            id:20,
            image:'./pakrivallar/pakrival17.jpg',
            name:'Пакривал EVRO .N-17',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[19])
            }
        },
        {
            id:21,
            image:'./pakrivallar/pakrival18.jpg',
            name:'Пакривал EVRO .N-18',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[20])
            }
        },
        {
            id:22,
            image:'./pakrivallar/pakrival19.jpg',
            name:'Пакривал EVRO .N-19',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[21])
            }
        },
        {
            id:23,
            image:'./pakrivallar/pakrival20.jpg',
            name:'Пакривал EVRO .N-20',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[22])
            }
        },
        {
            id:24,
            image:'./pakrivallar/pakrival21.jpg',
            name:'Пакривал EVRO .N-21',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[23])
            }
        },
        {
            id:25,
            image:'./pakrivallar/pakrival22.jpg',
            name:'Пакривал EVRO .N-22',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[24])
            }
        },
        {
            id:26,
            image:'./pakrivallar/pakrival23.jpg',
            name:'Пакривал EVRO .N-23',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[25])
            }
        },
        {
            id:27,
            image:'./pakrivallar/pakrival25.jpg',
            name:'Пакривал EVRO .N-25',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[26])
            }
        },
        {
            id:28,
            image:'./pakrivallar/pakrival26.jpg',
            name:'Пакривал EVRO .N-26',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[27])
            }
        },
        {
            id:29,
            image:'./pakrivallar/pakrival27.jpg',
            name:'Пакривал EVRO .N-27',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[28])
            }
        },
        {
            id:30,
            image:'./pakrivallar/pakrival28.jpg',
            name:'Пакривал EVRO .N-28',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[29])
            }
        },
        {
            id:31,
            image:'./pakrivallar/pakrival29.jpg',
            name:'Пакривал EVRO .N-29',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[30])
            }
        },
        {
            id:32,
            image:'./pakrivallar/pakrival30.jpg',
            name:'Пакривал EVRO .N-30',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[31])
            }
        },
        {
            id:33,
            image:'./pakrivallar/pakrival31.jpg',
            name:'Пакривал EVRO .N-31',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[32])
            }
        },
        {
            id:34,
            image:'./pakrivallar/pakrival32.jpg',
            name:'Пакривал EVRO .N-32',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[33])
            }
        },
        {
            id:35,
            image:'./pakrivallar/pakrival33.jpg',
            name:'Пакривал EVRO .N-33',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[34])
            }
        },
        {
            id:36,
            image:'./pakrivallar/pakrival34.jpg',
            name:'Пакривал EVRO .N-34',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[35])
            }
        },
        {
            id:37,
            image:'./pakrivallar/pakrival35.jpg',
            name:'Пакривал EVRO .N-35',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[36])
            }
        },
        {
            id:38,
            image:'./pakrivallar/pakrival36.jpg',
            name:'Пакривал EVRO .N-36',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[37])
            }
        },
        {
            id:39,
            image:'./pakrivallar/pakrival37.jpg',
            name:'Пакривал EVRO .N-37',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[38])
            }
        },
        {
            id:40,
            image:'./pakrivallar/pakrival38.jpg',
            name:'Пакривал EVRO .N-38',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[39])
            }
        },
        {
            id:41,
            image:'./pakrivallar/pakrival39.jpg',
            name:'Пакривал EVRO .N-39',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[40])
            }
        },
        {
            id:42,
            image:'./pakrivallar/pakrival40.jpg',
            name:'Пакривал EVRO .N-40',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[41])
            }
        },
        {
            id:43,
            image:'./pakrivallar/pakrival41.jpg',
            name:'Пакривал EVRO .N-41',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[42])
            }
        },
        {
            id:44,
            image:'./pakrivallar/pakrival42.jpg',
            name:'Пакривал EVRO .N-42',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[43])
            }
        },
        {
            id:45,
            image:'./pakrivallar/pakrival43.jpg',
            name:'Пакривал EVRO .N-43',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[44])
            }
        },
        {
            id:46,
            image:'./pakrivallar/pakrival44.jpg',
            name:'Пакривал 3D N-44',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[45])
            }
        },
        {
            id:47,
            image:'./pakrivallar/pakrival45.jpg',
            name:'Пакривал 3D N-45',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[46])
            }
        },
        {
            id:48,
            image:'./pakrivallar/pakrival46.jpg',
            name:'Пакривал 3D N-46',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[47])
            }
        },
        {
            id:49,
            image:'./pakrivallar/pakrival47.jpg',
            name:'Пакривал 3D N-47',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[48])
            }
        },
        {
            id:50,
            image:'./pakrivallar/pakrival48.jpg',
            name:'Пакривал 3D N-48',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[49])
            }
        },
        {
            id:51,
            image:'./pakrivallar/pakrival49.jpg',
            name:'Пакривал 3D N-49',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[50])
            }
        },
        {
            id:52,
            image:'./pakrivallar/pakrival50.jpg',
            name:'Пакривал 3D N-50',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[51])
            }
        },
        {
            id:53,
            image:'./pakrivallar/pakrival51.jpg',
            name:'Пакривал 3D N-51',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[52])
            }
        },
        {
            id:54,
            image:'./pakrivallar/pakrival52.jpg',
            name:'Пакривал 3D N-52',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[53])
            }
        },
        {
            id:55,
            image:'./pakrivallar/pakrival53.jpg',
            name:'Пакривал 3D N-53',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[54])
            }
        },
        {
            id:56,
            image:'./pakrivallar/pakrival54.jpg',
            name:'Пакривал 3D N-54',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[55])
            }
        },
        {
            id:57,
            image:'./pakrivallar/pakrival55.jpg',
            name:'Пакривал 3D N-55',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[56])
            }
        },
        {
            id:58,
            image:'./pakrivallar/pakrival56.jpg',
            name:'Пакривал 3D N-56',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[57])
            }
        },
        {
            id:59,
            image:'./pakrivallar/pakrival57.jpg',
            name:'Пакривал 3D N-57',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[58])
            }
        },
        {
            id:60,
            image:'./pakrivallar/pakrival58.jpg',
            name:'Пакривал 3D N-58',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[59])
            }
        },
        {
            id:61,
            image:'./pakrivallar/pakrival59.jpg',
            name:'Пакривал 3D N-59',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[60])
            }
        },
        {
            id:62,
            image:'./pakrivallar/pakrival60.jpg',
            name:'Пакривал 3D N-60',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[61])
            }
        },
        {
            id:63,
            image:'./pakrivallar/pakrival61.jpg',
            name:'Пакривал 3D N-61',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[62])
            }
        },
        {
            id:64,
            image:'./pakrivallar/pakrival62.jpg',
            name:'Пакривал 3D N-62',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[63])
            }
        },
        {
            id:65,
            image:'./pakrivallar/pakrival63.jpg',
            name:'Пакривал 3D N-63',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[64])
            }
        },
        {
            id:66,
            image:'./pakrivallar/pakrival64.jpg',
            name:'Пакривал 3D N-64',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[65])
            }
        },
        {
            id:67,
            image:'./pakrivallar/pakrival65.jpg',
            name:'Пакривал 3D N-65',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[66])
            }
        },
        {
            id:68,
            image:'./pakrivallar/pakrival66.jpg',
            name:'Пакривал 3D N-66',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[67])
            }
        },
        {
            id:69,
            image:'./pakrivallar/pakrival67.jpg',
            name:'Пакривал 3D N-67',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[68])
            }
        },
        {
            id:70,
            image:'./pakrivallar/pakrival68.jpg',
            name:'Пакривал 3D N-68',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[69])
            }
        },
        {
            id:71,
            image:'./pakrivallar/pakrival69.jpg',
            name:'Пакривал 3D N-69',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[70])
            }
        },
        {
            id:72,
            image:'./pakrivallar/pakrival70.jpg',
            name:'Пакривал 3D N-70',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[71])
            }
        },
        {
            id:73,
            image:'./pakrivallar/pakrival71.jpg',
            name:'Пакривал 3D N-71',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[72])
            }
        },
        {
            id:74,
            image:'./pakrivallar/pakrival72.jpg',
            name:'Пакривал 3D N-72',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[73])
            }
        },
        {
            id:75,
            image:'./pakrivallar/pakrival73.jpg',
            name:'Пакривал 3D N-73',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[74])
            }
        },
        {
            id:76,
            image:'./pakrivallar/pakrival74.jpg',
            name:'Пакривал 3D N-74',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[75])
            }
        },
        {
            id:77,
            image:'./pakrivallar/pakrival75.jpg',
            name:'Пакривал 3D N-75',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[76])
            }
        },
        {
            id:78,
            image:'./pakrivallar/pakrival76.jpg',
            name:'Пакривал 3D N-76',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[77])
            }
        },
        {
            id:79,
            image:'./pakrivallar/pakrival77.jpg',
            name:'Пакривал 3D N-77',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[78])
            }
        },
        {
            id:80,
            image:'./pakrivallar/pakrival78.jpg',
            name:'Пакривал 3D N-78',
            cost:42,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[79])
            }
        },
        {
            id:81,
            image:'./xalatlar/xalat.jpg',
            name:'Баня Халат ж N-1',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[80])
            }
        },
        {
            id:82,
            image:'./xalatlar/xalat2.jpg',
            name:'Баня Халат ж N-2',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[81])
            }
        },
        {
            id:83,
            image:'./xalatlar/xalat3.jpg',
            name:'Баня Халат ж N-3',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[82])
            }
        },
        {
            id:84,
            image:'./xalatlar/xalat4.jpg',
            name:'Баня Халат ж N-4',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[83])
            }
        },
        {
            id:85,
            image:'./xalatlar/xalat5.jpg',
            name:'Баня Халат ж N-5',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[84])
            }
        },
        {
            id:86,
            image:'./xalatlar/xalat6.jpg',
            name:'Баня Халат ж N-6',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[85])
            }
        },
        {
            id:87,
            image:'./xalatlar/xalatM1.jpg',
            name:'Баня Халат М N-1',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[86])
            }
        },
        {
            id:88,
            image:'./xalatlar/xalatM2.jpg',
            name:'Баня Халат М N-2',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[87])
            }
        },
        {
            id:89,
            image:'./xalatlar/xalatM3.jpg',
            name:'Баня Халат М N-3',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[88])
            }
        },
        {
            id:90,
            image:'./xalatlar/xalatM4.jpg',
            name:'Баня Халат М N-4',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[89])
            }
        },
        {
            id:91,
            image:'./xalatlar/xalatM5.jpg',
            name:'Баня Халат М N-5',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[90])
            }
        },
        {
            id:92,
            image:'./xalatlar/xalatM6.jpg',
            name:'Баня Халат М N-6',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[91])
            }
        },
        {
            id:93,
            image:'./xalatlar/xalatM7.jpg',
            name:'Баня Халат М N-7',
            cost:40,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[92])
            }
        },
        {
            id:94,
            image:'./sochiqlar/sochiq1.jpg',
            name:'Полотенца шт-8 .N-1',
            cost:50,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[93])
            }
        },
        {
            id:95,
            image:'./sochiqlar/sochiq2.jpg',
            name:'Полотенца шт-8 .N-2',
            cost:50,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[94])
            }
        },
        {
            id:96,
            image:'./sochiqlar/sochiq3.jpg',
            name:'Полотенца шт-8 .N-3',
            cost:50,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[95])
            }
        },
        {
            id:97,
            image:'./sochiqlar/sochiq4.jpg',
            name:'Полотенца шт-8 .N-4',
            cost:50,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[96])
            }
        },
        {
            id:98,
            image:'./sochiqlar/sochiq5.jpg',
            name:'Полотенца шт-8 .N-5',
            cost:50,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[97])
            }
        },
        {
            id:99,
            image:'./sochiqlar/sochiq6.jpg',
            name:'Полотенца шт-8  .N-6',
            cost:50,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[98])
            }
        },
        {
            id:100,
            image:'./sochiqlar/sochiq7.jpg',
            name:'Полотенца шт-18 N-7',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[99])
            }
        },
        {
            id:101,
            image:'./sochiqlar/sochiq8.jpg',
            name:'Полотенца шт-18 N-8',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[100])
            }
        },
        {
            id:102,
            image:'./sochiqlar/sochiq9davomi2.jpg',
            name:'Полотенца шт-18 N-9',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[101])
            }
        },
        {
            id:103,
            image:'./sochiqlar/sochiq10davimi2.jpg',
            name:'Полотенца шт-18 N-10',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[102])
            }
        },
        {
            id:104,
            image:'./sochiqlar/sochiq11davomi2.jpg',
            name:'Полотенца шт-18 N-11',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[103])
            }
        },
        {
            id:105,
            image:'./sochiqlar/sochiq12davomi2.jpg',
            name:'Полотенца шт-18 N-12',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[104])
            }
        },
        {
            id:106,
            image:'./sochiqlar/sochiq13davomi2.jpg',
            name:'Полотенца шт-18 N-13',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[105])
            }
        },
        {
            id:107,
            image:'./sochiqlar/sochiq14davomi2.jpg',
            name:'Полотенца шт-18 N-14',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[106])
            }
        },
        {
            id:108,
            image:'./sochiqlar/sochiq15davomi2.jpg',
            name:'Полотенца шт-18 N-15',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[107])
            }
        },
        {
            id:109,
            image:'./sochiqlar/sochiq16davomi2.jpg',
            name:'Полотенца шт-18 N-16',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[108])
            }
        },
        {
            id:110,
            image:'./sochiqlar/sochiq17davomi2.jpg',
            name:'Полотенца шт-18 N-17',
            cost:80,
            quantity: 1,
            onClick() {
                this.karzinka.push(this.products[109])
            }
        },
        
        
        ]
    }))
})