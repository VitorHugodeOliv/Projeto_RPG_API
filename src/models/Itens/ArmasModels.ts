import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'armas' })
export class Armas extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  nome!: string;

  @Column({ type: DataType.STRING})
  descricao!: string;

  @Column({ type: DataType.ENUM('Arma'), allowNull: false })
  categoria!: 'Arma';

  @Column({ type: DataType.STRING, allowNull: false })
  dano!: string;

  @Column({ type: DataType.ENUM('Corpo a Corpo', 'Distância', 'Híbrida'), allowNull: false })
  tipo!: 'Corpo a Corpo' | 'Distância' | 'Híbrida';

  @Column(DataType.STRING)
  alcance?: string;

  @Column(DataType.ARRAY(DataType.JSON))
  propriedades?: string[];

  @Column({ type: DataType.FLOAT })
  peso!: number;

  @Column({ type: DataType.FLOAT })
  preco!: number;

  @Column(DataType.STRING)
  raridade?: string;
}