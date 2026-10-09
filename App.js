const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//Configurar Express para las imagenes, estilos y archivos HTML del proyecto
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para mostrar los archivos HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Login.html'));
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor de Calzado Martin listo en http://localhost:${PORT}`);
});
