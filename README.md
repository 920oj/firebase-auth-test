# firebase-auth-test

## Overview

Firebase Authenticationを試してみたプロジェクト。

### `nuxt-community/firebase-module` の利用

https://github.com/nuxt-community/firebase-module

moduleとして登録すると、 `$fireAuth` として使うことができるようになる。

### storeに認証情報を保存しておくstateを作成
今回は `mail` と `uid` を保存する。

また、 `status` で認証状態を取得できるようにする。

### それぞれの処理はどこに書くのか？

- 新規登録
`pages/signup.vue` の methods に直接書いた
- ログイン
`pages/login.vue` の methods に直接書いた
- 認証状態確認
middlewareに書いて、画面遷移時・読み込み時に逐一チェックするようにした
- ログアウト
`components/TheHeader.vue` のmethodsに直接書いた

リダイレクト処理はそれぞれに書くとして、認証状態によって情報を切り分ける/ページを遷移させるのはmiddlewareに処理を書いた

また、storeのstatusを参照して（gettersのisLoggedIn）、これがtrueだったら情報を表示するようにした

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
