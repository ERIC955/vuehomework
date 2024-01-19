<template>

 
  
<div class="container">
    
    <div class="text-end mt-4">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal">
        建立新的產品
        </button>
        
    </div>
    <table class="table mt-4">
        <thead>
        <tr>
            <th>圖片</th>
            <th width="120">
            分類
            </th>
            <th>產品名稱</th>
            <th>產品敘述</th>
            <th>產品內容</th>
            <th width="120">
            原價
            </th>
            <th width="120">
            售價
            </th>
            <th width="100">
            是否啟用
            </th>
            <th width="120">
            編輯
            </th>
        </tr>
        </thead>
        <tbody v-for="(item,index) in item" :key="index"  class="align-middle">
        <tr>
            <td><img :src="use.image" ></td>
            <td>{{ item.sort }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.describe }}</td>
            <td>{{ item.illustrate }}</td>
            <td class="text-start">{{ item.original }}</td>
            <td class="text-start">{{ item.price }}</td>
            <td>
            <span v-if="item.enable" class="text-success">啟用</span>
            <span v-else>未啟用</span>
            </td>
            <td>
            <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editProductModal" @click="editItem(item)">
                編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#delProductModal" >
                刪除
                </button>
            </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
<!-- Modal -->
<div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-sm-4">
                    <div class="mb-2">
                    <div class="mb-3">
                        <label for="imageUrl" class="form-label">輸入圖片網址</label>
                        <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="use.image">
                    </div>
                    </div>
                    <div>
                    <button class="btn btn-outline-primary btn-sm d-block w-100">
                        新增圖片
                    </button>
                    </div>
                    <div >
                    <button class="btn btn-outline-danger btn-sm d-block w-100" >
                        刪除圖片
                    </button>
                    </div>
                </div>
                <div class="col-sm-8">
                <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="use.title">
                </div>
                <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="category" class="form-label">分類</label>
                        <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="use.sort">
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">單位</label>
                        <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="use.unit">
                    </div>
                    </div>
                    <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="origin_price" class="form-label">原價</label>
                        <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="use.original">
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">售價</label>
                        <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價" v-model="use.price">
                    </div>
                    </div>
                    <hr>
                    <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述" v-model="use.describe">
                    </textarea>
                    </div>
                    <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容" v-model="use.illustrate">
                    </textarea>
                    </div>
                    <div class="mb-3">
                    <div class="form-check">
                        <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="use.enable">
                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" @click="notPush()">
            取消
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="pushOn()">
            確認
            </button>
        </div>
        </div>
    </div>
</div>

<div id="editProductModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
<div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body"> 
            <div class="row">
                <div class="col-sm-4">
                    <div class="mb-2">
                    <div class="mb-3">
                        <label for="imageUrl" class="form-label">輸入圖片網址</label>
                        <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="editUse.image">
                    </div>
                    </div>
                    <div>
                    <button class="btn btn-outline-primary btn-sm d-block w-100">
                        新增圖片
                    </button>
                    </div>
                    <div >
                    <button class="btn btn-outline-danger btn-sm d-block w-100" >
                        刪除圖片
                    </button>
                    </div>
                </div>
                <div class="col-sm-8">
                <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="editUse.title">
                </div>
                <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="category" class="form-label">分類</label>
                        <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="editUse.sort">
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">單位</label>
                        <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="editUse.unit">
                    </div>
                    </div>
                    <div class="row">
                    <div class="mb-3 col-md-6">
                        <label for="origin_price" class="form-label">原價</label>
                        <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="editUse.original">
                    </div>
                    <div class="mb-3 col-md-6">
                        <label for="price" class="form-label">售價</label>
                        <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價" v-model="editUse.price">
                    </div>
                    </div>
                    <hr>
                    <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述" v-model="editUse.describe">
                    </textarea>
                    </div>
                    <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容" v-model="editUse.illustrate">
                    </textarea>
                    </div>
                    <div class="mb-3">
                    <div class="form-check">
                        <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="editUse.enable">
                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" >
            取消
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="confirmEdit()">
            確認
            </button>
        </div>
        </div>
    </div>
</div>

<div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
    aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
                <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                是否刪除
                <strong class="text-danger"></strong> (刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
                </button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="d(item.title)">
                確認刪除
                </button>
            </div>
            </div>
        </div>
</div>

</template>

<script>
export default{
data() {
    return {
        item:[],

        use:{
            image:"",
            enable:"",
            title:"",
            sort:"",
            unit:"",
            original:"",
            price:"",
            describe:"",
            illustrate:"",
        },
        editUse:[]
    }
},

methods:{
    pushOn(){
        this.item.push(this.use)
        this.use={}
    },
    notPush(){
        this.use={}
    },
    d(index) {
        const findIndex = this.item.findIndex((useIndex) => useIndex.title === index);
        this.item.splice(findIndex,1)
    },
    editItem(item) {
      this.editUse = { ...item }
        // console.log( { ...item })
    },
    confirmEdit() {
        this.item.forEach((item, i) => {
          if (item.title === this.editUse.title) {
            this.item[i] = this.editUse;
          }
        });
    }
}
}
</script>


<style scoped>
img {
    height: 150px;
    width: 100px;
    object-fit: contain;
    max-width: 100%;
  }
  
  .primary-image {
    height: 100px;
  }
  
  .images {
    height: 100px;
  }

</style>