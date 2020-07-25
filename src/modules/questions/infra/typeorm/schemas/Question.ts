import { ObjectID, ObjectIdColumn, Entity, Column } from 'typeorm';

@Entity('questions')
class Question {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  materia: string;

  @Column()
  vestibular: string;

  @Column()
  resolucao: string;

  @Column()
  enunciado: string;

  @Column()
  numeroQuestao: number;

  @Column()
  ano: number;

  @Column()
  alternativas: [{ letra: string; correta: boolean; texto: string }];

  @Column({ default: true })
  disponivel: boolean;
}

export default Question;
