import React, { useState } from 'react';  //defino la funcion useState para guardar informacion y que esta sea dinamica segun lo que quiero mostrar

const Home = () => {                      // home lo creo para renderizar (mostrar)
	const [color, setColor] = useState(""); //"color" como variable para guardar las variables de las luces y setClor para definirla como funcion. 

	const lightStyle = (lightColor) => ({
		width: "80px",
		height: "80px",
		backgroundColor: lightColor,
		borderRadius: "50%",
		margin: "10px auto",
		boxShadow: color === lightColor ? `0 0 20px 5px ${lightColor}` : "none",
		opacity: color === lightColor ? 1 : 0.3, // 1 parametro para decir que es visible y 0.3 un poco mas oscura
		transition: "all 0.3s ease", //cambio de color y brillo  suave
		cursor: "pointer",
	});

	const containerStyle = {
		backgroundColor: "black",
		padding: "20px",
		borderRadius: "20px",
		width: "120px",
		margin: "100px auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	return (
		<div>
			<div style={containerStyle}>
				<div style={lightStyle("red")} onClick={() => setColor("red")}></div>
				<div style={lightStyle("yellow")} onClick={() => setColor("yellow")}></div>
				<div style={lightStyle("green")} onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default Home;
