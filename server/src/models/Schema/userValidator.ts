import { body } from 'express-validator';

export const userValidationRules = [
  // body('username')
  //   .notEmpty().withMessage('El nombre de usuario es obligatorio')
  //   .isString().withMessage('El nombre de usuario debe ser una cadena de texto'),
  
  body('email')
    .notEmpty().withMessage('El correo electrónico es obligatorio')
    .isEmail().withMessage('Debe proporcionar un correo electrónico válido')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];
