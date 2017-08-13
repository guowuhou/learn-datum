/*(function () {
    var listView = {
        //初始化
        init: function () {
            var data = {tap:'01'};
            this.bindEvent();    //绑定
            this.queryList(data);   //查询   这个this  就是 listView
            //  listView.bindEvent();
            // listView.queryList();

        },
        //绑定事件
        bindEvent: function () {
            var self = this;
            //点击头部
            $("#info-tbs li").on("click",function(){
                var tap = $(this).data('tap');
                var data = {tap:tap};
                self.queryList(data)
            })
        },
        //渲染页面
        render: function (data) {
            var item;
            var html ="";
            var articleList=data.articleList;
            for(var i=0;i<articleList.length;i++){
                item = articleList[i];
                html +="<p>我是内容</p>"
            }
            $("#info-list").html(html);
        },
        //查询列表
        queryList: function (data) {
            var self=this;
            $.ajax({
                url:'http://192.168.2.141/qfang/qfangList.php',
                type:'get',
                data:data,
                dataType:'json',
                success:function(res){
                    if(res.resCode=="000"){
                        self.render(res);
                        //调用渲染方法

                    }else{
                        alert("未找到数据");
                    }
                },error:function(){
                    alert("网络异常,请稍后尝试");
                }
            })


        }


    }
    listView.init();


})()*/


(function(){
    var articleList={
        init:function(){
            var data={tap:"01"};
            this.bindEvent();
            this.query(data);
        },
        bindEvent:function(){
            var self=this;
            $("#info-tbs").on("click"," li",function(){
                var tap=$(this).data("tap");
                var data={tap:tap};
                self.query(data);
            });

            //点击列表
            $("#info-list").on("click"," li",function(){
                var id=$(this).data('id');
                location.href='detail.html#'+id;
            })
        },
        render:function(res){
            var item;
            var html="";
            var articleList=res.articleList;
            for(var i=0;i<articleList.length;i++){
                item=articleList[i];
                html+='<li data-id="'+item.id+'"><a>'+
                    '<div class="list-pic"><img src="'+item.imgUrl+'"></div>'+
                    '<div class="list-text"><h3>'+item.title+'</h3>'+
                    '<p>'+item.abstract+' </p></div>'+
                    '<div class="clearfix"></div></a></li>'
            }
            $("#info-list").html(html)


        },
        query:function(data){
            var self=this;
            $.ajax({
                url:"http://127.0.0.1/qfang/qfangdata/list.json",
                //url:"http://192.168.2.102/qfang/qfangdata/list.json",
                data:data,
                type:"get",
                dataType:"json",
                success:function(res){
                    if(res.resCode=="000"){
                        self.render(res);
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                    alert("网络异常,稍后再试")
                }
            })
        }
    }
    articleList.init()
})()
