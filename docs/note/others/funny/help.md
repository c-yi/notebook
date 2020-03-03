# 帮助文档

## Badge  <Badge text="beta" vertical="middle" type="error"/> <Badge text="默认主题"/>
 - text - string
 - type - string, 可选值： "tip"|"warning"|"error"，默认值是： "tip"
 - vertical - string, 可选值： "top"|"middle"，默认值是： "top"
```md
## Badge  <Badge text="beta" vertical="middle" type="error"/> <Badge text="默认主题"/>
```
## 自定义容器
``` 
    ::: tip 提示
    这是一个提示
    :::
```

::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

## 数学公式

假设 $y >= 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见， 当 $0 <= y <= 1$ 时， 有 $\Phi(y) = 0$. 对于所有 $y >= 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x>= 10^4$ 及 $y>= e^{2{(\log x)}^{-0.1}}$ 时， 则有:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$
