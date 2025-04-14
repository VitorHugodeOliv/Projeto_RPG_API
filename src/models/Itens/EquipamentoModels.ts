import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'equipamentos_aventura' })
export class EquipamentoAventura extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  nome!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  descricao!: string;

  @Column({ type: DataType.ENUM('Equipamento de Aventura'), allowNull: false })
  categoria!: 'Equipamento de Aventura';

  @Column({ type: DataType.FLOAT, allowNull: false })
  peso!: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  preco!: number;

  @Column(DataType.STRING)
  raridade?: string;
}