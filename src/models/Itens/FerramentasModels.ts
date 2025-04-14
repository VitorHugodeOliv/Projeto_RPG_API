import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'ferramentas' })
export class Ferramenta extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  nome!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  descricao!: string;

  @Column({ type: DataType.ENUM('Ferramenta'), allowNull: false })
  categoria!: 'Ferramenta';

  @Column(DataType.STRING)
  tipo?: string;

  @Column(DataType.STRING)
  uso?: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  peso!: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  preco!: number;

  @Column(DataType.STRING)
  raridade?: string;
}