 * 　　 へ　　　　　／|
 * 　　/＼7　　　 ∠＿/
 * 　 /　│　　 ／　／
 * 　│　Z ＿,＜　／　　  /`ヽ
 * 　│　　　　　ヽ　　  /　　〉
 * 　 Y　　　　　`　    /　　/
 * 　ｲ●　､　●　⊂⊃  〈　　/
 * 　()　 へ　　　　|　＼ 〈
 * 　　ｰ ､_　 ィ　 │ ／ ／
 * 　 / へ　　 /　ﾉ＜| ＼＼
 * 　 ヽ_ﾉ　　(_／　 │／／
 * 　　7　　　　　　　|／
 * 　　＞―r￣￣`ｰ―＿

 ## 代码神兽、、、

# hello

## 全局安装 vue-cli
```
$ npm install --global vue-cli
```
## 创建一个基于 webpack 模板的新项目
```
$ vue init webpack my-project
```
## 安装依赖，走你

```
$ cd my-project
$ npm install
$ npm run dev
```

以上方法是自己本地创建vue + webpack 工程的方法。

要是采用我的工程只需要git clone  仓库地址。

然后cd 到目录下。再执行

```
$ npm install
$ npm run dev
```

   -- 说明 --
 ```
1、电脑上已安装node 及item。
2、cd 到打算放置vue 的文件夹下。
3、执行以上命令。npm install 的时候可能会出现卡掉进行不下去。此时可停止安装。执行 npm install -g 命令即可
4、再执行npm run dev即可。
5、打开文件后会出现js文件报错。点击灯泡标识，转换js格式。注：本人用的是webstrom 编辑器。
6、下次再打开工程报错如： 'process-nextick-args'  此时重新 npm install node 即可（此坑研究了好久。终于解决。心好累啊。）。
```
