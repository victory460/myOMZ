关于 ionic generate page 不起作用
怀疑原因是ionic app-script的版本的问题


 解决步骤
npm install @ionic/app-scripts@latest
ionic generate page 
但是这条命令好像影响到了 原来npm install了过的包

所以在ionic generate page 后还需要再npm install