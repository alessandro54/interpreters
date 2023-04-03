import HttpClient from "./http";

export default class InterpretersService extends HttpClient {
  public static async fetchAll() {
    const { apiUrl, env } = useRuntimeConfig();

    // Only fetch API in production
    if (env === "production") {
      return await this.post(apiUrl, {
        data: {
          categoria1: "3",
          idLengua1: "-1",
          idVariedad1: "",
          especialidad1: "",
          sexo: "",
          ubigeoDepartamentoNacimiento: "",
          idTipo1: "-1",
        },
      });
    } else {
      return await this.get("http://localhost:3000/data/interpreter_dump.json");
    }
  }
}
