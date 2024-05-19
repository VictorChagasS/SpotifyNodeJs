import express from "express";
import path from "path";
import handlebarsConfig from "./config/handlebarsConfig";
import connectMongo from "./config/mongoConnection";
import spotifyRoutes from "./routes/spotifyRoutes";

const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

//Add comment test 2

// CONFIGURACAO DO HANDLEBARS
handlebarsConfig(app);

// USO DE ROTAS
app.use("/", spotifyRoutes);

// CONFIGURANDO MONGODB
connectMongo();

app.listen(8081, () => {
  console.log("Servidor iniciado...");
});
