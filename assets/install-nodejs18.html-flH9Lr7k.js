import{_ as n,o as s,c as a,a as e}from"./app-hvhM4Klf.js";const i={},l=e(`<h1 id="centos7安装nodejs18" tabindex="-1"><a class="header-anchor" href="#centos7安装nodejs18" aria-hidden="true">#</a> Centos7安装NodeJs18</h1><h2 id="安装编译环境devtoolset-8" tabindex="-1"><a class="header-anchor" href="#安装编译环境devtoolset-8" aria-hidden="true">#</a> 安装编译环境devtoolset-8</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> centos-release-scl 

yum <span class="token function">install</span> devtoolset-8

scl <span class="token builtin class-name">enable</span> devtoolset-8 <span class="token function">bash</span>

gcc <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译安装glibc-2-28" tabindex="-1"><a class="header-anchor" href="#编译安装glibc-2-28" aria-hidden="true">#</a> 编译安装glibc-2.28</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://ftp.gnu.org/gnu/glibc/glibc-2.28.tar.gz --no-check-certificate

<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> glibc-2.28.tar.gz

<span class="token builtin class-name">cd</span> glibc-2.28

<span class="token function">mkdir</span> build <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> builds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>configure 增加 --enable-obsolete-nsl ，解决编译错误 undefined reference to &#39;_nsl_default_nss@GLIBC_PRIVATE&#39; 。 修改 scripts/test-installation.pl 128行，增加 &amp;&amp; $name ne &quot;nss_test2&quot; ，解决编译错误 nss_test2报错。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>/configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr --disable-profile --enable-add-ons --with-headers<span class="token operator">=</span>/usr/include --with-binutils<span class="token operator">=</span>/usr/bin --enable-obsolete-nsl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="执行编译安装" tabindex="-1"><a class="header-anchor" href="#执行编译安装" aria-hidden="true">#</a> 执行编译安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看glibc支持的版本" tabindex="-1"><a class="header-anchor" href="#查看glibc支持的版本" aria-hidden="true">#</a> 查看glibc支持的版本：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>strings /lib64/libc.so.6 <span class="token operator">|</span> <span class="token function">grep</span> GLIBC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="升级gcc" tabindex="-1"><a class="header-anchor" href="#升级gcc" aria-hidden="true">#</a> 升级gcc</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://ftp.gnu.org/gnu/gcc/gcc-8.5.0/gcc-8.5.0.tar.gz --no-check-certificate

<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> gcc-8.5.0.tar.gz

<span class="token builtin class-name">cd</span> gcc-8.5.0

./contrib/download_prerequisites

<span class="token function">mkdir</span> build <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> build

<span class="token punctuation">..</span>/configure --disable-multilib --enable-languages<span class="token operator">=</span>c,c++ <span class="token parameter variable">--prefix</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/local

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">vim</span> ~/.bashrc
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/local/lib64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[l];function t(d,r){return s(),a("div",null,c)}const p=n(i,[["render",t],["__file","install-nodejs18.html.vue"]]);export{p as default};
