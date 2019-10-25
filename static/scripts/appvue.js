/*new Vue({
    el: '#app',
    data() {
      return {
        colors: [],
        sizes: [],
        products: [
          {name:'test1', color:'red', size:'XL'},
          {name:'test2', color:'black', size:'L'},
          {name:'test3', color:'red', size:'L'},
          {name:'test4', color:'black', size:'XL'},
          {name:'test5', color:'red', size:'L'},
          {name:'test6', color:'yellow', size:'XL'},
          {name:'test7', color:'black', size:'L'}
        ],
        sortBy: 'name',
        keyword: ''
      }
    },
    computed: {
      computedProducts: function () {
        return this.products.filter((item) => {
          return (this.keyword.length === 0 || item.name.includes(this.keyword)) &&
          (this.colors.length === 0 || this.colors.includes(item.color)) &&
          (this.sizes.length === 0 || this.sizes.includes(item.size))
        }).sort((a, b) => {
          return a[this.sortBy].toString().localeCompare(b[this.sortBy].toString())
        })
      }
    }
  })
  */
/*
 var url_string = window.location.href; //window.location.href
 var url = new URL(url_string);
 var c = url.searchParams.get("category");  
 console.log(c);
 */


 /*    loadPage: function(){
      var url_string = window.location.href; //window.location.href
      var url = new URL(url_string);
      var c = url.searchParams.get("category");  
      console.log(c);    
      if (c == 1) {
        console.log("Filtro telefono 1")
        filtroTelefono()
      } else if (c == 2) {
        filtroTV()
        console.log("Filtro TV  2")

      } else if (c== 3 ){
        filtroELECTROHOGAR()
        console.log("Filtro electrohogar 3")

      }
      else{
        all()
        console.log("SIN parametros url")

      }
    },*/

 new Vue({

  el: '#app',
 

  data: {
    userFilterKey: 'all',
    items: [
    	{ name: 'Samsung Galaxy A30', category: 'phone' },
      { name: 'Samsung Galaxy A50', category: 'phone'  },
      { name: 'TV 4K', category: 'TV'  },
      { name: 'Lavadora Ad Wash', category: 'electrohogar'  },
      { name: 'Microondas', category: 'electrohogar'  },
      { name: 'Refrigeradoras', category: 'electrohogar'  }

    ]
  },

methods: {
  userFilter: function() {
    return this[this.userFilterKey]
  },
  filtroTV: function() {
    return this.items.filter((item) => item.category == "TV")
  },
},

/*
},

  computed: {
 
  
  	userFilter() {
    	return this[this.userFilterKey]
    },
    all() {
      return this.items.filter((item) => item.category == "phone")
    },
    filtroTelefono: function() {
      return this.items.filter((item) => item.category == "phone")
    },

    filtroTV() {
      return this.items.filter((item) => item.category == "TV")


    },
    filtroELECTROHOGAR() {
      return this.items.filter((item) => item.category == "electrohogar")
    },

*/



})

