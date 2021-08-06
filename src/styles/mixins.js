//padroes de cores, tamanhos, fontes, tamanho de fontes
//Aqui é onde eu exporto um objeto

export const mixins = {

    colors:{             
        background:"#E5E5E5",
		primary: "#F0242D",
		secondary: "#F6BD20",
		foreground: "#FFF",
		dark: "#292929",
		darkred: "#731F17",
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
		titleLogin: "33px",
		subTitle: "16px",
		paragraph:"12px",
		campoObrigatorio:"14px",
        EsqueceuSenha:"10px",
	},
	size:{
		lg:"240px",  //tamanho grande
		md: "160px", // tamanho medio
		sm:"120px",  //tamanho pequeno
						
	},
	styles:{
		// background: rgb(240,36,45);
        gradiente: "linear-gradient(340deg, rgba(240,36,45,1) 0%, rgba(246,160,32,1) 64%)",
        gradienteAlt: "linear-gradient(250deg, rgba(240,36,45,1) 0%, rgba(246,160,32,1) 64%)",
		shadowBox: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
		shadowButton: "0 5px 5px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)",
	},
    
}

