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
}).mount('#sidebar');