const mockServer = '';
const devServer = 'http://localhost:3000';
const mockEnable = false;

export const devServerOptions = {
  proxy: {
    '/api': {
      target: mockEnable ? mockServer : devServer,
      changeOrigin: !mockEnable,
      rewrite: (path: string) => path.replace(/^\/api/, '')
    }
  }
};
