# docker仓库
Docker仓库( Repository)类似与代码仓库,是 Docker集中存放镜像文件的地方。

## docker hub

1、打开https://hub.dockercom
2、注册账号:略
3、创建仓库( Create Repository):略
4、设置镜像标签
docker tag local-image: tagname new-repo: tagname (eTag)
eg: dicker tag hello-worll:latest 108001509033/test-hello-world:v1
5、登录 docker hub
docker login(回车,输入账号以及密码)
6、推送镜像
docker push new-repo: tagname
eg: docker push 108001509033/test-hello-world: v1