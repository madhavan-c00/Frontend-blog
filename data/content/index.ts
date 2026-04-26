import type { TechContent } from './types';
import { reactContent } from './reactContent';
// import { nodejsContent } from './nodejs';
import { expressjsContent } from './expressjs';
import { nextjsContent } from './next-js';
import { mernStackContent } from './mernstack';
import { meanStackContent } from './meanstack';
import { angularContent } from './Angular';
import { javascriptContent } from './javascriptContent';
import { nodejsContent } from './nodejsContent';
import { pythonContent } from './pythonContent';
import { springbootContent } from './springbootContent';
import { djangoContent } from './djangoContent';
import { javaContent } from './javaContent';
import { sqlContent } from './sqlContent';
import { mongodbContent } from './mongodbContent';
import { typescriptContent } from './typescriptContent';
import { dockerContent } from './dockerContent';

// Add new tech content files here as they are created
export const contentRegistry: Record<string, TechContent> = {
  react: reactContent,
  mean: meanStackContent,
  nextjs: nextjsContent,
  expressjs: expressjsContent,
  mernstack: mernStackContent,
  angular: angularContent,
  javascript: javascriptContent,
  nodejs: nodejsContent,
  python: pythonContent,
  springboot: springbootContent,
  django: djangoContent,
  java: javaContent,
  sql: sqlContent,
  mongodb: mongodbContent,
  typescript: typescriptContent,
  docker: dockerContent

};
