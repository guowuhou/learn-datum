(function(){
    var listView={
        init:function(){
            var data={tap:"01"};
            this.bindEvent();
            this.queryList(data);
        },
        bindEvent:function(){
            var self=this;
            $("#info-tbs").on("click","li",function(){
                var tap=$(this).data("tap");//data() 方法向被选元素附加数据，或者从被选元素获取数据。
                var data={tap:tap};
                 self.queryList(data)
            })
            //点击文章列表
            $("#info-list").on("click","li",function(){
                var id=$(this).data("id");
                location.href="detail.html#"+id
            })
        },
        renderList:function(res){
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
        queryList:function(data){
             var self=this;
            $.ajax({
                url:"http://192.168.2.141/qfang/qfangList.php",
                data:data,
                type:"get",
                dataType:"json",
                success:function(res){
                    if(res.resCode=="000"){
                        self.renderList(res);
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                    alert("网路错误,请稍后再试!")
                }
            })
        }
    }
    listView.init()
})()
