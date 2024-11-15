# three.jsが動作しない原因と解決策 + \@
## ライブラリの読み込みに原因がある場合
### CDN or INPORT
#### CDN
cdnは、そのまま拾ってくればいい

#### INPORT
THREE.jsを記述するJavaScriptファイルを指定した<script></script>に、type=”module”を追加する<br>
そのJavaScriptファイルに、ライブラリをimportするコードを書く

#### 補足
cdnとimportの両方のやり方でライブラリを読み込んでいないか確認する

## 3D-Modelファイルの読み込みに原因がある場合
ディレクトリにgltfファイルだけ置いていても、動かない。binファイルも置いておかなくてはいけない
テクスチャは、binファイルだけでは不十分なことがある。png画像などがあれば、それも一緒にディレクトリに格納しておこう

## THREE.jsで使うコード一覧
### THREE.jsを読み込むためのコード
#### cdn
＜script src="[https://cdnjs.cloudflare.com/ajax/libs/three.js/r139/three.min.js](https://cdnjs.cloudflare.com/ajax/libs/three.js/r139/three.min.js "‌")"＞＜/script＞

#### import
##### HTML
＜script type="importmap"> { "imports": { "three": "[https://cdn.jsdelivr.net/npm/three@0.167.0/build/three.module.js](https://cdn.jsdelivr.net/npm/three@0.167.0/build/three.module.js "‌")", "three/addons/": "[https://cdn.jsdelivr.net/npm/three@0.167.0/examples/jsm/](https://cdn.jsdelivr.net/npm/three@0.167.0/examples/jsm/ "smartCard-inline") " } } ＜/script＞

##### JavaScript
import * as THREE from "three";

### GLTFLoaderを読み込むためのコード
#### cdn
＜script src="[https://cdn.jsdelivr.net/npm/three@0.139.0/examples/js/loaders/GLTFLoader.js](https://cdn.jsdelivr.net/npm/three@0.139.0/examples/js/loaders/GLTFLoader.js "‌")"＞＜/script＞

#### import
##### HTML
THREE.jsと共通

##### JavaScript
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

### MMDLoaderを読み込むためのコード
#### cdn
＜script src="[https://cdn.jsdelivr.net/npm/three/examples/js/loaders/MMDLoader.js](https://cdn.jsdelivr.net/npm/three/examples/js/loaders/MMDLoader.js "‌")"＞＜/script＞

#### inport
##### HTML
THREE.jsと共通

##### JavaScript
import { MMDLoader } from "three/addons/loaders/MMDLoader.js";