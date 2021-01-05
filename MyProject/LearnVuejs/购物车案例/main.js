const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
        ]
    },
   
    methods: {
        // getFinalPrice(price){
        //     return '￥' + price.toFixed(2)
        // },
        removeHandle(index){
          this.books.splice(index,1)  
        },
        increment(index){
           this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        }
       
        
    },
    
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2)  
        }
    },
    computed:{
        totalPrice(){
            // 1.普通的for循环
            // let totalPrice = 0
            // for(let i=0;i<this.books.length;i++){
            //     totalPrice+=this.books[i].price*this.books[i].count
            // }
            // return totalPrice

            // 2.for (let item of this.books)
            // let totalPrice = 0
            // for (let item of this.books){
            //        totalPrice += item.price * item.count
            // }
            return totalPrice = this.books.reduce(function (preValue,book){
               return preValue + book.price * book.count
            },0)
            // 3.函数式编程 filter
            // const nums = [11,22,12,0,1,101,500,14,210]
            // let newNums = nums.filter(function (n) {
            //     return n < 100
            // })
            // console.log(newNums);
            // map 函数的使用
            // let new2Nums = [20,10,2,1,4]
            // let new3Nums = new2Nums.map(function (n) {
            //     return n * 2
            // })
            // console.log(new3Nums);
            // 4.reduce函数
            // const nums = [1,2,3,4]
            // let newNums = nums.reduce(function (n) {
            //     return preValue + n
            // },0)
            // console.log(total);
            // 4.易于阅读的编程
            // const nums = [1,2,200,3,500,4]
            // let total = nums.filter(function (n) {
            //     return n < 100
            // }).map(function (n) {
            //     return n * 2
            // }).reduce(function(preValue,n) {
            //     return preValue + n
            // },0)
            // console.log(total);
            // let total = nums.filter(n => n < 100).map(n => n*2).reduce((pre,n) => pre + n)
            // console.log(total);
        }
    }     
})