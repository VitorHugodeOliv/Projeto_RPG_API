import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'outros' })
export class Outros extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  nome!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  descricao!: string;

  @Column({ type: DataType.ENUM('Outros'), allowNull: false })
  categoria!: 'Outros';

  @Column({ type: DataType.FLOAT, allowNull: false })
  peso!: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  preco!: number;

  @Column(DataType.STRING)
  raridade?: string;
}