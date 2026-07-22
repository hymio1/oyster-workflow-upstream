// OAuth登录模块骨架
export function generateOAuthState() {
  return Math.random().toString(36).slice(2);
}