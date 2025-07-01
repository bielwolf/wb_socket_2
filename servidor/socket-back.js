import "dotenv/config";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";

import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosDocumento(socket,io);
  registrarEventosInicio(socket,io);
  registrarEventosCadastro(socket,io);
  registrarEventosLogin(socket, io);
});
