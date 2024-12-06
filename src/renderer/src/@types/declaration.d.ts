// declaration.d.ts
declare module "*.module.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.module.css";
declare module "*.css";
declare module "*.png";
declare module "*.webp";
