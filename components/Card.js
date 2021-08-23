const Card = (bg,text) =>{
    return {
        element:"div",
        class:"col-lg-3 text-center border-end m-0 p-0",
        styles: `
            background-image: url('`+bg+`');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            ;
        `,
        children:[
            {
                element:"div",
                class:"overlay",
                text:text,
            }
        ]
    }
}
export default Card