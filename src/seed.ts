import { sequelize } from './services/database';

import { seedArmas } from './seeders/armasSeeders';


async function runSeeders() {
    try {
      await sequelize.sync({ alter: true }); // ou { force: true } para recriar as tabelas do zero
      await seedArmas(); // Chama o seeder que você criou
      // await seedArmaduras(); // Se tiver outros, chama aqui também
      console.log('🌱 Seeders executados com sucesso!');
      process.exit(0);
    } catch (error) {
      console.error('Erro ao executar seeders:', error);
      process.exit(1);
    }
}
  
runSeeders();