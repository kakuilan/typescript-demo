#### tsconfig.json注释版
```js
const conf = {
  compilerOptions: {
    /* Basic Options */
    // "incremental": true,                   /* 是否启用增量编译 */
    target:
      "es6" /* 目标代码类型: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    module:
      "commonjs" /* 指定生成哪个模块系统代码: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    // "lib": [],                             /* 编译过程中需要引入的库文件的列表. */
    allowJs: true /* 允许编译javascript文件. */,
    checkJs: true /* 在 .js文件中报告错误。与 --allowJs配合使用. */,
    // "jsx": "preserve",                     /* 在 .tsx文件里支持JSX: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* 生成相应的 .d.ts文件. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    outDir: "./dist" /* 编译输出目录. */,
    rootDir: "./src" /* 根目录. */,
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    removeComments: true /* 删除所有注释，除了以 /!*开头的版权信息. */,
    // "noEmit": true,                        /* 不生成输出文件. */
    importHelpers: true /* 从 tslib 导入辅助工具函数. */,
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* 将每个文件作为单独的模块 (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    strict: true /* 启用所有严格类型检查选项. */,
    // "noImplicitAny": true,                 /* 在表达式和声明上有隐含的 any类型时报错. */
    // "strictNullChecks": true,              /* 在严格的 null检查模式下， null和 undefined值不包含在任何类型里，只允许用它们自己和 any来赋值. */
    // "strictFunctionTypes": true,           /* 禁用函数参数双向协变检查. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* 确保类的非undefined属性已经在构造函数里初始化。若要令此选项生效，需要同时启用--strictNullChecks. */
    // "noImplicitThis": true,                /* 当 this表达式的值为 any类型的时候，生成一个错误. */
    alwaysStrict: true /* 以严格模式解析并为每个源文件生成 "use strict"语句. */,

    /* Additional Checks */
    noUnusedLocals: true /* 若有未使用的局部变量则抛错. */,
    // "noUnusedParameters": true,            /* 若有未使用的参数则抛错. */
    // "noImplicitReturns": true,             /* 不是函数的所有返回路径都有返回值时报错. */
    // "noFallthroughCasesInSwitch": true,    /* 报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* 决定如何处理模块: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* 解析非相对模块名的基准目录. */
    // "paths": {},                           /* 模块名到基于 baseUrl的路径映射的列表. */
    // "rootDirs": [],                        /* 根（root）文件夹列表，表示运行时组合工程结构的内容. */
    // "typeRoots": [],                       /* 要包含的类型声明文件路径列表. */
    // "types": [],                           /* 要包含的类型声明文件名列表. */
    // "allowSyntheticDefaultImports": true,  /* 允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查. */
    esModuleInterop: true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* 不把符号链接解析为其真实路径；将符号链接文件视为真正的文件. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* 指定TypeScript源文件的路径，以便调试器定位. */
    // "mapRoot": "",                         /* 为调试器指定指定sourcemap文件的路径，而不是使用生成时的路径. */
    // "inlineSourceMap": true,               /* 生成单个sourcemaps文件，而不是将每sourcemaps生成不同的文件. */
    // "inlineSources": true,                 /* 将代码与sourcemaps生成到一个文件中，要求同时设置了 --inlineSourceMap或 --sourceMap属性. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* 启用实验性的ES装饰器. */
    // "emitDecoratorMetadata": true,         /* 给源码里的装饰器声明加上设计类型元数据. */
  }
};
```