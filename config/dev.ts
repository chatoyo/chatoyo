const mockServer = '';
const devServer = '';
const mockEnable = true;

export const devServerOptions = {
  proxy: {
    '/api': {
      target: mockEnable ? mockServer : devServer,
      changeOrigin: !mockEnable
    }
  }
};
