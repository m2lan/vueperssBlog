# Centos7安装NodeJs18

## 安装编译环境devtoolset-8
```shell
yum install centos-release-scl 

yum install devtoolset-8

scl enable devtoolset-8 bash

gcc --version
```

## 编译安装glibc-2.28
```shell
wget https://ftp.gnu.org/gnu/glibc/glibc-2.28.tar.gz --no-check-certificate

tar -xzvf glibc-2.28.tar.gz

cd glibc-2.28

mkdir build && cd builds
```
> configure 增加 --enable-obsolete-nsl ，解决编译错误 undefined reference to '_nsl_default_nss@GLIBC_PRIVATE' 。
> 修改 scripts/test-installation.pl 128行，增加 && $name ne "nss_test2" ，解决编译错误 nss_test2报错。

```shell
../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin --enable-obsolete-nsl
```

## 执行编译安装
```shell
make && make install
```

## 查看glibc支持的版本：
```shell
strings /lib64/libc.so.6 | grep GLIBC
```

## 升级gcc
```shell
wget https://ftp.gnu.org/gnu/gcc/gcc-8.5.0/gcc-8.5.0.tar.gz --no-check-certificate

tar -xvf gcc-8.5.0.tar.gz

cd gcc-8.5.0

./contrib/download_prerequisites

mkdir build && cd build

../configure --disable-multilib --enable-languages=c,c++ --prefix=$HOME/local

make && make install

vim ~/.bashrc
export LD_LIBRARY_PATH=$HOME/local/lib64
```