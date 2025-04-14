import { Request, Response } from "express";
import { Armas } from "../../models/Itens/ArmasModels";

export const getArmas = async (req: Request, res: Response) => {
    try {
        const armas = await Armas.findAll();
        res.status(200).json(armas);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar armas" });
    }
}

export const postArmas = async (req: Request, res: Response) => {
    try {
        const { nome, descricao, raridade, categoria, peso, preco, dano, tipo, alcance, propriedades } = req.body;
        const novaArma = await Armas.create({ nome, descricao, raridade, categoria, peso, preco, dano, tipo, alcance, propriedades });
        res.status(201).json(novaArma);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar arma" });
    }
}

export const getArmasByName = async (req: Request, res: Response) => {
    try {
        const { nome } = req.params;
        const arma = await Armas.findOne({ where: { nome } });
        if (!arma) {
            return res.status(404).json({ error: "Arma não encontrada" });
        }
        res.status(200).json(arma);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar arma" });
    }
}

export const updateArmas = async (req: Request, res: Response) => {
    try {
        const { nome } = req.params;
        const { descricao, raridade, categoria, peso, preco, dano, tipo, alcance, propriedades } = req.body;
        const [updated] = await Armas.update({ descricao, raridade, categoria, peso, preco, dano, tipo, alcance, propriedades }, { where: { nome } });
        if (!updated) {
            return res.status(404).json({ error: "Arma não encontrada" });
        }
        res.status(200).json({ message: "Arma atualizada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar arma" });
    }
}

export const deleteArmas = async (req: Request, res: Response) => {
    try {
        const { nome } = req.params;
        const deleted = await Armas.destroy({ where: { nome } });
        if (!deleted) {
            return res.status(404).json({ error: "Arma não encontrada" });
        }
        res.status(200).json({ message: "Arma deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar arma" });
    }
}