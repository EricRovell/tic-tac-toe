import { pathsToModuleNameMapper } from "ts-jest/utils/index.js";
import { compilerOptions } from "./tsconfig.json";

export default {
  "roots": [
    "<rootDir>/src"
  ],
  "moduleNameMapper": pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/"}),
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}