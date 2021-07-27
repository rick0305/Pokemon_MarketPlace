//padroes de cores, tamanhos, fontes, tamanho de fontes
//Aqui é onde eu exporto um objeto
import img from '../assets/login-page.png';

export const mixins = {

    colors:{             
       background:"#FFA500",
        primary: "red",
        secondary: "#F0242D",
        third:"#FFFFFF",
        green: "green",
        yellow: "yellow",
        red: "red"
    },
    fonts:{
        bold: "Montserrat-Bold",
        semi_bold: "Montserrat-SemiBold",
        normal: "Montserrat-Normal",
        
    },
    typograph:{
        title: "96px 33px",
        subTitle: "16px",
        paragraph:"12px"
    },
    size:{
        lg:"240px",//tamanho grande
        md: "160px",// tamanho medio
        sm:"120px",  //tamanho pequeno
              
    },


}