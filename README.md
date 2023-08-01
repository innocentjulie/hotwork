# hotwork 使用指南

## 安装

    npm i hotwork -g
    npm i hotwork -D

### 临时使用国内镜像进行全局安装，推荐使用`nrm`来管理

    npm i hotwork -g --registry https://registry.npm.taobao.org

### 如果需要长期使用国内镜像

    npm config set registry https://registry.npm.taobao.org

### 测试是否安装成功

     hotwork -v （如果成功会正确输出工具包版本）
    
### 更新工具包

    npm update -g hotwork

### 删除工具包
    npm uninstall hotwork -g

### 使用

    导出的module必须要包括`beans`才能使用，其中的`myManager`就是对象的构造函数
    
```javascript
    module.exports = {
        name: "myModule",
        beans: [{
            id: "MyManager",
            func: MyManager,
            scope: "singleton"
        }]
    };
```