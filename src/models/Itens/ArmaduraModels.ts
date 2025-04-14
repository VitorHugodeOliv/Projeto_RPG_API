import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'armaduras' })
export class Armadura extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  nome!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  descricao!: string;

  @Column({ type: DataType.ENUM('Armadura'), allowNull: false })
  categoria!: 'Armadura';

  @Column({ type: DataType.STRING, allowNull: false })
  tipo!: 'Leve' | 'Média' | 'Pesada' | 'Escudo';

  @Column({ type: DataType.INTEGER, allowNull: false })
  CA!: number;

  @Column({ type: DataType.INTEGER })
  forcaMinima?: number;

  @Column({ type: DataType.BOOLEAN })
  desvantagem?: boolean;

  @Column({ type: DataType.INTEGER })
  penalidadeDeslocamento?: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  peso!: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  preco!: number;

  @Column({ type: DataType.STRING })
  raridade?: string;
}