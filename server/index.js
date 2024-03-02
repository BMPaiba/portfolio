const server = require("./server");

const port = 3001

// Iniciar el servidor
server.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
