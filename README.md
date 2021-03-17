<a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png" title="Mb" alt="MB"></a>

# Creamy - 31アイスクリーム会計システム

## [HomePage https://creamy31.vercel.app/](https://creamy31.vercel.app/)
> 綺麗なデザイン

> Powered by Nextjs & GraphQL




**ユーザー情報**
- ログインID: mrmbiuzz
- パスワード: minhbiu1234
- それを使ってログインしてください


**機能**
- 商品管理（修正機能は完成中）
- レシート管理
- ユーザー管理
- 会計
- etc.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger)
**_試写_**

[![INSERT YOUR GRAPHIC HERE](https://lh3.googleusercontent.com/pw/ACtC-3d34oARyv895pKpb2cnXx2shad9q55OoguS1-3Ss2uUy-V4Ld02UOiL3knXi1Gnt3XGK2p6djJE7pKun2Dmc5Jv3KdEa5N8tlNp17_v_Uhk8PjtKzCT5gSjmTYHBHKwSVcqZNsnQIu6icHqdQ5P0m8E=w1567-h882-no)]()
[![INSERT YOUR GRAPHIC HERE](https://lh3.googleusercontent.com/pw/ACtC-3c7cthUdhZ8npQSGidNRf0rTNZuufYbPHvfJI8--dTfMjsj8cPzF_DiF8iUD9_vw25wWHJSgBRS5vAJyh_I-OypyTSyHylDP2sJtS2cNMOkhAAbbr-Fgw_HjltElD33V9j65No1EL6MwzvBwELCL_-C=w1064-h883-no?authuser=0)]()
[![INSERT YOUR GRAPHIC HERE](https://lh3.googleusercontent.com/pw/ACtC-3egyTenw9RgJRgHiIgZ8pTewF93uaOO7HmDNNyZ57RrWxuNu8pLI92l4UROspLLyN8tUYPo-3Fe2v3wOUeuskKv5oFl79vIFUAHE84ZH5-hluldQsrX7zKyo5NGLTw22U1YBYiV7_2YxdjaUNta373r=w951-h882-no?authuser=0)]()
[![INSERT YOUR GRAPHIC HERE](https://lh3.googleusercontent.com/pw/ACtC-3dZspac2epbbdRMdfVEMd7nbT5GWT_SycyvNZcCgTNHXW7jTK6G3roInk0c7C9S2HfN_721pmesbYeAmlPPPa0TslBHdKdeSu7ksGFj_ekKOP7RJUndNXfodzizrtVG-EOsfC_ZwSIEbiSFS-N-smVc=w1668-h882-no?authuser=0)]()


## 目次

- [インストール](#インストール)
- [ライセンス](#ライセンス)

---

## システムの構造
- /pages : URLに応じる各ページ
- /lib: urql クライアントの設定と認証設定
- /theme: テーマの設定
- /utils: よく使う便利なfunction
- /generated: GraphQL Code Generatorのoperationの自動作成のコンポーネント（触らないで)
- /containers: アプリの状態管理(カートとか)
- /components: 各ページのコンポーネント
- /config: Global setting
- /graphql: GraphQLのQuery,Mutation
---


## 設定
- /codegen.yml : GraphQL Enpoind の設定
- /config/config.ts : S3 Bucket Endpoint 設定
---

## インストール

### クローンする

- このレポジトリをクローンする

```shell
$ git clone https://github.com/mizhstreet/creamy-next.git
```

### 開発

- このcommandを打ってください

```shell
$ yarn dev
```

### GraphQL のコンポーネントを自動作成:

```shell
$ yarn gen
```


---

## サーバー機動

```shell
$ yarn start
```

---

## ライセンス

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
