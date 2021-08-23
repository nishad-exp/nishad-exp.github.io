const Navbar = (items) =>{
    let toggle = false;

    const generateItemList = () =>{
        let arr =[]
        items.forEach(item => {
            arr.push({
                element:"span",
                text:item.name,
                class:"",
                styles:`display:inline-block!important;margin-right:20px`,
                click:{route:item.route}
            })
        });
        return arr
    }
    const toggleNavItems = () =>{
        toggle=!toggle
        document.getElementById('mobileNav').className = toggle?"show":"hide"
    }
    return (
        {
            element:"div",
            class:"bg-light text-dark p-3 fixed-top",
            children :[
                {
                    element:"div",
                    class:"flex-row",
                    children:[
                        {
                            element:"div",
                            class:"w-75 lead",
                            text:"Astha Kubavat"
                        },
                        {
                            element:"div",
                            class:"w-25",
                            children:[{
                                element:"div",
                                class:"text-center navbar-items",
                                children:generateItemList()
                                },
                                {
                                    element:"div",
                                    class:"mobile-navbar-items",
                                    children:[{
                                        element:"button",
                                        class:"btn btn-light",
                                        styles:"margin-left:80%!important;",
                                        children:[{
                                            element:"i",
                                            class:"icon-menu icons"
                                        }],
                                        click:toggleNavItems
                                    }]
                                }
                            
                            ]
                            
                        }        
                    ]
                },
                {
                    element:"div",
                    class:"mobile-navbar-items",
                    children:[{
                        element:"div",
                        class:"hide",
                        id:"mobileNav",
                        children:generateItemList(),
                    }]
                }
            ]
    
    }
    
    )
}
export default Navbar