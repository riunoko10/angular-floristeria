import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.floristeria.dev',
  appName: 'floristeria',
  webDir: 'dist/floristeria',
  server: {
    androidScheme: 'https'
  }
};

export default config;
