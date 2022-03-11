const sidebar = Vue.createApp({
    data(){
        return{
            navOpen : false,
            //openMenu : false,

            menus : [
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
            ]
        };
    },
    /*
    methods:{
        openNextMenu(event){
            //const allShow = document.querySelectorAll(".show")
            event.currentTarget.classList.toggle("show");
        },
    },
    */
}).mount('#sidebar');