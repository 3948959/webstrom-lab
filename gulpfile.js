// 引入 Gulp 模块中的 src, dest 和 watch 功能
const { src, dest, watch, series } = require('gulp');

// 引入之前安装的插件
const scss = require('gulp-sass')(require('sass')); // 编译 SCSS
const concat = require('gulp-concat'); // 文件合并

// 定义 styles 任务函数 (这个函数应该已经存在于你的文件中)
function styles() {
    console.log('Running styles task...'); // 添加日志方便观察
    return src('app/scss/style.scss') // 源文件
        .pipe(scss({ outputStyle: 'compressed' })) // 编译 SCSS 并压缩
        .on('error', scss.logError) // 添加错误处理
        .pipe(concat('style.min.css')) // 合并 (虽然只有一个文件，但保持流程完整)
        .pipe(dest('app/css')); // 输出到目标目录
}

// --- 新增代码开始 ---

// 定义 watchTask 函数
function watchTask() {
    console.log('Starting watch task...'); // 启动提示
    // 监听 'app/scss/' 目录下所有 .scss 文件 (包括子目录)
    // 当文件发生变化时，执行 styles 函数
    watch(['app/scss/**/*.scss'], styles);
    // 你也可以在这里添加监听其他文件，例如：
    // watch(['app/**/*.html'], someOtherTask);
    // watch(['app/js/**/*.js'], scriptsTask);
}

// --- 新增代码结束 ---

// 导出任务，使其可以在命令行中被调用
exports.styles = styles; // 导出 styles 任务 (应该已存在)
exports.watch = watchTask; // 导出新的 watch 任务

// (可选) 将 watchTask 设置为默认任务
// 这样在终端直接运行 'gulp' 命令就会启动监听
exports.default = watchTask;
