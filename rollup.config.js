import typescript from 'rollup-plugin-typescript2';
import * as packageJson from './package.json';
import dts from 'rollup-plugin-dts';

const config = [
  {
    input: 'src/Index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        clean: true,
      }),
    ],
    external: [],
  },
  {
    input: './build/Index.d.ts',
    output: [{ file: 'build/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

export default config;
