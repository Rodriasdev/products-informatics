import { body } from 'express-validator';

export const productValidationRules = [

  body('name')
    .notEmpty().withMessage('El nombre del producto es obligatorio')
    .isString().withMessage('El nombre debe ser una cadena de texto'),

  body('brand')
    .notEmpty().withMessage('La marca del producto es obligatoria')
    .isString().withMessage('La marca debe ser una cadena de texto'),

  body('model')
    .notEmpty().withMessage('El modelo del producto es obligatorio')
    .isString().withMessage('El modelo debe ser una cadena de texto'),

  body('acquisition_date')
    .notEmpty().withMessage('La fecha de adquisición es obligatoria')
    .isISO8601().withMessage('La fecha de adquisición debe ser una fecha válida en formato ISO8601'),

  body('state')
    .optional()
    .isIn(['Reparación', 'Disponible', 'Fuera de servicio'])
    .withMessage('El estado debe ser uno de los siguientes: Reparación, Disponible, Fuera de servicio'),

  body('location')
    .notEmpty().withMessage('La ubicación del producto es obligatoria')
    .isString().withMessage('La ubicación debe ser una cadena de texto')
];
