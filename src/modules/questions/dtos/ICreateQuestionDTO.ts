interface alternativas {
  letra: string;
  correta: boolean;
  texto: string;
}

export default interface ICreateQuestionDTO {
  materia: string;
  vestibular: string;
  resolucao: string;
  enunciado: string;
  numeroQuestao: number;
  ano: number;
  alternativas: alternativas[];
  disponivel: boolean;
}
