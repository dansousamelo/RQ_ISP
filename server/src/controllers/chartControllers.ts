import { Request, Response } from "express"

import { findInspectionStatisticsAndAttributesByInspectionId, findItemsCategoriesByInspectionId, findItemsSituationStatisticsByInspectionId } from "../services/chartServices";

import { getErrorMessage } from "../utils/errorMessage";

import { isCategoryValid, isString } from "../interfaces/typeGuards";

export default {
    async findInspectionCategories(req: Request, res: Response){
        try {
            const { inspectionId } = req.query

            if(!isString(inspectionId)){
                return res.status(400).json({
                    error: true,
                    status: 400,
                    message: "Forneça um id de inspeção válido!",
                    data: {}
                })
            }

            const categories = await findItemsCategoriesByInspectionId(inspectionId);

            return res.status(200).json({
                error: false,
                status: 200,
                message: "Categorias da inspeção encontradas com sucesso!",
                data: {
                    categories
                }
            })
            
        } catch (error) {
            return res.status(500).json({
                error: true,
                status: 500,
                message: getErrorMessage(error),
                data: {},
            });
        }
    },

    async findInspectionItemsSituationsStatistics(req: Request, res: Response) {
        try {
            const { inspectionId, category } = req.query

            if(!isString(inspectionId)){
                return res.status(400).json({
                    error: true,
                    status: 400,
                    message: "Forneça um id de inspeção válido!",
                    data: {}
                })
            }

            if(!isString(category) || !isCategoryValid(category)){
                return res.status(400).json({
                    error: true,
                    status: 400,
                    message: "Forneça uma categoria de inspeção válida!",
                    data: {}
                })
            }

            const statistics = await findItemsSituationStatisticsByInspectionId(inspectionId, category)

            return res.status(200).json({
                error: false,
                status: 200,
                message: "Estatísticas da inspeção encontradas com sucesso!",
                data: {
                    category: category,
                    statistics
                }
            })
            
        } catch (error) {
            return res.status(500).json({
                error: true,
                status: 500,
                message: getErrorMessage(error),
                data: {},
            });
        }
    },

    async findInspectionStatisticsAndAttributes(req: Request, res: Response) {
        try {
            const { inspectionId } = req.query

            if(!isString(inspectionId)){
                return res.status(400).json({
                    error: true,
                    status: 400,
                    message: "Forneça um id de inspeção válido!",
                    data: {}
                })
            }

            const inspectionData = await findInspectionStatisticsAndAttributesByInspectionId(inspectionId);

            return res.status(200).json({
                error: false,
                status: 200,
                message: "Estatísticas e atributos da inspeção encontrados com sucesso!",
                data: inspectionData
            })

        } catch (error) {
            return res.status(500).json({
                error: true,
                status: 500,
                message: getErrorMessage(error),
                data: {},
            });
        }
    }
}