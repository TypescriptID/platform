export const compilerOptions = () => ({
  moduleResolution: 'node',
  target: 'ES2022',
  baseUrl: '.',
  experimentalDecorators: true,
  paths: {
    '@ngrx/operators': ['./modules/operators'],
  },
});
