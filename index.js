class menus {
    constructor(id,menuName,icons) {
      this.menuName = menuName;
      this.id=id;
      this.icons=icons;
    }
  }

const sidebar = Vue.createApp({
    data(){
        return{
            search: '',

            navOpen : false,
            //openMenu : false,

            menuList : [
                new menus(
                    '1',
                    "Home",
                    "fas fa-home"
                ),
                new menus(
                    '2',
                    "Posts",
                    "fas fa-comments"
                ),
                new menus(
                    '3',
                    "News",
                    "fas fa-newspaper"
                ),
                new menus(
                    '4',
                    "Announcements",
                    "fas fa-bullhorn"
                ),
                new menus(
                    '5',
                    "My Profile",
                    "fas fa-user"
                ),
                new menus(
                    '6',
                    "Settings",
                    "fas fa-cog"
                ),
                
            ]
        };
    },
    computed: {
        filteredList() {
          return this.menuList.filter(menus => {
            return menus.menuName.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    }
    /*
    methods:{
        openNextMenu(event){
            //const allShow = document.querySelectorAll(".show")
            event.currentTarget.classList.toggle("show");
        },
    },
    
                {
                    id:1,
                    menuName: "Home",
                    icons : "fas fa-home"
                },
                {
                    id:2,
                    menuName: "Posts",
                    icons : "fas fa-comments"
                },
                {
                    id:3,
                    menuName: "News",
                    icons : "fas fa-newspaper"
                },
                {
                    id:4,
                    menuName: "Announcements",
                    icons : "fas fa-bullhorn"
                },
                {
                    id:5,
                    menuName: "My Profile",
                    icons : "fas fa-user"
                },
                {
                    id:6,
                    menuName: "Settings",
                    icons : "fas fa-cog"
                },
    */
}).mount('#sidebar');