/*
 (function(){
 var listView={
 //初始化
 init:function(){
 var data={tap:"01"};
 this.bindEvent();//绑定
 this.queryList(data);//查询
 },
 //绑定事件
 bindEvent:function(){
 var self=this;
 //点击头部
 $("#info-tbs li").on("click",function(){
 var tap=$(this).data('tap');
 var date={tap:tap};
 self.queryList(date)
 })
 },
 //渲染页面
 render:function(data){
 var item;
 var html="";
 var articleList=data.articleList;
 for(var i=0;i<articleList.length;i++){
 item=articleList[i];
 html+="<p>风暴来袭</p>"
 }
 $("#info-list").html(html);
 },
 //查询列表
 queryList:function(data){
 var self=this
 $.ajax({
 url:'http://192.168.2.141/qfang/qfangList.php',
 type:"get",
 data:data,
 dataType:"json",
 success:function(res){
 if(res.resCode="000"){
 self.render(res);
 //调用渲染
 }else{
 alert("未找到数据")
 }
 },error:function(){
 alert("网络异常,请稍后尝试")
 }
 })
 }
 }
 listView.init();
 })()*/


/*(function(){
    var listView={
        init:function(){
            var data={tap:"01"};
            this.bindEvent();
            this.queryList(data);
        },
        bindEvent:function(){
            var self=this
            $("#info-tbs li").on("click",function(){
                var tap=$(this).data("tap");
                var data={tap:tap}
                self.queryList(data)
            })
        },
        render:function(data){
            var item;
            var html="";
            var articleList=data.articleList;
            for(var i=0;i<articleList.length;i++){
                item=articleList[i];
                html+="<p>风暴来袭</p>"
            }
            $("#info-list").html(html)

        },
        queryList:function(data){
            var self=this
            $.ajax({
                url:"http://192.168.2.141/qfang/qfangList.php",
                type:"get",
                data:data,
                dataType:"json",
                success:function(res){
                    if(res.resCode="000"){
                        self.render(res);
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                    alert("网络异常")
                }

            })
        }
    }

    listView.init()

})()*/


/*(function(){
    var listView={
        init:function(){
            var data={tap:"01"};
            this.bindEvent();
            this.queryList(data);
        },
        bindEvent:function(){
             var self=this;
            $("#info-tbs li").on("click",function(){
                var tap=$(this).data("tap");
                var data={tap:tap};
                self.queryList(data)
            })
        },
        render:function(data){
            var item;
            var html="";
            var articleList=data.articleList
            for(i=0;i<articleList.length;i++){
                item=articleList[i];
                html+="<p>好棒啊</p>"
            }
             $("#info-list").html(html)
        },
        queryList:function(data){
           var self=this;
            $.ajax({
                url:"http://192.168.2.141/qfang/qfangList.php",
                type:"get",
                data:data,
                dataType:"json",
                success:function(res){
                    if(res.resCode="000"){
                        self.render(res);
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                    alert("网络出错,稍后再试!")
                }

            })
        }
    }
    listView.init()  //调用
})()*/

/*
(function(){
    var listView={
        init:function(){
            var data={tap:"01"};
            this.bindEvent();
            this.queryList(data)
        },
        bindEvent:function(){
            var self=this;
            $("#info-tbs li").on("click",function(){
                var tap=$(this).data('tap');//data-tap为固定写法
                var data={tap:tap}; //大括号里表示json的值,前面tap表示tap的标签后面tap表示01,02,03,04
                self.queryList(data)
            })
        },
        render:function(data){
             var items;
             var html="";
            var articleList=data.articleList;
            for(var i=0;i<articleList.length;i++){
                items=articleList[i];
                html+="<p>风暴来袭啊</p>"
            }
            $("#info-list").html(html)
        },
        queryList:function(data){
            var self=this;
            $.ajax({
                type:"get",
                url:"http://192.168.2.141/qfang/qfangList.php",
                data:data,
                dataType:"json",
                success:function(res){
                    if(res.resCode="000"=="000"){
                        self.render(res)
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                alert("网络出错,下次再试")
            }

            })
        }
    }
    listView.init()
})()*/


(function(){
    //页面初始化
    var listView={
        init:function(){
            var data={tap:"01"};//首页显示
            this.bindEvent(); //绑定事件  相当于listView.bindEvent
            this.queryList(data); //查询列表 相当于listView. queryList
        },
        bindEvent:function(){
            var self=this;
            //点击头部
            $("#info-tbs").on("click"," li",function(){
                var tap=$(this).data("tap");//获取相同ID下各个导航的信息用变量接收
                var data={tap:tap}; //相当于间值对 方便到时候的引用data.tap
                self.queryList(data) ;//带着data储存的东西去查询列表
                $(this).addClass("current").siblings().removeClass();
            });
            //点击文章列表
            $("#info-list").delegate("li","click",function(){
                var id=$(this).data('id');
                location.href='detail.html#'+id;
            })
        },
        //渲染页面
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
        //查询列表
        queryList:function(data){
            var self=this;
            $.ajax({
                url:"http://192.168.2.141/qfang/qfangList.php",
                type:"get",
                dataType:"json",
                data:data,
                success:function(res){
                    if(res.resCode=="000"){
                        self.render(res)
                    }else{
                        alert("未找到数据")
                    }
                },error:function(){
                    alert("网络出错,请稍后再试")
                }
            })
        }
    }
    listView.init()
})()
