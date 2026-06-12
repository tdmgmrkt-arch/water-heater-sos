// Ambient module declarations for side-effect imports that VS Code's
// TypeScript Language Server occasionally fails to resolve after rebuilds
// of `.next/types/`. Next.js itself handles these via next-env.d.ts; this
// file is a belt-and-suspenders guarantee so editor diagnostics stay clean.
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
